var a1 = "A car,a man, a maraca";
var a2 = "Lev1s";
var a3 = "Level";

function P(a) {
    return RegExp(a.match(/\w/g).reverse().join('\\W*'), 'i').test(a);

}

console.log(P(a1));
console.log(P(a2));
console.log(P(a3));

