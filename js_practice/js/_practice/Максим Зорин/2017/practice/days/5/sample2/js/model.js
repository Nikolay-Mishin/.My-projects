
var genderRu = {
  'f': 'Ж',
  'm': 'М',
  '': ''
};
/*
REST API

GET    /api/v2/students/        список
GET    /api/v2/students/23421/  элемент
POST   /api/v2/students/        создать новый
PUT    /api/v2/students/23421/  изменить
DELETE /api/v2/students/23421/  удалить

GET    /api/v2/students/23421/books/        список книг студента

*/


function Model(data) {

  var people = data.map(function(item) {
    item.genderRu = genderRu[item.gender];
    return item;
  });
  this.originalPeople = people;
  this.people = people.slice();

  var groups = [];
  people.forEach(function(person) {
    if (!groups.includes(person.group))
      groups.push(person.group);
  });
  this.groups = groups.sort();

  this.filter = function(group) {
    if (group) {
      this.people = this.originalPeople.filter(function (person) {
        return person.group == group;
      });
    }
    else {
      this.people = this.originalPeople.slice();
    }
  }.bind(this);

  this.new = function(data) {
    var person = {};
    this.people.push(person);

  }
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
