
function start() {
  showStudents();
  showGroups();
}

function showStudents() {
  var tbody = document.getElementById('studentsTBody');
  tbody.innerHTML = '';
  people.forEach(function(person) {
    tbody.innerHTML += '<tr>' +
        '<td>' + person.name.last + ' ' + person.name.first +
        '<td>' + person.group;
  });
}

function showGroups() {

  var groups = [];
  people.forEach(function(person) {
    if (groups.indexOf(person.group) == -1)
      groups.push(person.group);
  });

  var tbody = document.getElementById('groupsTBody');
  tbody.innerHTML = '';

  groups.forEach(function(group) {
    var count = 0;
    var age = 0;
    people.forEach(function(person) {
      if (person.group == group) {
        count += 1;
        age += Number(person.age);
      }
    });
    tbody.innerHTML += '<tr>' +
        '<td>Group ' + group +
        '<td>' + count +
        '<td>' + parseInt(age / count);
  });

}