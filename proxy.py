import json
import re
import string
import random;
from bs4 import BeautifulSoup
import requests
import time;
import os;
import mimetypes
import pdfkit
import aiohttp;
import asyncio;
import ssl;
from urllib import parse;
from flask import Flask, request, Response, redirect,send_from_directory,make_response,jsonify

TARGET_URL = 'https://bdfz.xnykcxt.com:5002'
app = Flask(__name__)

async def get(session,url,headers = None):
    async with session.get(url,headers=headers) as response:
        return await response.json();
def getName():
    # 获取当前时间的13位时间戳
    timestamp = int(time.time() * 1000)

    # 生成一个10个随机字母的字符串
    random_letters = ''.join(random.choices(string.ascii_letters, k=10))

    # 拼接时间戳和随机字母
    result = f"{timestamp}{random_letters}"
    return result

def convert_html_to_pdf(html_content, output_pdf_path):
    # 使用 BeautifulSoup 解析 HTML
    html_content = """<style>
    img {
        max-width: 100%;
        height: auto; 
    }
    * {
            font-family: 'Noto Sans CJK', 'WenQuanYi Zen Hei', sans-serif;
        }
</style>
"""+html_content;
    soup = BeautifulSoup('<meta charset="UTF-8">\n'+html_content, 'html.parser')
    # 处理 <img> 标签
    for img in soup.find_all('img'):
        if img.has_attr('src') and not img['src'].startswith("http"):
            img['src'] = TARGET_URL + img['src']


    # 将处理后的 HTML 保存到临时文件
    with open('temp.html', 'w', encoding='utf-8') as file:
        file.write(str(soup))

    options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'custom-header': [
            ('Accept-Encoding', 'gzip')
        ]
    }
    # 使用 pdfkit 将处理后的 HTML 转换为 PDF
    pdfkit.from_file('temp.html', output_pdf_path,options=options)

    # 删除临时文件
    os.remove('temp.html')


def extract_catalog_names(data, result_list):
    for i in data:
        # 将当前字典的 catalogNamePath 添加到结果列表中
        result_list.append({"id":i["id"],"name":ids[i["creator"]]+"/"+i['catalogNamePath']})

        # 检查 childList 是否存在并且不为空
        if 'childList' in i and i['childList']:
            # 如果 childList 不为空，递归处理每个元素
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

    # 创建一个响应对象，复制原始响应的内容和状态码
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers and name!="Set-Cookie"]
    response = Response(resp.content, resp.status_code, headers)
    # 处理cookies
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)
    return response

def static(file_path):
    normalized_path = os.path.normpath(file_path)

    if normalized_path.startswith('..') or '..' in normalized_path.split(os.path.sep):
        return Response("Not Found",mimetype='text/html'+"; charset=utf-8",status=404)

    if file_path.endswith('/'):
        local_file_path = os.path.join(normalized_path.lstrip('/\\'), 'index.html')
    elif len(file_path.split("."))==1:
        local_file_path = os.path.join(normalized_path.lstrip('/\\'), 'index.html')
    else:
        local_file_path = os.path.join(normalized_path.lstrip('/\\'))
    local_file_path = re.sub('\\\\',"/",local_file_path)
    mime_type, _ = mimetypes.guess_type(file_path)
    if mime_type is None:
        mime_type = 'text/html' + "; charset=utf-8"
    if os.path.exists(os.path.join("static",local_file_path)):
        return make_response(
            send_from_directory("static", local_file_path, as_attachment=False))
    else:
        # 构建远程 URL
        remote_url = f"{TARGET_URL}/{file_path.replace(os.path.sep, '/')}"

        # 发起请求获取文件内容
        response = requests.get(remote_url,verify=False,
                                headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False)

        if response.status_code//100 < 4:
            # 获取文件内容
            content = response.content
            if(len(content)<5*2^20):
                # 创建必要的目录
                os.makedirs(os.path.dirname(local_file_path), exist_ok=True)

                # 写入文件
                with open(local_file_path, 'wb') as file:
                    file.write(content)

            return Response(content,mimetype=mime_type,status=200)
        else:

            return Response(response.content,mimetype=mime_type,status=response.status_code)


