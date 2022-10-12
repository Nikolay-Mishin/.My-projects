
function test() {

  // v1
  people = people.sort(function(a, b) {
    if (a.name.last < b.name.last) {
      return -1;
    }
    else if (a.name.last == b.name.last) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      else if (a.name.first == b.name.first) {
        return 0;
      }
      else {
        return 1;
      }
    }
    else {
      return 1;
    }
  });

  // v2
  people = people.sort(function(a, b) {
    if (a.name.last == b.name.last) {
      return a.name.first > b.name.first;
    }
    else {
      return a.name.last > b.name.last;
    }
  });

  // v3
  people = people.sort(function(a, b) {
    if (a.name.last != b.name.last) {
      return (a.name.last).localeCompare(b.name.last);
    }
    else {
      return (a.name.first).localeCompare(b.name.first);
    }
  });

  // v3
  people = people.sort(function(a, b) {
    return (a.name.last).localeCompare(b.name.last) ||
           (a.name.first).localeCompare(b.name.first);
  });

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    var fi = person.name.last + ' ' + person.name.first;
    console.log(fi);
  }

}
