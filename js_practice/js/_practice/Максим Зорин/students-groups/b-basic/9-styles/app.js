
window.onload = start;

function start() {
  homeTab();
  studentsTab();
  groupsTab();
  editTab();

  route();
  window.onhashchange = route;
}

// -----------------------------------
// 1-tabs-route
// -----------------------------------

function route() {
  var hash = location.hash;

  if (hash == '#/students') {
    show('students');
  }
  else if (hash == '#/groups') {
    show('groups');
  }
  else if (hash == '#/new') {
    show('edit');
    clearForm();
  }
  else if (hash.indexOf('#/edit/') != -1) {
    show('edit');
    clearForm();
    showPerson(hash.substr('#/edit/'.length));
  }
  else {
    show('home');
  }
}

function show(id) {
  console.log('Tab: ' + id);

  var activeMenu = document.querySelector('.main-menu .active');
  if (activeMenu) {
    activeMenu.classList.remove('active');
  }
  var menuItem = document.querySelector('.main-menu .' + id);
  if (menuItem) {
    menuItem.classList.add('active');
  }

  var activeTab = document.querySelector('.tabs > .active');
  if (activeTab) {
    activeTab.classList.remove('active');
  }
  var tab = document.querySelector('.tabs > .' + id);
  if (tab) {
    tab.classList.add('active');
  }
}

// -----------------------------------
// 2-home
// -----------------------------------

function homeTab() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();

  var mCount = 0;
  var fCount = 0;
  var sumAge = 0;
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (person.gender == 'm') {
      mCount += 1;
    }
    if (person.gender == 'f') {
      fCount += 1;
    }
    sumAge += Number(person.age);
  }

  document.querySelector('.value.groupsCount').innerText = groups.length;
  document.querySelector('.value.peopleCount').innerText = people.length;
  document.querySelector('.value.mCount').innerText      = mCount;
  document.querySelector('.value.fCount').innerText      = fCount;
  document.querySelector('.value.avgCount').innerText    = parseInt(people.length / groups.length);
  document.querySelector('.value.avgAge').innerText      = parseInt(sumAge / people.length);
  document.querySelector('.value.avgMen').innerText      = parseInt(mCount / groups.length);
  document.querySelector('.value.avgWomen').innerText    = parseInt(fCount / groups.length);
}

// -----------------------------------
// 3-students
// -----------------------------------

function studentsTab() {
  prepareSorts();
  prepareFilters();
  showStudents();
}

function showStudents() {
  var students = filterPeople(people);
  students = sortPeople(students);

  var tbody = document.querySelector('.tabs .students > table > tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < students.length; i += 1) {
    var person = students[i];
    var tr = '<tr>';
    tr += '<td><a href="#/edit/' + person._id + '">' + person.name.last + '</a>';
    tr += '<td>' + person.name.first;
    tr += '<td>' + person.group;
    tr += '<td>' + person.age;
    tr += '<td>' + (person.gender == 'f'? 'Ж' : 'М');
    tbody.innerHTML += tr;
  }
}

// -----------------------------------
// 4-groups
// -----------------------------------

function groupsTab() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();

  var tbody = document.querySelector('.tabs .groups > table > tbody');
  tbody.innerHTML = '';
  for (var i = 0; i < groups.length; i += 1) {
    var groupId = groups[i];

    var studentsOfGroup = [];
    for (var j = 0; j < people.length; j += 1) {
      var person = people[j];
      if (person.group == groupId) {
        studentsOfGroup.push(person);
      }
    }

    var tr = '<tr>';
    tr += '<td>Group ' + groupId;
    tr += '<td>' + stat(studentsOfGroup);
    tbody.innerHTML += tr;
  }
}

function stat(studentsOfGroup) {
  var mCount = 0;
  var fCount = 0;
  var sumAge = 0;
  var sumMAge = 0;
  var sumFAge = 0;

  for (var i = 0; i < studentsOfGroup.length; i += 1) {
    var person = studentsOfGroup[i];
    sumAge += Number(person.age);
    if (person.gender == 'm') {
      mCount += 1;
      sumMAge += Number(person.age);
    }
    if (person.gender == 'f') {
      fCount += 1;
      sumFAge += Number(person.age);
    }
  }

  var stat = '';
  stat += 'число мужчин: ' + mCount + '<br>';
  stat += 'число женщин: ' + fCount + '<br>';
  stat += 'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>';
  stat += 'средний возраст мужчин: ' + parseInt(sumMAge / mCount) + '<br>';
  stat += 'средний возраст женщин: ' + parseInt(sumFAge / fCount) + '<br>';

  return stat;
}

