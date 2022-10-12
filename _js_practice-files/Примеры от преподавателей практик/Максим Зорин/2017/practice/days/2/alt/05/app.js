

function test1() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);
  var x = Math.pow(Math.abs(a - b), 3);
  document.getElementById('c').value = x;
}

function test3() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);
  var x = Math.sin(a) - Math.tan(b);
  document.getElementById('c').value = x;
}
