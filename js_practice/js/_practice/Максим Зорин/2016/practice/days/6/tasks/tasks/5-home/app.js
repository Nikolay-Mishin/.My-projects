
document.addEventListener('DOMContentLoaded', start);

function start() {
  route();
  window.addEventListener('hashchange', route);

  load('data/people.jsonp.js', dataReady);
}

function dataReady(data) {
  console.log('Data loaded: ' + data.length);
  var model = newModel(data);
  studentsTab(model);
  groupsTab(model);
  homeTab(model);
}

function homeTab(model) {
  var people = model.people,
      groups = model.groups;
  var mCount = 0,
      fCount = 0,
      sumAge = 0;
  people.forEach(function(person) {
    if (person.gender == 'm') mCount += 1;
    if (person.gender == 'f') fCount += 1;
    sumAge += Number(person.age);
  });
  var values = [
    ['.value.groupsCount', groups.length],
    ['.value.peopleCount', people.length],
    ['.value.mCount', mCount],
    ['.value.fCount', fCount],
    ['.value.avgCount', parseInt(people.length / groups.length)],
    ['.value.avgAge', parseInt(sumAge / people.length)],
    ['.value.avgMen', parseInt(mCount / groups.length)],
    ['.value.avgWomen', parseInt(fCount / groups.length)]
  ];
  values.forEach(function(line) {
    document.querySelector(line[0]).innerText = line[1];
  });
}

function studentsTab(model) {
  var tbody = document.querySelector('.tabs .students > table > tbody');
  empty(tbody);
  model.people.forEach(function(person) {
    tbody.appendChild(tr([
      person.name.last,
      person.name.first,
      person.group,
      person.age,
      person.genderRu
    ]));
  });
}

function groupsTab(model) {
  var tbody = document.querySelector('.tabs .groups > table > tbody');
  empty(tbody);
  model.groups.forEach(function(group) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var td1 = document.createElement('td');
    td1.innerText = 'Group ' + group;
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = stat(model, group);
    tr.appendChild(td2);
  });
}

function stat(model, group) {
  var studentsOfGroup = model.people.filter(function(person) {
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
