
function test() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);
  var c = Number(document.getElementById('c').value);

  var ch = 2 * Math.pow(a, b - 4) - Math.pow(7 * a - c, b * b);
  var zn = Math.pow(5 * c  + Math.sqrt(a + b), 1/4) + c / b;
  var x = ch / zn;

  console.log(x);
  document.getElementById('output').innerHTML = x;
}



