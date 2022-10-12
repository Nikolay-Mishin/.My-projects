
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

  var GENDER = {'f': 'Ж', 'm': 'М', '': ''};

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
    students.forEach(function(person) {
      tbody.innerHTML += '<tr>' +
        '<td>' + person.name.last +
        '<td>' + person.name.first +
        '<td>' + person.group +
        '<td>' + person.age +
        '<td>' + GENDER[person.gender];
    });
  }

  // -----------------------------------
  // 5-students-sort
  // -----------------------------------

  var sortMethod = null;
  var reverse = false;

  function prepareSorts() {
    var thead = document.querySelector('.tabs .students > table > thead');
    thead.innerHTML = '';
    thead.appendChild(sortedHeader('Фамилия', compareLastName));
    thead.appendChild(sortedHeader('Имя',     compareFirstName));
    thead.appendChild(sortedHeader('Группа',  compareGroup));
    thead.appendChild(sortedHeader('Возраст', compareAge));
    thead.appendChild(sortedHeader('Пол',     compareGender));
  }

  function sortedHeader(title, sortMethod) {
    var th  = document.createElement('th');
    th.innerText = title;
    th.addEventListener('click', function() {
      sortBy(sortMethod, th);
    });
    return th;
  }

  function sortBy(method, header) {
    var activeHeader = document.querySelector('.tabs .students > table > thead .active');
    if (activeHeader && activeHeader != header)
      activeHeader.classList.remove('active', 'reverse');
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
      if (reverse)
        sortedList = sortedList.reverse();
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
    return String(GENDER[a.gender]).localeCompare(GENDER[b.gender]) || compareLastName(a, b);
  }

})(people);
