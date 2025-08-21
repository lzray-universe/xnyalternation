import json
import re
import string
import random
from bs4 import BeautifulSoup
import requests
import time
import os
import mimetypes
import pdfkit
import aiohttp
import asyncio
import ssl
import tempfile
from urllib import parse
from urllib import parse as _parse
from flask import Flask, request, Response, redirect, send_from_directory, make_response, jsonify

TARGET_URL = os.environ.get('TARGET_URL', 'https://bdfz.xnykcxt.com:5002')
app = Flask(__name__)

# —— 确保输出目录存在、配置 wkhtmltopdf 路径 ——
os.makedirs('pdfs', exist_ok=True)
WKHTMLTOPDF_BIN = os.environ.get('WKHTMLTOPDF_PATH', '/usr/bin/wkhtmltopdf')
PDFKIT_CONFIG = pdfkit.configuration(wkhtmltopdf=WKHTMLTOPDF_BIN)

async def get(session, url, headers=None):
    async with session.get(url, headers=headers) as response:
        return await response.json()

def getName():
    timestamp = int(time.time() * 1000)
    random_letters = ''.join(random.choices(string.ascii_letters, k=10))
    return f"{timestamp}{random_letters}"

def convert_html_to_pdf(html_content, output_pdf_path):
    html_content = """<style>
    img { max-width: 100%; height: auto; }
    * { font-family: 'Noto Sans CJK', 'WenQuanYi Zen Hei', sans-serif; }
    </style>""" + html_content
    soup = BeautifulSoup('<meta charset="UTF-8">\n' + html_content, 'html.parser')

    for img in soup.find_all('img'):
        if img.has_attr('src') and not img['src'].startswith("http"):
            img['src'] = TARGET_URL + img['src']

    os.makedirs(os.path.dirname(output_pdf_path) or '.', exist_ok=True)

    tmp_html = tempfile.NamedTemporaryFile(delete=False, suffix=".html")
    try:
        tmp_html.write(str(soup).encode('utf-8'))
        tmp_html.flush()
        tmp_html.close()

        options = {
            'page-size': 'A4',
            'margin-top': '0.75in',
            'margin-right': '0.75in',
            'margin-bottom': '0.75in',
            'margin-left': '0.75in',
            'encoding': "UTF-8",
            'custom-header': [('Accept-Encoding', 'gzip')],
            'enable-local-file-access': None
        }
        pdfkit.from_file(tmp_html.name, output_pdf_path, options=options, configuration=PDFKIT_CONFIG)
    finally:
        try:
            os.unlink(tmp_html.name)
        except Exception:
            pass

def extract_catalog_names(data, result_list):
    for i in data:
        result_list.append({"id": i["id"], "name": ids[i["creator"]] + "/" + i['catalogNamePath']})
        if 'childList' in i and i['childList']:
            extract_catalog_names(i['childList'], result_list)

def api(path):
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/{path}',
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)

    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers and name != "Set-Cookie"]
    response = Response(resp.content, resp.status_code, headers)
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

def static(file_path):
    normalized_path = os.path.normpath(file_path)
    if normalized_path.startswith('..') or '..' in normalized_path.split(os.path.sep):
        return Response("Not Found", mimetype='text/html; charset=utf-8', status=404)

    if file_path.endswith('/'):
        local_file_path = os.path.join(normalized_path.lstrip('/\\'), 'index.html')
    elif len(file_path.split(".")) == 1:
        local_file_path = os.path.join(normalized_path.lstrip('/\\'), 'index.html')
    else:
        local_file_path = os.path.join(normalized_path.lstrip('/\\'))
    local_file_path = re.sub('\\\\', "/", local_file_path)

    mime_type, _ = mimetypes.guess_type(file_path)
    if mime_type is None:
        mime_type = 'text/html; charset=utf-8'

    if os.path.exists(os.path.join("static", local_file_path)):
        return make_response(send_from_directory("static", local_file_path, as_attachment=False))
    else:
        remote_url = f"{TARGET_URL}/{file_path.replace(os.path.sep, '/')}"
        response = requests.get(
            remote_url,
            verify=False,
            headers={key: value for key, value in request.headers if key != 'Host'},
            data=request.get_data(),
            cookies=request.cookies,
            allow_redirects=False
        )

        if response.status_code // 100 < 4:
            content = response.content
            if (len(content) < 5 * 2 ^ 20):  # 保持你原逻辑
                os.makedirs(os.path.dirname(local_file_path), exist_ok=True)
                with open(local_file_path, 'wb') as file:
                    file.write(content)
            return Response(content, mimetype=mime_type, status=200)
        else:
            return Response(response.content, mimetype=mime_type, status=response.status_code)

@app.route("/exam/login/api/logout")
def logout():
    response = redirect('/stu/#/login')
    response.set_cookie('token', '', expires=0)
    return response

