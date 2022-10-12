
window.onload = start;

function start() {
  studentsTab();
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
// 3-students
// -----------------------------------

function studentsTab() {
  showStudents();
}

function showStudents() {
  var students = people;

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
  clearForm();
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
