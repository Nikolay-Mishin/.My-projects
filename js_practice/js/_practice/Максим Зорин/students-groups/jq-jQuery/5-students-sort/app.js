
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
    prepareSorts();
    showStudents();
  }

  function showStudents() {
    var students = sortPeople(people);

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
  // 5-students-sort
  // -----------------------------------

  var sortMethod = null;
  var reverse = false;

  function prepareSorts() {
    var thead = $('.tabs .students > table > thead');
    thead.empty();
    $('<th>').text('Фамилия').click(function() { sortBy(compareLastName, this) }).appendTo(thead);
    $('<th>').text('Имя'    ).click(function() { sortBy(compareFirstName, this) }).appendTo(thead);
    $('<th>').text('Группа' ).click(function() { sortBy(compareGroup, this) }).appendTo(thead);
    $('<th>').text('Возраст').click(function() { sortBy(compareAge, this) }).appendTo(thead);
    $('<th>').text('Пол'    ).click(function() { sortBy(compareGender, this) }).appendTo(thead);
  }

  function sortBy(method, header) {
    if ($(header).hasClass('active')) {
      reverse = !reverse;
      $(header).toggleClass('reverse');
    }
    else {
      $('.tabs .students > table > thead .active').removeClass('active reverse');
      if (method) {
        sortMethod = method;
        reverse = false;
        $(header).addClass('active');
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
