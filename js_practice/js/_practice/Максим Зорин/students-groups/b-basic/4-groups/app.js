
window.onload = start;

function start() {
  groupsTab();

  route();
  window.onhashchange = route;
}

// -----------------------------------
// 1-tabs-route
// -----------------------------------

function route() {
  var hash = location.hash;

  if (hash == '#/students') {
    show('students');
  }
  else if (hash == '#/groups') {
    show('groups');
  }
  else {
    show('home');
  }
}

function show(id) {
  console.log('Tab: ' + id);

  var activeMenu = document.querySelector('.main-menu .active');
  if (activeMenu) {
    activeMenu.classList.remove('active');
  }
  var menuItem = document.querySelector('.main-menu .' + id);
  if (menuItem) {
    menuItem.classList.add('active');
  }

  var activeTab = document.querySelector('.tabs > .active');
  if (activeTab) {
    activeTab.classList.remove('active');
  }
  var tab = document.querySelector('.tabs > .' + id);
  if (tab) {
    tab.classList.add('active');
  }
}

// -----------------------------------
// 4-groups
// -----------------------------------

function groupsTab() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();

  var tbody = document.querySelector('.tabs .groups > table > tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < groups.length; i += 1) {
    var groupId = groups[i];

    var studentsOfGroup = [];
    for (var j = 0; j < people.length; j += 1) {
      var person = people[j];
      if (person.group == groupId) {
        studentsOfGroup.push(person);
      }
    }

    var tr = '<tr>';
    tr += '<td>Group ' + groupId;
    tr += '<td>' + stat(studentsOfGroup);
    tbody.innerHTML += tr;
  }
}

function stat(studentsOfGroup) {
  var mCount = 0;
  var fCount = 0;
  var sumAge = 0;
  var sumMAge = 0;
  var sumFAge = 0;

  for (var i = 0; i < studentsOfGroup.length; i += 1) {
    var person = studentsOfGroup[i];
    sumAge += Number(person.age);
    if (person.gender == 'm') {
      mCount += 1;
      sumMAge += Number(person.age);
    }
    if (person.gender == 'f') {
      fCount += 1;
      sumFAge += Number(person.age);
    }
  }

  var stat = '';
  stat += 'число мужчин: ' + mCount + '<br>';
  stat += 'число женщин: ' + fCount + '<br>';
  stat += 'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>';
  stat += 'средний возраст мужчин: ' + parseInt(sumMAge / mCount) + '<br>';
  stat += 'средний возраст женщин: ' + parseInt(sumFAge / fCount) + '<br>';

  return stat;
}
