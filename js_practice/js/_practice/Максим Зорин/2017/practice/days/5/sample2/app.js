
document.addEventListener('DOMContentLoaded', start);

function start() {
  route();
  window.addEventListener('hashchange', route);

  load('data/people.jsonp.js', dataReady);
}

function dataReady(data) {
  console.log('Data loaded: ' + data.length);
  var model = new Model(data);
  updateTabs(model);
}

function updateTabs(model) {
  studentsTab(model);
  groupsTab(model);
  homeTab(model);
  editTab(model);
}

function homeTab(model) {
  var people = model.people,
      groups = model.groups;
  var mCount = 0,
      fCount = 0,
      sumAge = 0;
  people.forEach(function(person) {
    if (person.gender == 'm') mCount += 1;
    if (person.gender == 'f') fCount += 1;
    sumAge += Number(person.age);
  });
  var values = [
    ['.value.groupsCount', groups.length],
    ['.value.peopleCount', people.length],
    ['.value.mCount', mCount],
    ['.value.fCount', fCount],
    ['.value.avgCount', parseInt(people.length / groups.length)],
    ['.value.avgAge', parseInt(sumAge / people.length)],
    ['.value.avgMen', parseInt(mCount / groups.length)],
    ['.value.avgWomen', parseInt(fCount / groups.length)]
  ];
  values.forEach(function(line) {
    document.querySelector(line[0]).innerText = line[1];
  });
}

function studentsTab(model) {
  showStudents(model.people);

  var thead = document.querySelector('.tabs .students > table > thead');
  empty(thead);
  var tr1 = document.createElement('tr');
  thead.appendChild(tr1);

  var headers = [
    ['Фамилия', 'compareLastName'],
    ['Имя',     'compareFirstName'],
    ['Группа',  'compareGroup'],
    ['Возраст', 'compareAge'],
    ['Пол',     'compareGender']
  ];
  headers.forEach(function(header) {
    var th = document.createElement('th');
    th.innerText = header[0];
    th.setAttribute('data-sort', header[1]);
    th.addEventListener('click', function() {
      var sortMethod = this.getAttribute('data-sort') || Compare.compareLastName;
      var sortedHeader = document.querySelector('.tabs .students > table > thead .sorted');
      var people;
      if (this == sortedHeader) {
        people = model.people.reverse();
        this.classList.toggle('reverse');
      } else {
        if (sortedHeader) sortedHeader.classList.remove('sorted', 'reverse');
        this.classList.add('sorted');
        people = model.people.sort(Compare[sortMethod]);
      }
      showStudents(people);
    });
    tr1.appendChild(th);
  });

  var ul = document.querySelector('.tabs .students > .group-filter');
  empty(ul);

  var filters = [
      ['Все', '']
  ];
  model.groups.forEach(function(group) {
    filters.push(['Group ' + group, group]);
  });
  filters.forEach(function(filter) {
    var li = document.createElement('li');
    li.innerText = filter[0];
    li.className = 'filter-' + filter[1];
    li.addEventListener('click', function() {
      model.filter(filter[1]);
      var activeFilter = document.querySelector('.tabs .students > .group-filter > .active');
      if (activeFilter) activeFilter.classList.remove('active');
      document.querySelector('.tabs .students > .group-filter > .filter-' + filter[1]).classList.add('active');
      var sortedHeader = document.querySelector('.tabs .students > table > thead .sorted');
      if (sortedHeader) sortedHeader.classList.remove('sorted', 'reverse');
      showStudents(model.people);
    });
    ul.appendChild(li);
  });
  ul.firstElementChild.classList.add('active');
}

function showStudents(people) {
  var tbody = document.querySelector('.tabs .students > table > tbody');
  empty(tbody);
  people.forEach(function(person) {
    tbody.appendChild(tr([
      person.name.last,
      person.name.first,
      person.group,
      person.age,
      person.genderRu
    ]));
  });
}

function groupsTab(model) {
  var tbody = document.querySelector('.tabs .groups > table > tbody');
  empty(tbody);
  model.groups.forEach(function(group) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var td1 = document.createElement('td');
    td1.innerText = 'Group ' + group;
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = stat(model, group);
    tr.appendChild(td2);
  });
}

function stat(model, group) {
  var studentsOfGroup = model.people.filter(function(person) {
    return (person.group == group);
  });

  var mCount = 0,
      fCount = 0,
      sumAge = 0,
      sumMAge = 0,
      sumFAge = 0;

  studentsOfGroup.forEach(function(person) {
    sumAge += Number(person.age);
    if (person.gender == 'm') {
      mCount += 1;
      sumMAge += Number(person.age);
    }
    if (person.gender == 'f') {
      fCount += 1;
      sumFAge += Number(person.age);
    }
  });

  var stat = '';
  stat += 'число мужчин: ' + mCount + '<br>';
  stat += 'число женщин: ' + fCount + '<br>';
  stat += 'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>';
  stat += 'средний возраст мужчин: ' + parseInt(sumMAge / mCount) + '<br>';
  stat += 'средний возраст женщин: ' + parseInt(sumFAge / fCount) + '<br>';

  return stat;
}

function editTab(model) {
  var select = document.querySelector('.tabs .edit select[name=group]');
  empty(select);
  model.groups.forEach(function(group) {
    var option = document.createElement('option');
    option.setAttribute('value', group);
    option.innerText = 'Group ' + group;
    select.appendChild(option);
  });
  var button = document.querySelector('.tabs .edit .button.save');
  button.addEventListener('click', function(event) {
    console.log('SAVE');
    var formData = collect();
    if (validate(formData)) {
      // new Student
    }
    event.preventDefault();
  })
}

function collect() {
  var field = [
    ['first',  '.tabs .edit input[name=name.first]'],
    ['last',   '.tabs .edit input[name=name.last]'],
    ['age',    '.tabs .edit input[name=age]'],
    ['group',  '.tabs .edit select[name=group] option:selected'],
    ['gender', '.tabs .edit input[name=gender]:checked']
  ];
  var object = {};
  field.forEach(function(field) {
    object[field[0]] = document.querySelector(field[1]).value;
  });
  return object;
}

function validate() {
  return true;
}