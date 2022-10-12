
function test() {
  var n = Number(document.getElementById('n').value);

  var res = '';
  var x = 2;
  var i = 0;
  while (i < n) {
    if (isPrime(x)) {
      res += x + ' ';
      i += 1;
    }
    x += 1;
  }

  document.getElementById('output').innerHTML = res;
}

function isPrime(x) {
  var res = true;
  for (var i = 2; i < x; i += 1) {
    if (x % i == 0) {
      res = false;
    }
  }
  return res;
}

// 5 ==> 2 3 5 7 11
