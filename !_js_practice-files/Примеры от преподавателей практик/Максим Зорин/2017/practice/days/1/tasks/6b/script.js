
function test() {
  var a = Number(document.getElementById('a').value);

  // var res = '';
  // if (0 <= a && a <= 300) {
  //   res = 'small';
  // }
  // else if (a <= 1280) {
  //   res = 'middle';
  // }
  // else {
  //   res = 'big';
  // }

  if (0 <= a && a <= 300) {
    res = 'small';
  }
  if (301 <= a && a <= 1280) {
    res = 'middle';
  }
  if (1281 <= a) {
    res = 'big';
  }

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
