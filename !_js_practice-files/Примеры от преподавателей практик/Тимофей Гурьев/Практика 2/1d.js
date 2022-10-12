/*document.querySelector("#go").
addEventListener(	"click",	
function(){
	document.getElementById("out").innerHTML = "";
	var b = document.getElementById("in").value;
	b = parseInt(b);
	for (var i = 2; i < b; i++) {
		if (b % i == 0) {
			document.getElementById("out").innerHTML
				+= i + ", ";
		}
	}	
});*/

document.querySelector("#go").
addEventListener(	"click",	
function(){
	document.getElementById("out").innerHTML = "";
	var b = document.getElementById("in").value;
	b = parseInt(b);
	var arr = [];
	for (var i = 2; i < b; i++) {
		if (b % i == 0) {
			arr.push(i);
		}
	}	
	document.getElementById("out").innerHTML
				= arr.join(", ");
});
