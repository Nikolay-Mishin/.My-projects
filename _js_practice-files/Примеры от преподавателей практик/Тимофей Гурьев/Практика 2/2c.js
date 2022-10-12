"use strict"

var ar = [
	[12,6,7],
	[1,4],
	[33,123,0,-6],
	[12,11,0],
	[1,2,3],
	[6],
	[112,333,1000,1231]
];

ar.sort(ArCompare);
ar.forEach(function(item){
	document.getElementById("out").innerHTML += 
		item.join(", ") + "<br>";
});
	
function ArCompare(a,b) {
	var sumA = 0;
	for (var i=0; i<a.length; i++) {
		sumA += a[i];
	}
	var sumB = 0;
	for (var i=0; i<b.length; i++) {
		sumB += b[i];
	}	
	return sumA - sumB;
}
