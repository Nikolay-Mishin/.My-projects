
function test() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);

  var c = Math.pow(Math.abs(a - b), 3);
  var d = (a / b) < 0;
  var e = Math.sin(a) - Math.tan(b);

  console.log(c + '\n' + d + '\n' + e);
  document.getElementById('output').innerHTML = c + '<br>' + d + '<br>' + e;
}
