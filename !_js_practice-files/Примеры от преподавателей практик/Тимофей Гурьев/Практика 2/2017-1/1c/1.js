"use strict";
document.getElementById("go").addEventListener("click", click);
function click(){
	var x = document.getElementById("in").value;
	document.getElementById("output").innerHTML = isSimple(x);
}
function isSimple(x) {
	var end = Math.sqrt(x);
	var res = "Простое";
	for (var i = 2; i <= end; i++) {
		if ((x % i) == 0) {
			res = "Не простое";
			break;
		}
	}
	return res;
}