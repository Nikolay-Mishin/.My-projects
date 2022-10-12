
function test() {
  var aElement = document.querySelector('input[name=a]');
  var a = aElement.value;

  var c = a;

  var out = document.querySelector('.out');
  out.innerHTML = c;
}