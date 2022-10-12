
function test() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);

  var res = a + b;

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
