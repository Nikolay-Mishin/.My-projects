
function test() {
  var a = document.getElementById('a').value;
  a = a.split(',');
  for (var i = 0; i < a.length; i += 1) {
    a[i] = Number(a[i]);
  }

  var max_i = 0;
  for (var i = 1; i < a.length; i += 1) {
    if (a[max_i] < a[i]) {
      max_i = i;
    }
  }

  var min_i = 0;
  for (var i = 1; i < a.length; i += 1) {
    if (a[i] < a[min_i]) {
      min_i = i;
    }
  }

  var res = 'Maximum ' + a[max_i] + ' in ' + max_i + '<br>' +
            'Minimum ' + a[min_i] + ' in ' + min_i;

  document.getElementById('output').innerHTML = res;
}

/*
  12.1,0,8,0.5,-3,6

  Maximum 12.1 in 0
  Minimum -3 in 4
*/
