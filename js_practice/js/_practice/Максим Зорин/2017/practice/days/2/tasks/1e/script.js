
function test() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);

  for (var i = 1; i <= a * b; i += 1) {
    if (i % a == 0  &&  i % b == 0) {
      var NOK = i;
      break;
    }
  }

  var res = NOK;
  document.getElementById('output').innerHTML = res;
  console.log(res);
}

// 8 6 ==> 24
