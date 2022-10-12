
var genderRu = {
  'f': 'Ж',
  'm': 'М',
  '': ''
};

function newModel(data) {

  var people = data.map(function(item) {
    item.genderRu = genderRu[item.gender];
    return item;
  });

  var groups = [];
  people.forEach(function(person) {
    if (!groups.includes(person.group))
      groups.push(person.group);
  });
  groups = groups.sort();

  return {
    people: people,
    groups: groups
  };
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
  return String(a.genderRu).localeCompare(b.genderRu) || compareLastName(a, b);
}