// -----------------------------------
// 5-students-sort
// -----------------------------------

var sortMethod = null;
var reverse = false;

function prepareSorts() {
  var thead = document.querySelector('.tabs .students > table > thead');
  thead.innerHTML = '';
  var tr = '<tr>';
  tr += '<th onclick="sortBy(compareLastName, this)">Фамилия';
  tr += '<th onclick="sortBy(compareFirstName, this)">Имя';
  tr += '<th onclick="sortBy(compareGroup, this)">Группа';
  tr += '<th onclick="sortBy(compareAge, this)">Возраст';
  tr += '<th onclick="sortBy(compareGender, this)">Пол';
  thead.innerHTML += tr;
}

function sortBy(method, header) {
  var activeHeader = document.querySelector('.tabs .students > table > thead .active');
  if (activeHeader && activeHeader != header) {
    activeHeader.classList.remove('active', 'reverse');
  }
  if (header) {
    if (header.classList.contains('active')) {
      reverse = !reverse;
      header.classList.toggle('reverse');
    }
    else {
      sortMethod = method;
      reverse = false;
      header.classList.add('active');
    }
  }

  showStudents();
}

function sortPeople(people) {
  var sortedList = people.slice();
  if (sortMethod) {
    sortedList = sortedList.sort(sortMethod);
    if (reverse) {
      sortedList = sortedList.reverse();
    }
  }
  return sortedList;
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
  return String(a.gender).localeCompare(b.gender) || compareLastName(a, b);
}

// -----------------------------------
// 6-students-filter
// -----------------------------------

var filterGroupId = '';

function prepareFilters() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();
  var ul = document.querySelector('.tabs .students .group-filter');
  ul.innerHTML = '<li class="active" onclick="filterBy()"><a>All groups</a>';
  for (var i = 0; i < groups.length; i += 1) {
    var groupId = groups[i];
    ul.innerHTML += '<li class="group-' + groupId + '" onclick="filterBy(' + groupId + ')"><a>Group ' + groupId + '</a>';
  }
}

function filterBy(groupId) {
  var li = document.querySelector('.tabs .students .group-filter .active');
  if (li) {
    li.classList.remove('active');
  }
  var header = document.querySelector('.tabs .students .group-filter .group-' + groupId);
  if (header) {
    header.classList.add('active');
  }
  else {
    document.querySelector('.tabs .students .group-filter li:first-child').classList.add('active');
  }
  filterGroupId = groupId || '';

  showStudents();
}

function filterPeople(people) {
  var filteredList = people.slice();
  if (filterGroupId) {
    filteredList = [];
    for (var i = 0; i < people.length; i += 1) {
      var person = people[i];
      if (person.group == filterGroupId) {
        filteredList.push(person);
      }
    }
  }
  return filteredList;
}

// -----------------------------------
// 7-students-edit
// -----------------------------------

function editTab() {
  var groups = [];
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (groups.indexOf(person.group) == -1) {
      groups.push(person.group);
    }
  }
  groups = groups.sort();
  var groupsSelect = document.querySelector('.tabs .edit select[name=group]');
  groupsSelect.innerHTML = '<option selected></option>';
  for (var i = 0; i < groups.length; i += 1) {
    var groupId = groups[i];
    groupsSelect.innerHTML += '<option value="' + groupId + '">Group ' + groupId + '</option>'
  }

  var saveButton = document.querySelector('.tabs .edit button.save');
  if (saveButton) {
    saveButton.onclick = saveStudent;
  }
  var deleteButton = document.querySelector('.tabs .edit button.delete');
  if (deleteButton) {
    deleteButton.onclick = deleteStudent;
  }
  clearForm();
}

function clearForm() {
  document.querySelector('.tabs .edit [name=id]').value         = '';
  document.querySelector('.tabs .edit [name=name-last]').value  = '';
  document.querySelector('.tabs .edit [name=name-first]').value = '';
  document.querySelector('.tabs .edit [name=age]').value        = '';
  document.querySelector('.tabs .edit [name=group] option:first-child').selected = true;
  var checkedGender = document.querySelector('.tabs .edit [name=gender]:checked');
  if (checkedGender) {
    checkedGender.checked = false;
  }
  var deleteButton = document.querySelector('.tabs .edit button.delete');
  if (deleteButton) {
    deleteButton.classList.add('hidden');
  }
}

