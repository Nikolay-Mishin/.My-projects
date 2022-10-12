
function empty(element) {
  while (element.firstElementChild)
    element.removeChild(element.firstElementChild);
}

function tr(cells) {
  var tr = document.createElement('tr');
  cells.forEach(function(cell) {
    var td = document.createElement('td');
    td.innerText = cell;
    tr.appendChild(td);
  });
  return tr;
}
