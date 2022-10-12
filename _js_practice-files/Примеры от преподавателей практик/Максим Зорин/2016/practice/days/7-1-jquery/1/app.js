$(start);

function start() {
  studentList();
  youngestTop10();
}

function studentList() {
  var top10 = people.sort(function(a, b) {
    return (a.age - b.age) ||
        a.name.last.localeCompare(b.name.last) ||
        a.name.first.localeCompare(b.name.first);
  });
  var tbody = $('.youngest.top10.students > tbody');
  top10.forEach(function() {

  });
}

function studentList() {
  var tbody = $('#students');
  // ...
  people.forEach(function(person) {
    $('<tr>')
      .append($('<td>').text(person.name.last))
      .append($('<td>').text(person.name.first))
      .append($('<td>').text(person.gender))
      // ...
      .appendTo(tbody);
  });
}
