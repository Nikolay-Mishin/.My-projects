
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
  showStudents();
}

function showStudents() {
  var students = people;

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
