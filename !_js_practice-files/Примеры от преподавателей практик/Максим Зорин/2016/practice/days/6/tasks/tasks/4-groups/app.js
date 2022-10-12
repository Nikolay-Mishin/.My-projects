
document.addEventListener('DOMContentLoaded', start);

function start() {
  route();
  window.addEventListener('hashchange', route);

  load('data/people.jsonp.js', dataReady);
}

function dataReady(data) {
  console.log('Data loaded: ' + data.length);
  var people = data;
  studentsTab(people);
  groupsTab(people);
}

function studentsTab(people) {
  var tbody = document.querySelector('.tabs .students > table > tbody');
  empty(tbody);
  people.forEach(function(person) {
    tbody.appendChild(tr([
      person.name.last,
      person.name.first,
      person.group,
      person.age,
      (person.gender == 'f'? 'Ж' : 'М')
    ]));
  });
}

function groupsTab(people) {
  var groups = [];
  people.forEach(function(person) {
    if (!groups.includes(person.group))
      groups.push(person.group);
  });

  var tbody = document.querySelector('.tabs .groups > table > tbody');
  empty(tbody);
  groups.forEach(function(group) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var td1 = document.createElement('td');
    td1.innerText = 'Group ' + group;
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = stat(people, groups, group);
    tr.appendChild(td2);
  });
}

function stat(people, groups, group) {
  var studentsOfGroup = people.filter(function(person) {
    return (person.group = group);
  });

  var mCount = 0,
      fCount = 0,
      sumAge = 0,
      sumMAge = 0,
      sumFAge = 0;

  studentsOfGroup.forEach(function(person) {
    sumAge += Number(person.age);
    if (person.gender == 'm') {
      mCount += 1;
      sumMAge += Number(person.age);
    }
    if (person.gender == 'f') {
      fCount += 1;
      sumFAge += Number(person.age);
    }
  });

  var stat = '';
  stat += 'число мужчин: ' + mCount + '<br>';
  stat += 'число женщин: ' + fCount + '<br>';
  stat += 'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>';
  stat += 'средний возраст мужчин: ' + parseInt(sumMAge / mCount) + '<br>';
  stat += 'средний возраст женщин: ' + parseInt(sumFAge / fCount) + '<br>';

  return stat;
}
