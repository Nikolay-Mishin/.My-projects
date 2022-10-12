"use strict";
function calc() {
    let a = Number(document.getElementById("a").value);
    let res = "";
    if (a >= 0 && a <= 300) {
        res = "small";
    } else if (a >= 301 && a <= 1280) {
        res = "middle";
    } else if (a > 1280) {
        res = "big";
    } else {
        res = "";
    }
    document.getElementById("output").innerHTML = res;
}


