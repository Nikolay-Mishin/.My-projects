
function stat(peopleList) {
  var sum = 0,
      mCount = 0,
      fCount = 0;

  for (var i = 0; i < peopleList.length; i += 1) {
    var person = peopleList[i];
    sum += Number(person.age);
    if (person.gender == 'm') {
      mCount += 1;
    }
    else if (person.gender == 'f') {
      fCount += 1;
    }
  }
  return 'Средний возраст: ' + parseInt(sum / peopleList.length) + ', ' +
      'Женщин: ' + fCount + ', ' +
      'Мужчин: ' + mCount + ', ';
}

function test() {

  var groupList = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groupList.indexOf(person.group) == -1) {
      groupList.push(person.group);
    }
  }

  var groupList = [];
  for (var i = 0, person; person = people[i]; i += 1)
    if (!groupList.includes(person.group))
      groupList.push(person.group);

  var groupList = [];
  people.forEach(function(person) {
    if (!groupList.includes(person.group))
      groupList.push(person.group);
  });

  var groupList = people.reduce(function(a, person) {
    if (!a.includes(person.group))
      a.push(person.group);
  }, []);


  groupList.forEach(function(groupNumber) {
    var group = people.filter(function(person) {
      return person.group == groupNumber;
    });
    console.log(groupNumber + ' ' + stat(group));
  });

  for (var i = 0; i < groupList; i += 1) {
    var group = [];
    for (var j = 0; j < people.length; j += 1) {
      if (people[j].group == groupList[i]) {
        group.push(people[j]);
      }
    }
    console.log(groupList[i] + ' ' + stat(group));
  }
}
