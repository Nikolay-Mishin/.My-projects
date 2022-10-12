"use strict";
function id(a) {
	return document.getElementById(a);
}
function getVal(a) {
	return document.getElementById(a).value;
}
function calc() {
	let a = Number(id("a").value);
	let b = Number(getVal("b"));
	let res = Math.pow(Math.abs(a - b), 3);
	document.getElementById("output").innerHTML = String(res);
}

function calc_b() {
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	let res = (a / b) < 0;
	document.getElementById("output").innerHTML = String(res);
}

function calc_c() {
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	let res = Math.sin(a) - Math.tan(b);
	document.getElementById("output").innerHTML = String(res);
}