# ============== 新增：PDF 代理，让 PDF.js 统一走你自己的域名 =================
@app.route('/pdfproxy')
def _pdfproxy():
    raw = request.args.get('url', '')
    if not raw:
        return Response("missing url", 400)
    url = _parse.unquote(raw)
    if url.startswith('/'):
        upstream = f"{TARGET_URL}{url}"
    else:
        upstream = url
    r = requests.get(
        upstream,
        verify=False,
        headers={k: v for k, v in request.headers if k.lower() != 'host'},
        cookies=request.cookies,
        stream=True,
        allow_redirects=True
    )
    ct = r.headers.get('Content-Type', '') or 'application/pdf'
    return Response(r.content, status=r.status_code, headers=[('Content-Type', ct)])
# ============================================================================

@app.route('/getWebFile')
def getWebFile():
    url = TARGET_URL + request.args.get('url')
    name = request.args.get("courseName")
    cookies = request.cookies
    res = requests.get(url, cookies=cookies, verify=False)
    text = res.json()
    data = []
    for i in text["extra"]:
        if i["contentType"] == 1:
            continue
        data.append({"type": i["contentType"], "value": i["content"]["textContent"]
        if i["contentType"] == 0 else i["content"]["questionStem"]})

    html_content = "\n<br><br><br><br><br><br>\n".join([i["value"] for i in data])
    fileName = getName()
    output_pdf_path = 'pdfs/%s.pdf' % fileName
    convert_html_to_pdf(html_content, output_pdf_path)
    with open(output_pdf_path, "rb") as f:
        data = f.read()

    headers = [("content-disposition", "attachment;filename*=utf-8'zh_cn'%s.pdf" % name),
               ("content-type", "application/force-download")]
    return Response(data, 200, headers=headers, mimetype="application/pdf")

@app.route("/downloadFile", methods=["GET"])
def downloadFile():
    url = parse.unquote(request.args.get('url'))
    name = request.args.get('name')
    r = requests.get(url, verify=False)
    content = r.content
    # —— 若是 PDF，按 PDF 类型返回，便于 PDF.js 直接预览 ——
    if url.lower().endswith('.pdf'):
        return Response(content, 200, [('Content-Type', 'application/pdf')])
    headers = [("content-disposition",
                "attachment;filename*=utf-8'zh_cn'%s.%s" % (name, url.split(".")[-1])),
               ("content-type", "application/force-download")]
    return Response(content, 200, headers)

@app.route("/downloadAnswers", methods=["GET"])
def downloadAnswers():
    html = parse.unquote(request.args.get("html"))
    name = request.args.get("name")
    fileName = getName()
    output_pdf_path = 'pdfs/%s.pdf' % fileName
    convert_html_to_pdf(html, output_pdf_path)
    with open(output_pdf_path, "rb") as f:
        data = f.read()
    headers = [("content-disposition", "attachment;filename*=utf-8'zh_cn'%s.pdf" % name),
               ("content-type", "application/force-download")]
    return Response(data, 200, headers=headers, mimetype="application/pdf")

@app.route("/getAllCourses")
async def getAllCourses():
    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE
    req_headers = {key: value for key, value in request.headers if key != 'Host'}
    res = requests.get(TARGET_URL + "/exam/api/student/teacher/entity", headers=req_headers)
    info = res.json()["extra"]
    global ids
    ids = {i["id"]: i["subjectName"] for i in info}
    connector = aiohttp.TCPConnector(ssl=False)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = []
        for id in ids:
            task = asyncio.create_task(get(session, TARGET_URL + "/exam/api/student/catalog/entity/%d" % id, req_headers))
            tasks.append(task)
        datas = await asyncio.gather(*tasks)
    courses = []
    for data in datas:
        extract_catalog_names(data["extra"], courses)
    headers = {"content-type": "application/json"}
    return Response(json.dumps(courses), 200, headers=headers)

@app.route('/')
def redirect_to_login():
    return redirect('/stu/#/course?pageid=0', code=302)

# —— 混合内容自动升级（HTTPS 下避免 http 子请求） ——
@app.after_request
def _upgrade_insecure_requests(resp):
    csp = resp.headers.get('Content-Security-Policy', '')
    rule = 'upgrade-insecure-requests'
    if 'upgrade-insecure-requests' not in csp:
        csp = (csp + ('; ' if csp else '') + rule)
        resp.headers['Content-Security-Policy'] = csp
    return resp

# —— /stu/ 与 /stu/index.html 的包装，注入 PASSIVE 常量 ——
@app.route('/stu/')
def _stu_root_redirect():
    return redirect('/stu/index.html', code=302)

@app.route('/stu/index.html')
def _stu_index_with_passive():
    resp = static('stu/index.html')
    try:
        body = resp.get_data(as_text=True)
        inj = '<script>window.PASSIVE={passive:true};</script>'
        if '</head>' in body:
            body = body.replace('</head>', inj + '</head>', 1)
        else:
            body = inj + body
        excluded = {'content-length', 'transfer-encoding'}
        headers = [(k, v) for (k, v) in resp.headers.items() if k.lower() not in excluded]
        return Response(body, status=resp.status_code, headers=headers, mimetype='text/html; charset=utf-8')
    except Exception:
        return resp

