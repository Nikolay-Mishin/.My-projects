"use strict";
document.getElementById("go").addEventListener("click", countB);

function countB() {
	var str = document.getElementById("in").value;
	var counter = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == "b") {
			counter++;
		}
	}
	document.getElementById("output").innerHTML = String(counter);
}