@app.route("/exam/login/api/logout")
def logout():
    response = redirect('/stu/#/login');
    # 设置 'token' cookie的值为空，并设定过期时间为过去的时间来删除它
    response.set_cookie('token', '', expires=0)
    return response


@app.route('/getWebFile')
def getWebFile():
    url = TARGET_URL+request.args.get('url');
    name=request.args.get("courseName");
    cookies = request.cookies;
    res = requests.get(url, cookies=cookies,verify=False);
    text = res.json();
    data = []
    for i in text["extra"]:
        if i["contentType"] == 1:
            continue
        data.append({"type": i["contentType"], "value": i["content"]["textContent"]
        if i["contentType"] == 0 else i["content"]["questionStem"]});

    html_content = "\n<br><br><br><br><br><br>\n".join([i["value"] for i in data]);
    fileName=getName();
    output_pdf_path = 'pdfs/%s.pdf'%fileName;
    convert_html_to_pdf(html_content, output_pdf_path)
    with open(output_pdf_path,"rb") as f:
        data=f.read();

    headers = [("content-disposition", "attachment;filename*=utf-8'zh_cn'%s.pdf" % name),
                   ("content-type", "application/force-download")]
    return Response(data,200,headers=headers,mimetype="application/pdf");

@app.route("/downloadFile",methods=["GET"])
def downloadFile():
    url = parse.unquote(request.args.get('url'));
    name = request.args.get('name');
    file=requests.get(url,verify=False).content;
    headers=[("content-disposition","attachment;filename*=utf-8'zh_cn'%s.%s"%(name,url.split(".")[-1])),("content-type","application/force-download")]
    return Response(file,200,headers);

@app.route("/downloadAnswers",methods=["GET"])
def downloadAnswers():
    html=parse.unquote(request.args.get("html"));
    name=request.args.get("name");
    fileName = getName();
    output_pdf_path = 'pdfs/%s.pdf' % fileName;
    convert_html_to_pdf(html, output_pdf_path)
    with open(output_pdf_path, "rb") as f:
        data = f.read();
    headers = [("content-disposition", "attachment;filename*=utf-8'zh_cn'%s.pdf" % name),
               ("content-type", "application/force-download")]
    return Response(data, 200, headers=headers, mimetype="application/pdf");

@app.route("/getAllCourses")
async def getAllCourses():
    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE
    req_headers = {key: value for key, value in request.headers if key != 'Host'}
    res = requests.get(TARGET_URL+"/exam/api/student/teacher/entity",headers=req_headers);
    info = res.json()["extra"];
    global ids;
    ids = {i["id"]:i["subjectName"] for i in info};
    connector = aiohttp.TCPConnector(ssl=False)
    async with aiohttp.ClientSession(connector = connector) as session:
        tasks = []
        for id in ids:
            task = asyncio.create_task(get(session,TARGET_URL+"/exam/api/student/catalog/entity/%d"%id, req_headers));
            tasks.append(task)
        datas = await asyncio.gather(*tasks)
    courses = []
    for data in datas:
        extract_catalog_names(data["extra"],courses)
    headers = {"content-type":"application/json"}
    return Response(json.dumps(courses), 200,headers = headers);


@app.route('/')
def redirect_to_login():
    # 使用 redirect 函数直接指定重定向的URL
    return redirect('/stu/#/course?pageid=0', code=302)

