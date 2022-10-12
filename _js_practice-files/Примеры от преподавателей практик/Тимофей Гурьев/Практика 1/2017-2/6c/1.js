"use strict";
function calc() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let d = b * b - 4 * a * c;
    let res = "";
    if (d > 0) {
        res = String((-b + Math.sqrt(d)) / (2 * a));
        res += "<br>"; // res = res + "<br>"
        res += String((-b - Math.sqrt(d)) / (2 * a));
    } else if (d === 0) {
        res = -b / (2 * a);
    } else {
        res = "Корней нет";
    }
    document.getElementById("output").innerHTML = res;
}


