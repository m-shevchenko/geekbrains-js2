function ValidForm() {

    var name = document.getElementById('name');
    var divname = document.getElementById('divname');

    var tel = document.getElementById('tel');
    var divtel = document.getElementById('divtel');

    var email = document.getElementById('email');
    var divemail = document.getElementById('divemail');

    if (/[A-Za-z]+( [A-Za-z]+)+/.test(name.value)) {
        divname.classList.remove("invalid");
    } else {
        divname.classList.add("invalid");
    }

    if (/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}/.test(tel.value)) {
        divtel.classList.remove("invalid");
    } else {
        divtel.classList.add("invalid");
    }

    if (/[.А-Яа-яA-Za-z0-9_-]+@[.А-Яа-яA-Za-z0-9_-]+\.[.а-яА-Яa-zA-Z]{2,6}/.test(email.value)) {
        divemail.classList.remove("invalid");
    } else {
        divemail.classList.add("invalid");
    }
}

function Dialog(a) {
    return a.replace(/\B\'|\'\B/gm, "\"");
}

var a = "'Hi. Haven't seen you long'";

alert("Text original:\n" + a + "\nReplaced:\n" + Dialog(a));
