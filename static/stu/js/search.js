let element = document.querySelector('.submitSearch')
let allCourses = [];  // 全局变量用来存储课程数据
var popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // 弹窗内容容器
    var popupContent = document.createElement('div');
    popupContent.style.backgroundColor = 'white';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '5px';
    popupContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popupContent.style.position = 'relative';
    popupContent.style.maxWidth = '90%';
    popupContent.style.maxHeight = '90%'
    popupContent.style.overflowY = 'auto';
    popupContent.style.textAlign = 'center';

    // 关闭按钮
    var closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '25px';
    closeButton.style.cursor = 'pointer';

    // 文本内容
    var textElement = document.createElement('p');

    // 组装弹窗内容
    popupContent.appendChild(closeButton);
    popupContent.appendChild(textElement);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
fetch('/getAllCourses')
    .then(response => {
        return response.json()
    })
    .then(data => {
        allCourses = data;
    })
    .catch(error => {
        console.error('Failed to fetch courses:', error);
    });
if (!element.dataset.listenerAdded) {
    element.addEventListener('click', function () {
        let search = document.querySelector('.search')
        const searchWords = search.value.split(' ');
        const filteredCourses = allCourses.filter(course => {
        return searchWords.every(word =>
            course.name.includes(word)
        );
    });
        let html = "";
        for(let j in filteredCourses){
            let i = filteredCourses[j];
            html += '<div id="'+i.id+'" onclick="const url = window.location.href; // 获取当前 URL\n' +
                '        const baseUrl = url.split(\'/\')[0];' +
                '        const newUrl = baseUrl + \'/stu/#/course?pageid=0&catalogId=\' + this.id;' +
                '        popup.style.display = \'none\';window.history.pushState({}, \'\', newUrl);location.reload();">'+i.name+'</div>'
        }
        popup.style.display = 'flex';
        textElement.innerHTML = "搜索到"+filteredCourses.length+"条内容：<br>"+html;
    });
}
