
(function(people) {

  document.addEventListener('DOMContentLoaded', start);

  function start() {
    studentsTab();

    route();
    window.addEventListener('hashchange', route);
  }

  // -----------------------------------
  // 1-tabs-route
  // -----------------------------------

  function route() {
    switch (location.hash.split('/')[1]) {
      case 'students':
        show('students');
        break;

      case 'groups':
        show('groups');
        break;

      default:
        show('home');
        break;
    }
  }

  function show(id) {
    console.log('Tab: %s', id);

    var activeMenu = document.querySelector('.main-menu .active');
    if (activeMenu) activeMenu.classList.remove('active');
    var menuItem = document.querySelector('.main-menu .' + id);
    if (menuItem) menuItem.classList.add('active');

    var activeTab = document.querySelector('.tabs > .active');
    if (activeTab) activeTab.classList.remove('active');
    var tab = document.querySelector('.tabs > .' + id);
    if (tab) tab.classList.add('active');
  }

  // -----------------------------------
  // helpers
  // -----------------------------------

  function innerText(selector, text) {
      var element = document.querySelector(selector);
      if (element) element.innerText = text;
  }

  function value(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.value = value;
  }

  function selected(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.selected = value;
  }

  function checked(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.checked = value;
  }

  var GENDER = {'f': 'Ж', 'm': 'М', '': ''};

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
    students.forEach(function(person) {
      tbody.innerHTML += '<tr>' +
        '<td>' + person.name.last +
        '<td>' + person.name.first +
        '<td>' + person.group +
        '<td>' + person.age +
        '<td>' + GENDER[person.gender];
    });
  }

})(people);
