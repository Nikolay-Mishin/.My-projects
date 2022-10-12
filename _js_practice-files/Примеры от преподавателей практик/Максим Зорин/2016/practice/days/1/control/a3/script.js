
function test() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);

  var res = '';
  if (a < b) {
    res = '-1';
  }
  else if (b < a) {
    res = '1';
  }
  else {
    res = '0';
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
