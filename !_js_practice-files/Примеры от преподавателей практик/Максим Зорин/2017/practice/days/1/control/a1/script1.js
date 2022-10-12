
function test() {
  var a = document.getElementById('a').value;

  var res = 'Привет, ' + a + '!';

  document.getElementById('output').innerText = res;
  console.log(res);
}