# @app.route('/exam/api/student/course/entity/<int:entity_id>/content')
# def get_content(entity_id):
#     # 这里可以根据 entity_id 来处理具体的逻辑
#     resp = requests.request(
#         method=request.method,
#         url=f'{TARGET_URL}/exam/api/student/course/entity/%s/content'%entity_id,
#         headers={key: value for key, value in request.headers if key != 'Host'},
#         data=request.get_data(),
#         cookies=request.cookies,
#         verify=False,
#         allow_redirects=False)
#
#     # 创建一个响应对象，复制原始响应的内容和状态码
#     excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
#     headers = [(name, value) for (name, value) in resp.raw.headers.items()
#                if name.lower() not in excluded_headers]
#     data=resp.json();
#     for i in range(len(data["extra"])):
#         if(data["extra"][i]["contentType"]==1):
#             data["extra"][i]["content"]["downloadSwitch"]=1;
#     response = Response(json.dumps(data), resp.status_code, headers)
#
#     # 处理cookies
#     for key, value in resp.cookies.get_dict().items():
#         response.set_cookie(key, value)
#
#     return response

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
    # 创建一个响应对象，复制原始响应的内容和状态码
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json();
    for i in data["extra"]:
        i["courseName"] = re.sub(r'^.+班 - (副本-)*', '', i["courseName"]);

    response = Response(json.dumps(data), resp.status_code, headers)

    # 处理cookies
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)

    return response

@app.route('/exam/api/student/<string:tp>/entity/<int:id>/content', methods=['GET'])
def forward_request(tp,id):
    url = f"https://bdfz.xnykcxt.com:5002/exam/api/student/{tp}/entity/{id}/content"
    headers = {key: value for key, value in request.headers if key != 'Host'}

    response = requests.get(url, headers=headers)
    data = response.json()

    if 'extra' in data:
        for item in data['extra']:
            # item["content"]["selfReadOverSwitch"] = 1;
            if (item["contentType"] == 1):
                item["content"]["downloadSwitch"] = 1;
            for field in ['textContent', 'answer', 'questionAnalysis', 'questionStem', 'attachmentLinkAddress']:
                if field in item["content"]:
                    # if(field == "attachmentLinkAddress"):
                    #     item["content"]["attachmentLinkAddress"] = "https://bdfz.xnykcxt.com:5002/exam" +item["content"]["attachmentLinkAddress"]
                    if(item["content"][field] != None):
                        soup = BeautifulSoup(item["content"][field], 'html.parser')
                        for img in soup.find_all('img'):
                            img['src'] = "https://bdfz.xnykcxt.com:5002" + img['src']
                            img.attrs.pop('data-href', None)
                        item["content"][field] = str(soup)

    return jsonify(data)

@app.route('/exam/api/student/paper/entity/catalog/<int:catalog_id>')
def get_exam(catalog_id):
    print(catalog_id)
    # 这里可以根据 entity_id 来处理具体的逻辑
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/catalog/%s'%catalog_id,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)
    # 创建一个响应对象，复制原始响应的内容和状态码
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data=resp.json();
    for i in data["extra"]:
        i["paperName"] = re.sub(r'^.+班 - (副本-)*', '', i["paperName"]);
        if(1 or i["paperFinishTag"] == 1):
            i["openAnswer"] = 1;
            i["openScore"] = 1;
            i["paperIndex"] = 1
            #i["paperRecycleTime"]= "2025-10-19 18:30:00"
            # i["jobStatus"] = 1;
    response = Response(json.dumps(data), resp.status_code, headers)

    # 处理cookies
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)

    return response

@app.route('/exam/api/student/paper/entity/<int:catalog_id>')
def get_exam2(catalog_id):
    # 这里可以根据 entity_id 来处理具体的逻辑
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/%s'%catalog_id,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False)
    # 创建一个响应对象，复制原始响应的内容和状态码
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data = resp.json();
    i = data["extra"]
    i["mappingStatus"] = 0 if i["mappingStatus"] == -1 else i["mappingStatus"];
    # i["jobStatus"] = 1;
    # i["paperFinishTag"] = 0;
    # i["statisticsStatus"] = 0
    # i["showPaperTag"] = 1;
    #i["paperRecycleTime"] = "2025-10-31 12:50:00"
    # i["paperSettingResubmitTime"] = "2025-10-31 12:50:00";
    # i["paperResubmitTime"] = "2025-10-31 12:50:00";
    #i["paperRecycleTime"] = "2025-10-31 12:50:00"
    # i["paperTime"] = -1;
    response = Response(json.dumps(data), resp.status_code, headers)

    # 处理cookies
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)

    return response
