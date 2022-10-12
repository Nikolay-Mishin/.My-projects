
function test() {

  var mCount = 0;
  var fCount = 0;

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];

    if (person.gender === 'f') {
      fCount += 1;
    }
    if (person.gender === 'm') {
      mCount += 1;
    }
  }

  people.forEach(function(person) {
    if (person.gender === 'f') {
      fCount += 1;
    }
    if (person.gender === 'm') {
      mCount += 1;
    }
  });


  console.log(mCount, fCount);
}