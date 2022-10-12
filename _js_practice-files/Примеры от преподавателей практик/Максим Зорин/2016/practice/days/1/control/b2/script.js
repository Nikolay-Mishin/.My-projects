
function test() {
  var a = document.getElementById('a').value;

  var res = a.substr(0, 4) + ' ' + a.substr(4, 4) + ' ' + a.substr(8, 4) + ' ' + a.substr(12, 4);

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
