
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  var n = Number(a);

  var found = false;
  var i = 2;
  while (i <= n - 1) {
    if (n % i == 0) {
      found = true;
    }
    i += 1;
  }
  var res;
  if (found) {
    res = 'Не простое'
  }
  else {
    res = 'Простое'
  }

  var out = document.querySelector('.out');
  out.innerHTML = res;
}