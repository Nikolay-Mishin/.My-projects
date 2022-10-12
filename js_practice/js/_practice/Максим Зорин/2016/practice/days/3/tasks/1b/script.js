
function test() {

  var groupList = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
//  if (!(person.group in groupList)) {
    if (groupList.indexOf(person.group) == -1) {
      groupList.push(person.group);
    }
  }
  console.log(groupList);

  var res = groupList.length;
  document.getElementById('output').innerHTML = res;
}
