
function test() {
  var a = document.getElementById('a').value;
  a = a.split(',');
  for (var i = 0; i < a.length; i += 1) {
    a[i] = Number(a[i]);
  }

  var res = a.sort().reverse();

  document.getElementById('output').innerHTML = res;
}

/*
  12.1,0,8,0.5,-3,6

  8,6,12.1,0.5,0,-3
*/
