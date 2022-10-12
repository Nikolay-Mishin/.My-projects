document.querySelector("#go").
	addEventListener(
		"click",
		function() {
			document.getElementById("out").innerHTML = "";
			var a = document.getElementById("a").value;
			a = parseInt(a);
			if (!isNaN(a)) {
			
				var i = 0, j = 2;
				while (i < a) {
					if (isSimple(j)) {
						i++;
						document.getElementById("out").innerHTML 
							+= j + "<br>";
					}
					j++;
				}
				
			} else {
				document.getElementById("out").innerHTML 
							+= "Ввведите число";
			}
		}
	);
	
function isSimple(x) {
	var end = Math.sqrt(x);
	for (var i = 2; i <= end; i++) {
		if ((x % i) == 0) {
			return false;
		}
	}
	return true;
}	
