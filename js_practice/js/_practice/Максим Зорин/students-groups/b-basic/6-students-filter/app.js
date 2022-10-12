
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
  prepareFilters();
  showStudents();
}

function showStudents() {
  var students = filterPeople(people);

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
// 6-students-filter
// -----------------------------------

var filterGroupId = '';

function prepareFilters() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();
  var ul = document.querySelector('.tabs .students .group-filter');
  ul.innerHTML = '<li class="active" onclick="filterBy()">All groups';
  for (var i = 0; i < groups.length; i += 1) {
    var groupId = groups[i];
    ul.innerHTML += '<li class="group-' + groupId + '" onclick="filterBy(' + groupId + ')">Group ' + groupId;
  }
}

function filterBy(groupId) {
  var li = document.querySelector('.tabs .students .group-filter .active');
  if (li) {
    li.classList.remove('active');
  }
  var header = document.querySelector('.tabs .students .group-filter .group-' + groupId);
  if (header) {
    header.classList.add('active');
  }
  else {
    document.querySelector('.tabs .students .group-filter li:first-child').classList.add('active');
  }
  filterGroupId = groupId || '';

  showStudents();
}

function filterPeople(people) {
  var filteredList = people.slice();
  if (filterGroupId) {
    filteredList = [];
    for (var i = 0; i < people.length; i += 1) {
      var person = people[i];
      if (person.group == filterGroupId) {
        filteredList.push(person);
      }
    }
  }
  return filteredList;
}
