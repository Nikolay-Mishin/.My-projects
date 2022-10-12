"use strict";
document.getElementById("go").addEventListener("click", click);

function click() {
  if (isSimple(+document.getElementById("in").value)) {
    var res = "Простое";
  } else {
    var res = "Не простое";
  }
  document.getElementById("output").innerHTML = res;
}

function isSimple(x) {
  var end = Math.sqrt(x);
  var result = true;
  for (var i = 2; i <= end; i++) {
    if (x % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
