document.querySelector("#go").
	addEventListener(
		"click",
		function() {
			var a = document.getElementById("a").value;
			var b = document.getElementById("b").value;
			document.getElementById("out").innerHTML 
				+= nok(a,b) + "<br>";
		}
	);
	
function nok(a,b) {
	var m = 1;
	while ( (a * m) % b != 0 ) {
		m++;
	}
	return a*m;
}	
