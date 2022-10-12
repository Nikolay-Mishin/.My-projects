"use strict";
/*for (var i = 0; i<=9; i++) {
  document.getElementById("output").innerHTML += i + ", ";
}*/

/*for (var i = 0; i<9; i++) {
  document.getElementById("output").innerHTML += i + ", ";
}
document.getElementById("output").innerHTML += i;
*/

/*for (var i = 0; i<=9; i++) {
  document.getElementById("output").innerHTML += i + ((i != 9) ? ", " : "") ;
}*/

var arr = [];
for (var i = 0; i<=9; i++) {
  arr.push(i);
}
document.getElementById("output").innerHTML = arr.join(", ");









/*
var i = 0;
while ( i < 10 ) {
  document.getElementById("output").innerHTML += String(i) + "<br>";
  i++;
}

i = 0;
do {
  document.getElementById("output").innerHTML += String(i) + "<br>";
  i++;
} while (i < 10);
*/
