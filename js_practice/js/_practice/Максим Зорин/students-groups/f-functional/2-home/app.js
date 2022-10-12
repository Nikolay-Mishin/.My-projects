
(function(people) {

  document.addEventListener('DOMContentLoaded', start);

  function start() {
    homeTab();

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

    innerText('.value.groupsCount', groups.length);
    innerText('.value.peopleCount', people.length);
    innerText('.value.mCount',      mCount);
    innerText('.value.fCount',      fCount);
    innerText('.value.avgCount',    parseInt(people.length / groups.length));
    innerText('.value.avgAge',      parseInt(sumAge / people.length));
    innerText('.value.avgMen',      parseInt(mCount / groups.length));
    innerText('.value.avgWomen',    parseInt(fCount / groups.length));
  }

})(people);
