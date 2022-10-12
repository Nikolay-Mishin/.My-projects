
function test() {
  var a = document.getElementById('a').value.split(',');
  for (var i = 0; i < a.length; i += 1) {
    a[i] = Number(a[i]);
  }

  // var res = a.sort().reverse();

  for (var i = 0; i < a.length - 1; i += 1) {
    for (var j = 1; j < a.length; j += 1) {
      if (a[j - 1] < a[j]) {
        var temp = a[j - 1];
        a[j - 1] = a[j];
        a[j] = temp;
      }
    }
  }
  var res = a;

  document.getElementById('output').innerHTML = res;
}



/*
  12.1,0,8,0.5,-3,6

  8,6,12.1,0.5,0,-3
*/
