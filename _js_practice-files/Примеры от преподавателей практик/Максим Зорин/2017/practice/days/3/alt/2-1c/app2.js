
function prime(x) {
  for (var i = 2; i*i <= x; i += 1) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function prime(x) {
  var found = false;
  for (var i = 2; i < x; i += 1) {
    if (x % i == 0) {
      found = true;
      break;
    }
  }
  return !found;
}

function test() {
  var N = Number(document.querySelector('input[name=a]').value);

  var res = "";

  var c = 0;
  for (var i = 2; c < N; i += 1) {
    if (prime(i)) {
      c += 1;
      res += i + ' '
    }
  }

  document.querySelector('.out').innerHTML = res;
}

