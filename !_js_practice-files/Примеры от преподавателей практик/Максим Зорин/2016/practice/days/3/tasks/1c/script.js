
function test() {

  var mCount = 0,
      fCount = 0;

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];

    if (person.gender == 'm') {
      mCount += 1;
    }
    else if (person.gender == 'f') {
      fCount += 1;
    }

  }
  var res = 'Женщин: ' + fCount + '<br>' +
            'Мужчин: ' + mCount + '<br>';

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
