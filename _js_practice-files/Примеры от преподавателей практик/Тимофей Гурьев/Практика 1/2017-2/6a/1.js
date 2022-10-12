"use strict";
function calc() {
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	let res = "";
	if (a % b === 0) {
		res = "Делится";
	} else {
		res = "Не делится";
	}
	document.getElementById("output").innerHTML = res;
}

function calc2() {
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	document.getElementById("output").innerHTML =
		(a % b === 0) ? "Делится" : "Не делится";
}