
function test() {
  var a = document.getElementById('a').value;
  a = a.split(',');

  var sum = 0;
  for (var i = 0; i < a.length; i += 1) {
    sum += Number(a[i]);
  }
  var res = sum / a.length;

  document.getElementById('output').innerHTML = res;
  console.log(res);
}

