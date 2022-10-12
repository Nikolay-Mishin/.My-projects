
function test() {
  var a = document.getElementById('a').value;
  a = a.split(',');
  for (var i = 0; i < a.length; i += 1) {
    a[i] = Number(a[i]);
  }

  var res = a.sort();

  document.getElementById('output').innerHTML = res;
}

/*
  12.1,0,8,0.5,-3,6

  -3,0,0.5,12.1,6,8
*/
