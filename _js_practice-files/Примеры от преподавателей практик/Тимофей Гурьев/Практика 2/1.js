/* 1 */
for (var i = 0; i < 10; i++) {
	document.getElementById("out").innerHTML 
		+= i.toString() + "<br>";
}

/* 2 */
var i = 0;
while (i < 10) {
	document.getElementById("out").innerHTML 
		+= i + "<br>";
	i++;
}

/* 3 */
i = 0;
do {
	document.getElementById("out").innerHTML 
		+= i + "<br>";
	i++;
} while (i < 10);
