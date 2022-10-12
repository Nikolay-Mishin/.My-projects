
function test() {
  var N = Number(document.getElementById('a').value);

  var res = '';
  if (isNaN(N)) {
    res = 'Это не число!'
  }
  else {
    N = String(N);
    var zeroCount = 0;
    var digitsSum = 0;
    for (var i = 0; i < N.length; i += 1) {
      digitsSum += Number(N[i]);
      if (N[i] == 0) {
        zeroCount += 1;
      }
    }
    res = 'Нулей: ' + zeroCount + '<br>' +
        'Сумма цифр: ' + digitsSum + '<br>';
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}

