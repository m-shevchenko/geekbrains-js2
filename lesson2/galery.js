var data;
var big;
window.onload = function () {
    big = document.getElementById("big");
    var xhr;
    if (window.XMLHttpRequest) {
        // если используется Gecko (Chrome, Mozilla, Opera, Safari)
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {// Internet Explorer
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.overrideMimeType('application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                var icons = document.getElementById("icons");
                big.src = data[0].img_big;
                data.forEach(function (item) {
                    var span = document.createElement("span");
                    var icon = document.createElement("img");
                    icon.src = item.img_icon;
                    icon.alt = item.alt;
                    icon.style = "margin:1px;";
                    icons.appendChild(span);
                    span.appendChild(icon);
                    span.onclick = function () {
                        big.src = item.img_big;
                    };
                });
            } else {
                alert("Error: HTTP status = " + xhr.status);
            }
        }
    };
    xhr.open('GET', 'galery.json', true);
    xhr.timeout = 15000;
    xhr.ontimeout = function () {
        alert('Слишком долгий запрос, выполнение остановлено!');
    };
    xhr.send(null);
};