@app.route('/exam/api/student/paper/entity/<int:entity_id>/statistics')
async def get_statistics(entity_id):
    req_headers = {key: value for key, value in request.headers if key != 'Host'};
    # 这里可以根据 entity_id 来处理具体的逻辑
    resp = requests.request(
        method=request.method,
        url=f'{TARGET_URL}/exam/api/student/paper/entity/%s/statistics'%entity_id,
        headers=req_headers,
        data=request.get_data(),
        cookies=request.cookies,
        verify=False,
        allow_redirects=False)

    # 创建一个响应对象，复制原始响应的内容和状态码
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    data=resp.json();
    if(data["code"]==10001):
        data["code"] = 0;
        data["message"] = "SUCCESS";
        data["extra"] = {
            "scoring": "",
            "scoringTotal": "",
            "scoringScoreMax": "114.514",
            "scoringScoreAvg": "1919.810",
            "paperBeginTime": None,
            "paperEndTime": None,
            "studentLibs": [],
            "studentPaperQuestions": [
            ],
            "pointDTOList": [],
            "scoreRangeStudentCountsList": [None,None,None,None],
            "paperStudentScoreList": [],
            "paperCommentingTag": False
        }
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE
        async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=ssl_context)) as session:
            content,question = await asyncio.gather(
                get(session,f'{TARGET_URL}/exam/api/student/paper/entity/{entity_id}/content',
                                   headers = req_headers),
                get(session,f'{TARGET_URL}/exam/api/student/paper/entity/{entity_id}/question',
                                headers = req_headers)
            )

        content = content["extra"];
        question = question["extra"];
        question = {i["questionId"]:i for i in question};
        score = 0;
        err=0;
        for i in content:
            if(i["contentType"] == 2):
                try:
                    i["content"]["studentScore"] = question[i["content"]["id"]]["studentScore"]
                except KeyError:
                    err=1;
                try:
                    if (len(i["content"]["childList"]) > 1):
                        for j in range(len(i["content"]["childList"])):
                            # i["content"]["childList"][j]["questionScore"] = 0
                            i["content"]["childList"][j]["studentSubmitTime"] = \
                            question[i["content"]["childList"][j]["id"]]["studentSubmitTime"]
                            score += question[i["content"]["childList"][j]["id"]]["studentScore"]
                    else:
                        i["content"]["studentSubmitTime"] = question[i["content"]["id"]]["studentSubmitTime"]
                        score += question[i["content"]["id"]]["studentScore"]
                except:
                    pass
                data["extra"]["studentPaperQuestions"].append(i["content"]);
        if(err==1):
            score = 0;
            for i in question:
                if (question[i]["studentScore"]) != None:
                    score += question[i]["studentScore"]
            score = str(score) + "瞎算的"
        data["extra"]["scoring"] = str(score) + "(未公布)";


    response = Response(json.dumps(data), resp.status_code, headers)

    # 处理cookies
    for key, value in resp.cookies.get_dict().items():
        response.set_cookie(key, value)

    return response


@app.route('/stu/project.config.js')
def get_config():
    text = """(function (window) {
      window.$config = {
        BASE_API: "http://%s",
        photoType: 2, //  0 只能拍照，1 只能选择相册，2 两者可以
        // BASE_API: "https://bdfz.xnykcxt.com:5002",
      };
    })(window);
    """ % request.headers.get("Host");
    response = Response(text, 200, {'Content-Type': 'application/javascript'});
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def proxy(path):
    # 获取原始请求中的数据和headers
    if(re.match("exam/(login/)?api/",path)):
        if(re.match('exam/api/student/course/entity/[0-9]+/question/',path) and random.randint(1,2)==2):
            return Response("", 502)
        return api(path);
    else:
        data=static(path)
        return data;



if __name__ == '__main__':
    app.run(host='0.0.0.0',port=29719, debug=False)
