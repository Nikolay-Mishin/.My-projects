
(function(people) {

  $(function() {
    studentsTab();

    route();
    $(window).on('hashchange', route);
  });

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

    $('.main-menu .active').removeClass('active');
    $('.main-menu .' + id).addClass('active');

    $('.tabs > .active').removeClass('active');
    $('.tabs > .' + id).addClass('active');
  }

  // -----------------------------------
  // helpers
  // -----------------------------------

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

    var tbody = $('.tabs .students > table > tbody');
    tbody.empty();
    students.forEach(function(person) {
      $('<tr>')
        .appendTo(tbody)
        .append('<td>' + person.name.last)
        .append('<td>' + person.name.first)
        .append('<td>' + person.group)
        .append('<td>' + person.age)
        .append('<td>' + GENDER[person.gender]);
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

    var ul = $('.tabs .students .group-filter');
    ul.empty();
    ul.append(groupFilter('', 'All gropus', 'active'));
    groups.forEach(function(groupId) {
      ul.append(groupFilter(groupId, 'Group ' + groupId, 'group-' + groupId));
    });
  }

  function groupFilter(groupId, title, cssClass) {
    return $('<li>').addClass(cssClass).append($('<a>').text(title)).click(function() { filterBy(groupId); });
  }

  function filterBy(groupId) {
    var groupFilter = $('.tabs .students .group-filter');
    groupFilter.find('.active').removeClass('active');
    if (groupId)
      groupFilter.find('.group-' + groupId).addClass('active');
    else
      groupFilter.find('li:first-child').addClass('active');
    filterGroupId = groupId || '';

    showStudents();
  }

  function filterPeople(people) {
    return filterGroupId?
        people.filter(function(person) { return (person.group == filterGroupId); }) :
        people.slice();
  }

})(people);
