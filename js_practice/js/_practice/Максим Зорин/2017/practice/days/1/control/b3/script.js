
function test() {
  var a = Number(document.getElementById('a').value);

  var res = 5/9 * (a - 32);

  document.getElementById('output').innerHTML = res.toFixed(5);
  console.log(res);
}
