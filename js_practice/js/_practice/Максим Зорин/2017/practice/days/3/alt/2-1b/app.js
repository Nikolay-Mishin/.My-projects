
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  // var c = 0;
  // for (var i = 0; i < a.length; i += 1) {
  //   if (a[i] == 'b') {
  //     c += 1;
  //   }
  // }

  var c = 0;
  var i = 0;
  while (a.indexOf('b', i) !== -1) {
    c += 1;
    i = a.indexOf('b', i) + 1;
  }

  // for (var i = 0; i < a.length; i += 1) {
  //   if (a[i] == 'b') {
  //     c += 1;
  //   }
  // }


  var out = document.querySelector('.out');
  out.innerHTML = c;
}