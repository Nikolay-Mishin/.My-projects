// Numbers
//  1a.2
//  0.5
//  .5
//  1E-1a
//  -1234.5679E+172

function test() {
  var a = document.getElementById('a').value;

  var res;
  if (a == '' || isNaN(Number(a))) {
    res = 'не число';
  }
  else {
    res = 'число';
  }

  document.getElementById('output').innerHTML = res;
}
