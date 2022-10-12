
function test() {

  var sum = 0,
      mostOld = people[0],
      mostYoung = people[0];

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];

    sum += Number(person.age);

    if (Number(mostOld.age) < Number(person.age)) {
      mostOld = person;
    }

    if (Number(person.age) < Number(mostYoung.age)) {
      mostYoung = person;
    }
  }

  var res = 'Средний возраст ' + (sum / people.length) + '<br>' +
            'Младший: ' + mostYoung.age + ' ' + mostYoung.name.last + '<br>' +
            'Старший: ' + mostOld.age + ' ' + mostOld.name.last + '<br>';

  document.getElementById('output').innerHTML = res;
  console.log(res);
}
