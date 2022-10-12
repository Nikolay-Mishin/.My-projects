
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
    prepareFilters();
    showStudents();
  }

  function showStudents() {
    var students = filterPeople(people);

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
  // 6-students-filter
  // -----------------------------------

  var filterGroupId = '';

  function prepareFilters() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var ul = document.querySelector('.tabs .students .group-filter');
    ul.innerHTML = '';
    ul.appendChild(groupFilter('', 'All gropus', 'active'));
    groups.forEach(function(groupId) {
      ul.appendChild(groupFilter(groupId, 'Group ' + groupId, 'group-' + groupId));
    });
  }

  function groupFilter(groupId, title, cssClass) {
    var li = document.createElement('li');
    li.className = cssClass;
    li.appendChild(document.createElement('a')).innerText = title;
    li.addEventListener('click', function() {
      filterBy(groupId);
    });
    return li;
  }

  function filterBy(groupId) {
    var li = document.querySelector('.tabs .students .group-filter .active');
    if (li) li.classList.remove('active');
    var header = document.querySelector('.tabs .students .group-filter .group-' + groupId);
    if (header)
      header.classList.add('active');
    else
      document.querySelector('.tabs .students .group-filter li:first-child').classList.add('active');
    filterGroupId = groupId || '';

    showStudents();
  }

  function filterPeople(people) {
    return filterGroupId?
        people.filter(function(person) { return (person.group == filterGroupId); }) :
        people.slice();
  }

})(people);
