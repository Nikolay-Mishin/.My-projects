

function test1() {
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);

  var c = document.getElementById('c');
  if (a % b == 0) {
    c.innerText = 'Делится';
  }
  else {
    c.innerHTML = '<b>Не</b> делится';
  }

}

