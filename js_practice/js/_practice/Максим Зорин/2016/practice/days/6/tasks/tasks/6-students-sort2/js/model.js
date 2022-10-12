
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

var Compare = {

  compareLastName: function(a, b) {
    return (a.name.last).localeCompare(b.name.last) || (a.name.first).localeCompare(b.name.first);
  },

  compareFirstName: function(a, b) {
    return (a.name.first).localeCompare(b.name.first) || (a.name.last).localeCompare(b.name.last);
  },

  compareAge: function(a, b) {
    return (Number(a.age) - Number(b.age)) || Compare.compareLastName(a, b);
  },

  compareGroup: function(a, b) {
    return String(a.group).localeCompare(b.group) || Compare.compareLastName(a, b);
  },

  compareGender: function(a, b) {
    return String(a.genderRu).localeCompare(b.genderRu) || Compare.compareLastName(a, b);
  }
};