function showPerson(id) {
  console.log('Edit: ' + id);
  var found = false;
  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (person._id == id) {
      found = true;
      break;
    }
  }

  if (found) {
    document.querySelector('.tabs .edit [name=id]').value         = person._id;
    document.querySelector('.tabs .edit [name=name-last]').value  = person.name.last;
    document.querySelector('.tabs .edit [name=name-first]').value = person.name.first;
    document.querySelector('.tabs .edit [name=age]').value        = person.age;
    document.querySelector('.tabs .edit [name=group] option[value="' + person.group + '"]').selected = true;
    document.querySelector('.tabs .edit [name=gender][value=' + person.gender + ']').checked = true;

    var deleteButton = document.querySelector('button.delete');
    if (deleteButton) {
      deleteButton.classList.remove('hidden');
    }
  }
}

function saveStudent() {
  console.groupCollapsed('Save');

  var warning = document.querySelector('.tabs .edit .warning');

  console.log('Очистка');
  warning.innerHTML = '';

  console.groupCollapsed('Сбор данных');
  var id = document.querySelector('.tabs .edit [name=id]').value;
  var last = document.querySelector('.tabs .edit [name=name-last]').value;
  var first = document.querySelector('.tabs .edit [name=name-first]').value;
  var age = Number(document.querySelector('.tabs .edit [name=age]').value);
  var group = Number(document.querySelector('.tabs .edit [name=group] option:checked').value);
  var gender = '';
  var genderElement = document.querySelector('.tabs .edit [name=gender]:checked');
  if (genderElement) {
    gender = genderElement.value;
  }
  console.log('id: ', id);
  console.log('last: ', last);
  console.log('first: ', first);
  console.log('age: ', age);
  console.log('group: ', group);
  console.log('gender: ', gender);
  console.groupEnd('Сбор данных');

  console.log('Проверка (валидация)');
  var valid = true;

  // проверка ID
  if (id) {
    var found = false;
    for (var i = 0; i < people.length; i += 1) {
      var person = people[i];
      if (person._id == id) {
        found = true;
        break;
      }
    }
    if (!found) {
      valid = false;
      warning.innerHTML += '<li>Студент ' + id + ' не найден. </li>';
    }
  }

  // проверка Last name
  if (last == '') {
    valid = false;
    warning.innerHTML += '<li>Недопустимая фамилия.</li>';
  }

  // проверка First name
  if (first == '') {
    valid = false;
    warning.innerHTML += '<li>Недопустимое имя.</li>';
  }

  // проверка Age
  if (!age) {
    valid = false;
    warning.innerHTML += '<li>Недопустимый возраст.</li>';
  }

  // проверка Group
  if (!group) {
    valid = false;
    warning.innerHTML += '<li>Укажите группу.</li>';
  }

  // проверка Gender
  if (!gender) {
    valid = false;
    warning.innerHTML += '<li>Укажите пол.</li>';
  }

  if (valid) {

    var person;
    if (id) {
      for (var i = 0; i < people.length; i += 1) {
        var person = people[i];
        if (person._id == id) {
          break;
        }
      }
      console.log('Обновление данных студента: ', person);
    }
    else {
      person = {
        _id: generateId()
      };
      people.push(person);
      console.log('Добавление нового студента', person);
    }

    person.name = {
      last: last,
      first: first
    };
    person.age = age;
    person.group = group;
    person.gender = gender;

    showStudents();
    clearForm();
    location.href = '#/students';
  }
  else {
    console.warn('Данные некорректны');
  }

  console.groupEnd('Save');
}

function deleteStudent() {
  var id = document.querySelector('.tabs .edit [name=id]').value;
  console.log('Delete:', id);
  if (id) {
    for (var i = 0; i < people.length; i += 1) {
      var person = people[i];

      if (person._id == id) {
        people.splice(i, 1);
        break;
      }
    }
  }
  showStudents();
  clearForm();
  location.href = '#/students';
}

function generateId() {
  var str = '';
  for (var i = 0; i < 24; i += 1) {
    str += Math.floor(Math.random() * 16).toString(16);
  }
  return str;
}
