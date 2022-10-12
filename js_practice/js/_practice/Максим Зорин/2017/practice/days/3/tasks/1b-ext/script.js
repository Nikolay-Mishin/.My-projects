
function test() {

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    // person's action
  }

  for (var i = 0, person; person = people[i]; i += 1) {
    // person's action
  }

  people.forEach(function(person) {
    // person's action
  });

  var res = '';
  document.getElementById('output').innerHTML = res;
  console.log(res);
}
