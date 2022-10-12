"use strict"
document.querySelector("#go").
	addEventListener(
		"click",
		function() {
			document.getElementById("out").innerHTML = "";
			
			var a = document.getElementById("a").value;
			a = a.split(",");

			var minIndex = 0;
			var maxIndex = 0;
			for (var i = 0; i < a.length; i++) {
				if (parseInt(a[i]) < parseInt(a[minIndex])) {
					minIndex = i
				}
				if (parseInt(a[i]) > parseInt(a[maxIndex])) {
					maxIndex = i
				}
			}
			 
			document.getElementById("out").innerHTML +=
				"Индекс минимума " + minIndex + "<br>";
			document.getElementById("out").innerHTML +=
				"Минимум " + a[minIndex] + "<br>";
			document.getElementById("out").innerHTML +=
				"Индекс максимума " + maxIndex + "<br>";
			document.getElementById("out").innerHTML +=
				"Максимум " + a[maxIndex] + "<br>";				
		}
	);
	

