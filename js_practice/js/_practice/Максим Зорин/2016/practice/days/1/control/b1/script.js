
function test() {
  var a = document.getElementById('a').value;

  //a = Number(a.replace(/ /g, ''));
  a = Number(a.split(' ').join(''));
  var res = a % Math.pow(2, 20);

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
