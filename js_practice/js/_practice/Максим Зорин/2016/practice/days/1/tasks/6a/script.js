
function test() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);

  var res = '';
  if (a % b == 0) {
    res = "делится";
  }
  else {
    res = "не делится";
  }

  console.log(res);
  document.getElementById('output').innerHTML = res;
}
