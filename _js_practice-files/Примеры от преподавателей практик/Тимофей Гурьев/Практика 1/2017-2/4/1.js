"use strict";
function calc() {
	let a = Number(document.getElementById("a").value);
	let b = Number(document.getElementById("b").value);
	let c = Number(document.getElementById("c").value);
	let ch1 = 2 * Math.pow(a, (b - 4));
	let ch2 = Math.pow(7 * a - c, b * b);
	let zn1 = Math.sqrt(a + b);
	let zn2 = Math.pow(5 * c + zn1, 1 / 4);
	let zn = zn2 + (c / b);
	document.getElementById("output").innerHTML =
		String((ch1 - ch2) / zn);
}
