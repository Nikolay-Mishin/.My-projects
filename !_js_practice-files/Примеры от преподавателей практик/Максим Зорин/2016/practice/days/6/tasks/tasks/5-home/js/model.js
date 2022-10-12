
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
