
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  a = a.split(',').map(Number);

  a.sort(function(a, b) {
    return a - b;
  });
  // a.sort((a, b) => a - b);

  var res = a.join(' | ');

  var out = document.querySelector('.out');
  out.innerHTML = res;
}



function compareNumber(a, b) {
  if (a > b) {
    return 1;
  }
  else if (a < b) {
    return -1;
  }
  else {
    return 0;
  }
}