
function test() {

  var groupList = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groupList.indexOf(person.group) == -1) {
      groupList.push(person.group);
    }
  }

  var res = parseInt(people.length / groupList.length);
  document.getElementById('output').innerHTML = res;
}
