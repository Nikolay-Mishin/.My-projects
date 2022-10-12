
(function(people) {

  $(function() {
    groupsTab();

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
  // 4-groups
  // -----------------------------------

  function groupsTab() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var tbody = $('.tabs .groups > table > tbody');
    tbody.empty();
    groups.forEach(function(groupId) {
      var studentsOfGroup = people.filter(function(person) {
        return (person.group == groupId);
      });
      $('<tr>')
        .appendTo(tbody)
        .append('<td>Group ' + groupId)
        .append('<td>' + stat(studentsOfGroup));
    });
  }

  function stat(studentsOfGroup) {
    var men    = studentsOfGroup.filter(function(person) { return person.gender == 'm'; }),
        women  = studentsOfGroup.filter(function(person) { return person.gender == 'f'; }),
        sumAge  = ageOf(studentsOfGroup),
        sumMAge = ageOf(men),
        sumFAge = ageOf(women);

    return ('' +
      'число мужчин: ' + men.length + '<br>' +
      'число женщин: ' + women.length + '<br>' +
      'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>' +
      'средний возраст мужчин: ' + parseInt(sumMAge / men.length) + '<br>' +
      'средний возраст женщин: ' + parseInt(sumFAge / women.length) + '<br>');
  }

  function ageOf(group) {
    return group.reduce(function(a, person) {
      return a + Number(person.age);
    }, 0);
  }

})(people);
