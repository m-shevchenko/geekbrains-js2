var a1 = "A car,a man, a maraca";
var a2 = "Lev1s";
var a3 = "Level";
var i = 0;

function isPolindrom(a) {
    a = a.toLowerCase().replace(/\W/g, "");
    return a === a.split("").reverse().join("");
}

console.log(isPolindrom(a1));
console.log(isPolindrom(a2));
console.log(isPolindrom(a3));


function polindrom(a) {
    return a.toLowerCase().search(a.replace(/(.)/, function () {
        return a[a.length - i - 1];
    }
    )) === 0;
}
console.log(polindrom(a1));
console.log(polindrom(a2));
console.log(polindrom(a3));

function Is_polindrom(a) {
    a = a.toLowerCase();
    return a.match(/\w{1}/g).join('') === a.match(/\w{1}/g).reverse().join('');
}

console.log(Is_polindrom(a1));
console.log(Is_polindrom(a2));
console.log(Is_polindrom(a3));

