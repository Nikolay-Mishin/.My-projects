
function test() {
  var a = Number(document.getElementById('a').value);

  var res = 'простое';
  for (var i = 2; i < a; i += 1) {
    if (a % i == 0) {
      res = 'не простое';
      break;
    }
  }

  document.getElementById('output').innerHTML = res;
}
