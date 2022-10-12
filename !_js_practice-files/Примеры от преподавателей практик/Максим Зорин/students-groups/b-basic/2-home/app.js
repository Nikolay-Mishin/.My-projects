
window.onload = start;

function start() {
  homeTab();

  route();
  window.onhashchange = route;
}

// -----------------------------------
// 1-tabs-route
// -----------------------------------

function route() {
  var hash = location.hash;

  if (hash == '#/students') {
    show('students');
  }
  else if (hash == '#/groups') {
    show('groups');
  }
  else {
    show('home');
  }
}

function show(id) {
  console.log('Tab: ' + id);

  var activeMenu = document.querySelector('.main-menu .active');
  if (activeMenu) {
    activeMenu.classList.remove('active');
  }
  var menuItem = document.querySelector('.main-menu .' + id);
  if (menuItem) {
    menuItem.classList.add('active');
  }

  var activeTab = document.querySelector('.tabs > .active');
  if (activeTab) {
    activeTab.classList.remove('active');
  }
  var tab = document.querySelector('.tabs > .' + id);
  if (tab) {
    tab.classList.add('active');
  }
}

// -----------------------------------
// 2-home
// -----------------------------------

function homeTab() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();

  var mCount = 0;
  var fCount = 0;
  var sumAge = 0;
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (person.gender == 'm') {
      mCount += 1;
    }
    if (person.gender == 'f') {
      fCount += 1;
    }
    sumAge += Number(person.age);
  }

  document.querySelector('.value.groupsCount').innerText = groups.length;
  document.querySelector('.value.peopleCount').innerText = people.length;
  document.querySelector('.value.mCount').innerText      = mCount;
  document.querySelector('.value.fCount').innerText      = fCount;
  document.querySelector('.value.avgCount').innerText    = parseInt(people.length / groups.length);
  document.querySelector('.value.avgAge').innerText      = parseInt(sumAge / people.length);
  document.querySelector('.value.avgMen').innerText      = parseInt(mCount / groups.length);
  document.querySelector('.value.avgWomen').innerText    = parseInt(fCount / groups.length);
}
