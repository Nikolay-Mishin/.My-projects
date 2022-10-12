
(function(people) {

  $(function() {
    homeTab();

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
  // 2-home
  // -----------------------------------

  function homeTab() {
    var groups = [],
        mCount = 0,
        fCount = 0,
        sumAge = 0;

    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
      if (person.gender == 'm') mCount += 1;
      if (person.gender == 'f') fCount += 1;
      sumAge += person.age;
    });
    groups = groups.sort();

    $('.value.groupsCount').text(groups.length);
    $('.value.peopleCount').text(people.length);
    $('.value.mCount'  ).text(mCount);
    $('.value.fCount'  ).text(fCount);
    $('.value.avgCount').text(parseInt(people.length / groups.length));
    $('.value.avgAge'  ).text(parseInt(sumAge / people.length));
    $('.value.avgMen'  ).text(parseInt(mCount / groups.length));
    $('.value.avgWomen').text(parseInt(fCount / groups.length));
  }

})(people);
