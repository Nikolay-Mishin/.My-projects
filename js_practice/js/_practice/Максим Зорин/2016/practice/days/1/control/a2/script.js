
function test() {
  var a = document.getElementById('a').value;

  var res = '';
  if (a == '') {
    res = 'пустая строка';
  }
  else if (isNaN(Number(a))) {
    res = 'строка';
  }
  else {
    res = 'число';
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
