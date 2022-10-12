
function test() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var c = parseInt(document.getElementById('c').value);

  var D = b * b - 4 * a * c;
  console.log(D);

  var res = '';

  // if (a == 0) .. ?

  if (D < 0) {
    res = 'решений нет';
  }
  else if (D == 0) {
    res = -b / (2 * a);
  }
  else {
    var res1 = -b + Math.sqrt(D) / (2 * a);
    var res2 = -b - Math.sqrt(D) / (2 * a);
    res = res1 + '<br>' + res2;
  }

  document.getElementById('output').innerHTML = res;
}
