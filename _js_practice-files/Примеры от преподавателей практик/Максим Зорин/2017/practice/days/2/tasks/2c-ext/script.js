
function sum(a) {
  return a.reduce(function(a, b) { return a + b; });
}

function compare_sum(a, b) {
  return sum(a) - sum(b);
}

function test() {
  var arr2D = [
      [1, 2, 3, 4, 5],
      [-1, 4, 5, -2, 3],
      [0, 1, 5, 5, 0, 1, -3, 2, 5, 6],
      [7, 8, 1, 2, 4, 5, 7, -10]
  ];

  var res = arr2D.sort(compare_sum);

  document.getElementById('output').innerHTML = res;
}
