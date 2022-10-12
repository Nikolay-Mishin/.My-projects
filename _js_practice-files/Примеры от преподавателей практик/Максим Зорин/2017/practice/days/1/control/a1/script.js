
function test() {
  var a = document.getElementById('a').value;

  var res = 'Привет, ' + a + '!';

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
