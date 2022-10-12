
function test() {
  showTable();
}

var genderMap = {
  'f': 'Ж',
  'm': 'M'
};

function showTable() {
  var tbody = document.getElementById('students');
  tbody.innerHTML = '';
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    var tr = '<tr>';
    tr += '<td>' + person.name.last;
    tr += '<td>' + person.name.first;
    tr += '<td>' + person.group;
    tr += '<td>' + person.age;
    tr += '<td>' + (genderMap[person.gender] || person.gender);
    tbody.innerHTML += tr;
  }
}

function sortLastName() {
  people = people.sort(compareLastName);
  showTable();
}

function sortFirstName() {
  people = people.sort(compareFirstName);
  showTable();
}

function sortGroup() {
  people = people.sort(compareGroup);
  showTable();
}

function sortAge() {
  people = people.sort(compareAge);
  showTable();
}

function sortGender() {
  people = people.sort(compareGender);
  showTable();
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
  return Number(a.age) - Number(b.age);
}

function compareGroup(a, b) {
  return String(a.group).localeCompare(b.group);
}

function compareGender(a, b) {
  return String(genderMap[a.gender]).localeCompare(genderMap[b.gender]);
}
