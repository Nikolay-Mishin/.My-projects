
function test() {
  var N = Number(document.getElementById('a').value);

  if (N % 2 == 0) {
    N = N + 1;
  }

  var res = '';
  for (var i = 0; i < 20; i += 1) {
    res += N + ' - ';
    N += 2;
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}

