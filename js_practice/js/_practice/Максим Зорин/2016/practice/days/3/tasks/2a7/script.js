
function test() {
  showTable();
}

var genderMap = {
  'f': 'Ж',
  'm': 'M',
  '':  ''
};

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
    tr += '<td>' + (genderMap[person.gender] || person.gender);
    tbody.innerHTML += tr;
  }
}

var previousMethod = null,
    previousHeader = null;

function reorderPeople(sortMethod, header) {

  people = (sortMethod != previousMethod)?
      people.sort(sortMethod) :
      people.reverse();
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
