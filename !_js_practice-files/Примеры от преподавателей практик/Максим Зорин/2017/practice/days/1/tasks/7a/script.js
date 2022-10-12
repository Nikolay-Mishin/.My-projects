
function test() {
  var a = document.getElementById('a').value;

  var res = '';
  if (a.length < 6) {
    res = 'короткая';
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
