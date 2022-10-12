
for (var i = 0; i < 10; i += 1) {
  document.getElementById('output').innerHTML += i + ' ';
}
document.getElementById('output').innerHTML += '<br>';


var i = 0;
while (i < 10) {
  document.getElementById('output').innerHTML += i + ' ';
  i += 1;
}
document.getElementById('output').innerHTML += '<br>';


var i = 0;
do {
  document.getElementById('output').innerHTML += i + ' ';
  i += 1;
} while (i < 10);
document.getElementById('output').innerHTML += '<br>';
