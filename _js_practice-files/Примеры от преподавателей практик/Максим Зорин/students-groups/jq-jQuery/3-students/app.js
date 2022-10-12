
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
    showStudents();
  }

  function showStudents() {
    var students = people;

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

})(people);
