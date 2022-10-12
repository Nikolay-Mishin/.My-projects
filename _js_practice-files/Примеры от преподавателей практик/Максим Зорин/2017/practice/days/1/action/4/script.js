
function calculation() {
  var a = Number(document.getElementById('aId').value);
  var b = Number(document.getElementById('bId').value);
  var c = Number(document.getElementById('cId').value);

  var y = 7 * a - c;
  var z = 2 * Math.pow(a, b-4) - Math.pow(y, b*b);
  var o = Math.pow((5 * c + Math.sqrt(a + b)), 1/4);
  var w = o + c / b;
  var x = z / w;

  console.log(x);
  document.getElementById('outputId').innerHTML =
    "<b>" + x + "</b>";
}

function add() {
  var a = Number(document.getElementById('aId').value);
  var b = Number(document.getElementById('bId').value);
  var c = Number(document.getElementById('cId').value);

  var x = a + b + c;

  console.log(x);
  document.getElementById('outputId').innerText =
    "<b>" + x + "</b>";
}
