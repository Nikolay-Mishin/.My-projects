
function test() {
  var a = document.getElementById('a').value;

  var res = 0;
  for (var i = 0; i < a.length; i += 1) {
    if (a[i] == 'b') {
      res += 1;
    }
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
