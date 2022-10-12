"use strict";
document.getElementById("go").addEventListener("click", click);
function click(){
	var ar = document.getElementById("in").value.split(",");
	var tmp = 0;
	for (var i=0; i<ar.length; i++) {
		for (var j=0; j<ar.length-1; j++) {
			if (Number(ar[j]) < Number(ar[j+1])) {
				tmp = ar[j];
				ar[j] = ar[j+1];
				ar[j+1] = tmp;
			}
		}
	}
	console.log(ar);
}
