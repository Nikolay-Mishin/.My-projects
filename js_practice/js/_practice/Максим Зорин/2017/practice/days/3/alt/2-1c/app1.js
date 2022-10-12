
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  var n = Number(a);

  var found = false;
  for (var i = 2; i <= n - 1; i += 1) {
    if (n % i == 0) {
    }
  }
  var res = found? 'Не простое' : 'Простое';

  var out = document.querySelector('.out');
  out.innerHTML = res;
}

