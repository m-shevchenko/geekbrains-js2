var city;

var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.overrideMimeType('application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            city = JSON.parse(xhr.responseText);
            console.log(city);
        } else {
            alert("Error: HTTP status = " + xhr.status);
        }
    }
};
xhr.open('GET', 'city.json', true);
xhr.timeout = 15000;
xhr.ontimeout = function () {
    alert('Слишком долгий запрос, выполнение остановлено!');
};
xhr.send(null);