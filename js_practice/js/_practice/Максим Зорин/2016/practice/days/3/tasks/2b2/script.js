
function test() {
  showGroups();
  showTable();
}

var groups = [];

function showGroups() {
  buildGroups();

  var ul = document.getElementById('groups');
  ul.innerHTML = '';
  for (var i = 0; i < groups.length; i += 1) {
    var group = groups[i];
    ul.innerHTML += '<li onclick="filterBy(' + group + ', this)">' + group;
  }
}

// var people = ...

function buildGroups() {
  groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (!groups.includes(person.group))
      groups.push(person.group);
  }
  groups = groups.sort();
}

function buildGroups2() {
  groups = people.reduce(function(groups, person) {
    if (!groups.includes(person.group))
      groups.push(person.group);
    return groups;
  }, []).sort();
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
