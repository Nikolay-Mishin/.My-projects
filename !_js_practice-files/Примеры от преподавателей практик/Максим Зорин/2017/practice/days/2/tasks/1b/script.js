
function test() {
  var a = document.getElementById('a').value;

  var res = 0;
  for (var i = 0; i < a.length; i += 1) {
    //if (a.charAt(i))
    if (a[i] == 'b') {
      res += 1;
    }
  }

  // 2) a.split('b').length - 1

  // 3)
  // var res = 0;
  // var i = 0;
  // while (a.indexOf('b', i) !== -1) {
  //   res += 1;
  //   i = a.indexOf('b', i);
  // }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
