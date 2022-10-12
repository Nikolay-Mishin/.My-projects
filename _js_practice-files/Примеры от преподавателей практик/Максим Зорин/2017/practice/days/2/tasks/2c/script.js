
function sum(a) {
  var s = 0;
  for (var i = 0; i < a.length; i += 1) {
    s += a[i];
  }
  return s;
}

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  else if (a > b) {
    return 1;
  }
  else {   // a == b
    return 0;
  }
}

function test() {
  var arr2D = [
    [1, 2, 3, 4, 5],
    [-1, 4, 5, -2, 3],
    [0, 1, 5, 5, 0, 1, -3, 2, 5, 6],
    [7, 8, 1, 2, 4, 5, 7, -10]
  ];

  var res = arr2D.sort(function(arr1, arr2) {
    return compare(sum(arr1), sum(arr2));
  });

  document.getElementById('output').innerHTML = res;
}
