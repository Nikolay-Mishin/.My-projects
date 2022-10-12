
var origPeople = people;

function test() {
  showTable();
  showGroupTable();
}

function showGroupTable() {
  // ...
}

function filterGroup(groupId) {
  people = origPeople.filter(function(person) {
    return (person.group == groupId);
  });
  showTable();
}


var genderMap = {
  'f': 'Ж',
  'm': 'M'
};

var lastSortMethod = null,
    lastHeader = null;

function showTable(sortMethod, header) {
  if (lastHeader) {
    lastHeader.className = '';
  }
  if (sortMethod) {
    people = people.sort(sortMethod);
    if (sortMethod == lastSortMethod) {
      people = people.reverse();
      lastSortMethod = null;
      header.className = 'reverse';
    }
    else {
      lastSortMethod = sortMethod;
      header.className = 'forward';
    }
  }
  lastHeader = header;


  var tbody = document.getElementById('students');
  tbody.innerHTML = '';
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    var tr = '<tr>';
    tr += '<td>' + person.name.last;
    tr += '<td>' + person.name.first;
    tr += '<td>' + person.group;
    tr += '<td>' + person.age;
    tr += '<td>' + genderMap[person.gender];
    tbody.innerHTML += tr;
  }
}

function compareLastName(a, b) {
  if (a.name.last != b.name.last) {
    return (a.name.last).localeCompare(b.name.last);
  }
  else {
    return (a.name.first).localeCompare(b.name.first);
  }
}

function compareFirstName(a, b) {
  if (a.name.first != b.name.first) {
    return (a.name.first).localeCompare(b.name.first);
  }
  else {
    return (a.name.last).localeCompare(b.name.last);
  }
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
