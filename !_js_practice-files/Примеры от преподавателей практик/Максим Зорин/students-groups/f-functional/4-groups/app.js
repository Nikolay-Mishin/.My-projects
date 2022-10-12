
(function(people) {

  document.addEventListener('DOMContentLoaded', start);

  function start() {
    groupsTab();

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
  // 4-groups
  // -----------------------------------

  function groupsTab() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var tbody = document.querySelector('.tabs .groups > table > tbody');
    tbody.innerHTML = '';
    groups.forEach(function(groupId) {
      var studentsOfGroup = people.filter(function(person) {
        return (person.group == groupId);
      });
      tbody.innerHTML += '<tr>' +
        '<td>Group ' + groupId +
        '<td>' + stat(studentsOfGroup);
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
