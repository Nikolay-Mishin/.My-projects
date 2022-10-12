
function test() {
  var a = Number(document.getElementById('a').value);

  var res = '';
  for (var i = 1; i <= a; i += 1) {
    if (a % i == 0) {
      res += i + '<br>';
    }
  }

  document.getElementById('output').innerHTML = res;
}
