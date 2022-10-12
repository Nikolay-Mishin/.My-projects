
function test() {
  people = people.sort(compareLastName);
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
