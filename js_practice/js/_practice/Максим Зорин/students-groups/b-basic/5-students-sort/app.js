
window.onload = start;

function start() {
  studentsTab();

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
// 3-students
// -----------------------------------

function studentsTab() {
  prepareSorts();
  showStudents();
}

function showStudents() {
  var students = sortPeople(people);

  var tbody = document.querySelector('.tabs .students > table > tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < students.length; i += 1) {
    var person = students[i];
    var tr = '<tr>';
    tr += '<td><a href="#/edit/' + person._id + '">' + person.name.last + '</a>';
    tr += '<td>' + person.name.first;
    tr += '<td>' + person.group;
    tr += '<td>' + person.age;
    tr += '<td>' + (person.gender == 'f'? 'Ж' : 'М');
    tbody.innerHTML += tr;
  }
}

// -----------------------------------
// 5-students-sort
// -----------------------------------

var sortMethod = null;
var reverse = false;

function prepareSorts() {
  var thead = document.querySelector('.tabs .students > table > thead');
  thead.innerHTML = '';
  var tr = '<tr>';
  tr += '<th onclick="sortBy(compareLastName, this)">Фамилия';
  tr += '<th onclick="sortBy(compareFirstName, this)">Имя';
  tr += '<th onclick="sortBy(compareGroup, this)">Группа';
  tr += '<th onclick="sortBy(compareAge, this)">Возраст';
  tr += '<th onclick="sortBy(compareGender, this)">Пол';
  thead.innerHTML += tr;
}

function sortBy(method, header) {
  var activeHeader = document.querySelector('.tabs .students > table > thead .active');
  if (activeHeader && activeHeader != header) {
    activeHeader.classList.remove('active', 'reverse');
  }
  if (header) {
    if (header.classList.contains('active')) {
      reverse = !reverse;
      header.classList.toggle('reverse');
    }
    else {
      sortMethod = method;
      reverse = false;
      header.classList.add('active');
    }
  }

  showStudents();
}

function sortPeople(people) {
  var sortedList = people.slice();
  if (sortMethod) {
    sortedList = sortedList.sort(sortMethod);
    if (reverse) {
      sortedList = sortedList.reverse();
    }
  }
  return sortedList;
}

function compareLastName(a, b) {
  return (a.name.last).localeCompare(b.name.last) || (a.name.first).localeCompare(b.name.first);
}

function compareFirstName(a, b) {
  return (a.name.first).localeCompare(b.name.first) || (a.name.last).localeCompare(b.name.last);
}

function compareAge(a, b) {
  return (Number(a.age) - Number(b.age)) || compareLastName(a, b);
}

function compareGroup(a, b) {
  return String(a.group).localeCompare(b.group) || compareLastName(a, b);
}

function compareGender(a, b) {
  return String(a.gender).localeCompare(b.gender) || compareLastName(a, b);
}