@app.route('/exam/api/student/course/entity/catalog/<int:id>')
def get_course(id):
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/course/entity/catalog/%s' % id,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json()
    for i in data["extra"]:
        i["courseName"] = re.sub(r'^.+班 - (副本-)*', '', i["courseName"])
    response = Response(json.dumps(data), resp.status_code, headers)
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

@app.route('/exam/api/student/<string:tp>/entity/<int:id>/content', methods=['GET'])
def forward_request(tp, id):
    url = f"{TARGET_URL}/exam/api/student/{tp}/entity/{id}/content"
    headers = {key: value for key, value in request.headers if key != 'Host'}
    response = requests.get(url, headers=headers)
    data = response.json()
    if 'extra' in data:
        for item in data['extra']:
            if (item["contentType"] == 1):
                item["content"]["downloadSwitch"] = 1
            for field in ['textContent', 'answer', 'questionAnalysis', 'questionStem', 'attachmentLinkAddress']:
                if field in item["content"]:
                    if (item["content"][field] is not None):
                        soup = BeautifulSoup(item["content"][field], 'html.parser')
                        for img in soup.find_all('img'):
                            img['src'] = TARGET_URL + img['src']
                            img.attrs.pop('data-href', None)
                        item["content"][field] = str(soup)
    return jsonify(data)

@app.route('/exam/api/student/paper/entity/catalog/<int:catalog_id>')
def get_exam(catalog_id):
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/catalog/%s' % catalog_id,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json()
    for i in data["extra"]:
        i["paperName"] = re.sub(r'^.+班 - (副本-)*', '', i["paperName"])
        if (1 or i["paperFinishTag"] == 1):
            i["openAnswer"] = 1
            i["openScore"] = 1
            i["paperIndex"] = 1
    response = Response(json.dumps(data), resp.status_code, headers)
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

@app.route('/exam/api/student/paper/entity/<int:catalog_id>')
def get_exam2(catalog_id):
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/%s' % catalog_id,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False)
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json()
    i = data["extra"]
    i["mappingStatus"] = 0 if i["mappingStatus"] == -1 else i["mappingStatus"]
    response = Response(json.dumps(data), resp.status_code, headers)
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

@app.route('/exam/api/student/paper/entity/<int:entity_id>/statistics')
async def get_statistics(entity_id):
    req_headers = {key: value for key, value in request.headers if key != 'Host'}
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/%s/statistics' % entity_id,
        headers=req_headers,
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)

    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json()
    if (data["code"] == 10001):
        data["code"] = 0
        data["message"] = "SUCCESS"
        data["extra"] = {
            "scoring": "",
            "scoringTotal": "",
            "scoringScoreMax": "114.514",
            "scoringScoreAvg": "1919.810",
            "paperBeginTime": None,
            "paperEndTime": None,
            "studentLibs": [],
            "studentPaperQuestions": [],
            "pointDTOList": [],
            "scoreRangeStudentCountsList": [None, None, None, None],
            "paperStudentScoreList": [],
            "paperCommentingTag": False
        }
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE
        async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=ssl_context)) as session:
            content, question = await asyncio.gather(
                get(session, f'{TARGET_URL}/exam/api/student/paper/entity/{entity_id}/content', headers=req_headers),
                get(session, f'{TARGET_URL}/exam/api/student/paper/entity/{entity_id}/question', headers=req_headers)
            )

        content = content["extra"]
        question = question["extra"]
        question = {i["questionId"]: i for i in question}
        score = 0
        err = 0
        for i in content:
            if (i["contentType"] == 2):
                try:
                    i["content"]["studentScore"] = question[i["content"]["id"]]["studentScore"]
                except KeyError:
                    err = 1
                try:
                    if (len(i["content"]["childList"]) > 1):
                        for j in range(len(i["content"]["childList"]))():
                            i["content"]["childList"][j]["studentSubmitTime"] = \
                                question[i["content"]["childList"][j]["id"]]["studentSubmitTime"]
                            score += question[i["content"]["childList"][j]["id"]]["studentScore"]
                    else:
                        i["content"]["studentSubmitTime"] = question[i["content"]["id"]]["studentSubmitTime"]
                        score += question[i["content"]["id"]]["studentScore"]
                except:
                    pass
                data["extra"]["studentPaperQuestions"].append(i["content"])
        if (err == 1):
            score = 0
            for i in question:
                if (question[i]["studentScore"]) is not None:
                    score += question[i]["studentScore"]
            score = str(score) + "瞎算的"
        data["extra"]["scoring"] = str(score) + "(未公布)"

    response = Response(json.dumps(data), resp.status_code, headers)
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

@app.route('/stu/project.config.js')
def get_config():
    text = """(function (window) {
      window.$config = {
        BASE_API: "http://%s",
        photoType: 2,
      };
    })(window);
    """ % request.headers.get("Host")
    response = Response(text, 200, {'Content-Type': 'application/javascript'})
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def proxy(path):
    if (re.match("exam/(login/)?api/", path)):
        if (re.match('exam/api/student/course/entity/[0-9]+/question/', path) and random.randint(1, 2) == 2):
            return Response("", 502)
        return api(path)
    else:
        data = static(path)
        return data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=29719, debug=False)
