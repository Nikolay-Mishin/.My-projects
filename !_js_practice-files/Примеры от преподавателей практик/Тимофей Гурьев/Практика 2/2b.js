"use strict"
document.querySelector("#go").
	addEventListener(
		"click",
		function() {
			document.getElementById("out").innerHTML = "";
			
			var a = document.getElementById("a").value;
			a = a.split(",");
			
			a.sort(NumberCompare);
			
			document.getElementById("out").innerHTML +=
				a.join(",") + "<br>";

		}
	);
	
function NumberCompare(x,y) {
	//return x-y;
	if (x > y) {
		return 1;
	} else if (x < y) {
		return -1;
	} else {
		return 0;
	}
}
