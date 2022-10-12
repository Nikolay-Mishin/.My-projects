
function test() {
  var a = document.getElementById('a').value;

  var res = a.split(' ').length - 1;

  document.getElementById('output').innerHTML = res;
}



// var res2 = a.length - a.replace(/ /g, '').length;
// var res3 = a.replace(/[^ ]/g, '').length;

