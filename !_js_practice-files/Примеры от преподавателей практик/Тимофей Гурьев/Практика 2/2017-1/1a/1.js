"use strict";
/*** 1 ***/
for (var i = 0; i < 10; i++) {
	document.getElementById("output").innerHTML += i + "<br>";
}
/*** 2 ***/
for (i = 0; i <= 9; i++) {
	document.getElementById("output").innerHTML += i + "<br>";
}
/*** 3 ***/
var arr = [];
for (i = 0; i < 10; i++) {
	arr.push(i);
}
document.getElementById("output").innerHTML += arr.join("<br>");
/*** 4 ***/
i = 0;
while (i < 10) {
	document.getElementById("output").innerHTML += i + "<br>";
	i++;
}