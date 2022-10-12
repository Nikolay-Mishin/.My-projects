
var a = 1;
var b = 2;
var c = 3;

var d1 = 2 * Math.pow(a, b - 4);
var d2 = Math.pow(7*a - c, b*b);
var e1 = Math.pow(5*c + Math.sqrt(a + b), 1/4);
var e2 = c / b;
var dd = d1 - d2;
var ee = e1 + e2;
var x = dd / ee;

console.log(x);
