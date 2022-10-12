
document.addEventListener("DOMContentLoaded", function() {
  menu('overview');
  showGroups();
  filterBy('', document.getElementById('allGroups'));
  showOverview();
  showGroupsTab();
});

function showGroupsTab() {
  var ul = document.getElementById('groupsList');
  ul.innerHTML = '';
  debugger;
  for (var i = 0; i < groups.length; i += 1) {
    var group = groups[i];

    var studentsOfGroup = origPeople.filter(function(person) {
      return (person.group = group);
    });

    var mCount = 0,
        fCount = 0,
        sumAge = 0,
        sumMAge = 0,
        sumFAge = 0;

    studentsOfGroup.forEach(function(person) {
      sumAge = Number(person.age);
      if (person.gender == 'm') {
        mCount += 1;
        sumMAge += Number(person.age);
      }
      if (person.gender == 'f') {
        fCount += 1;
        sumFAge += Number(person.age);
      }

    });

    ul.innerHTML += '<li>Group ' + group + ' ' + mCount+  ' '
  }
}

function setValue(id, value) {
  document.getElementById(id).innerHTML = value;
}

function showOverview() {
  var mCount = 0, fCount = 0, sumAge = 0;
  origPeople.forEach(function(person) {
    if (person.gender == 'f') fCount += 1;
    if (person.gender == 'm') mCount += 1;
    sumAge += Number(person.age);
  });

  document.getElementById('groupsCount').innerHTML = groups.length;
  document.getElementById('peopleCount').innerHTML = origPeople.length;
  document.getElementById('mCount').innerHTML =   mCount;
  document.getElementById('fCount').innerHTML =   fCount;
  document.getElementById('avgCount').innerHTML = parseInt(origPeople.length / groups.length);
  document.getElementById('avgAge').innerHTML =   parseInt(sumAge / origPeople.length);
  document.getElementById('avgMen').innerHTML =   parseInt(mCount / groups.length);
  document.getElementById('avgWomen').innerHTML = parseInt(fCount / groups.length);

  setValue('groupsCount', groups.length);
  setValue('peopleCount', origPeople.length);
  setValue('mCount',    mCount);
  setValue('fCount',    fCount);
  setValue('avgCount',  parseInt(origPeople.length / groups.length));
  setValue('avgAge',    parseInt(sumAge / origPeople.length));
  setValue('avgMen',    parseInt(mCount / groups.length));
  setValue('avgWomen',  parseInt(fCount / groups.length));

  [
    ['groupsCount', groups.length],
    ['peopleCount', origPeople.length],
    ['mCount',    mCount],
    ['fCount',    fCount],
    ['avgCount',  parseInt(origPeople.length / groups.length)],
    ['avgAge',    parseInt(sumAge / origPeople.length)],
    ['avgMen',    parseInt(mCount / groups.length)],
    ['avgWomen',  parseInt(fCount / groups.length)]
  ].forEach(function(line) {
    document.getElementById(line[0]).innerHTML = line[1];
  });

}



var previousMenu = null,
    previousTab = null;

function menu(id) {
  if (previousMenu) previousMenu.className = '';
  var menuItem = document.getElementById(id + 'Menu');
  menuItem.className = 'active';
  previousMenu = menuItem;

  if (previousTab) previousTab.style.display = 'none';
  var tab = document.getElementById(id + 'Tab');
  tab.style.display = 'block';
  previousTab = tab;
}

var groups = [];

function showGroups() {
  buildGroups();

  var ul = document.getElementById('groups');
  ul.innerHTML = '';
  for (var i = 0; i < groups.length; i += 1) {
    var group = groups[i];
    ul.innerHTML += '<li onclick="filterBy(' + group + ', this)"><a href="#">Group ' + group + '</a>';
  }
  previousGroupHeader = document.querySelector('.nav .active');
}

function buildGroups() {
  groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (!groups.includes(person.group))
      groups.push(person.group);
  }
  groups = groups.sort();
}

var origPeople = people,
    previousGroupHeader;

function filterBy(group, header) {
  people = (!group)?
      origPeople.slice() :
      origPeople.filter(function (person) {
        return (person.group == group);
      });

  showTable();
  if (previousGroupHeader) previousGroupHeader.className = '';
  header.className = 'active';
  previousGroupHeader = header;
}

var GENDER = {'f': 'Ж', 'm': 'M', '':  ''};

function showTable(sortMethod, header) {

  reorderPeople(sortMethod, header);

  var tbody = document.getElementById('students');
  tbody.innerHTML = '';
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    var tr = '<tr>';
    tr += '<td>' + person.name.last;
    tr += '<td>' + person.name.first;
    tr += '<td>' + person.group;
    tr += '<td>' + person.age;
    tr += '<td>' + (GENDER[person.gender] || '');
    tbody.innerHTML += tr;
  }
}

var previousMethod,
    previousHeader;

function reorderPeople(sortMethod, header) {
  people = (sortMethod == previousMethod)?
      people.reverse() :
      people.sort(sortMethod);
  previousMethod = sortMethod;

  if (previousHeader && header != previousHeader)
    previousHeader.className = '';
  if (header)
    header.className = (header.className == 'forward'? 'reverse' : 'forward');
  previousHeader = header;
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
  return String(genderMap[a.gender]).localeCompare(genderMap[b.gender]) || compareLastName(a, b);
}

