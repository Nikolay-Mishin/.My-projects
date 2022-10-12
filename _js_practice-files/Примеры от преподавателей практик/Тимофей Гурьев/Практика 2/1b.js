/*document.getElementById("go").
	addEventListener(
		"click",
		function() {
			var b = document.getElementById("in").value;
			document.getElementById("out").innerHTML += b + "<br>";
			
			var counter = 0;
			for (var i = 0; i < b.length; i++) {
				if (b[i] == "b") {
					counter++;
				}
			}
			
			document.getElementById("out").innerHTML 
				+= counter + "<br>";
		}
	);
*/	
document.getElementById("go").
	addEventListener(
		"click",
		countB
	);	
	
function countB() {
	var str = document.getElementById("in").value;
	
	var counter = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == "b") {
			counter++;
		}
	}
	
	document.getElementById("out").innerHTML 
		= counter + "<br>";
}	



