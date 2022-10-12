
function test() {
  people = people.sort(compareLastName);

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    var fi = person.name.last + ' ' + person.name.first;
    console.log(fi);
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