
(function(people) {

  document.addEventListener('DOMContentLoaded', start);

  function start() {
    studentsTab();
    editTab();

    route();
    window.addEventListener('hashchange', route);
  }

  // -----------------------------------
  // 1-tabs-route
  // -----------------------------------

  function route() {
    switch (location.hash.split('/')[1]) {
      case 'students':
        show('students');
        break;

      case 'groups':
        show('groups');
        break;

      case 'new':
        show('edit');
        break;

      case 'edit':
        show('edit');
        showPerson(location.hash.substr('#/edit/'.length));
        break;

      default:
        show('home');
        break;
    }
  }

  function show(id) {
    console.log('Tab: %s', id);

    var activeMenu = document.querySelector('.main-menu .active');
    if (activeMenu) activeMenu.classList.remove('active');
    var menuItem = document.querySelector('.main-menu .' + id);
    if (menuItem) menuItem.classList.add('active');

    var activeTab = document.querySelector('.tabs > .active');
    if (activeTab) activeTab.classList.remove('active');
    var tab = document.querySelector('.tabs > .' + id);
    if (tab) tab.classList.add('active');
  }

  // -----------------------------------
  // helpers
  // -----------------------------------

  function innerText(selector, text) {
      var element = document.querySelector(selector);
      if (element) element.innerText = text;
  }

  function value(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.value = value;
  }

  function selected(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.selected = value;
  }

  function checked(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.checked = value;
  }

  var GENDER = {'f': 'Ж', 'm': 'М', '': ''};

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
    students.forEach(function(person) {
      tbody.innerHTML += '<tr>' +
        '<td><a href="#/edit/' + person._id + '">' + person.name.last + '</a>' +
        '<td>' + person.name.first +
        '<td>' + person.group +
        '<td>' + person.age +
        '<td>' + GENDER[person.gender];
    });
  }

  // -----------------------------------
  // 7-students-edit
  // -----------------------------------

  function editTab() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var groupsSelect = document.querySelector('.tabs .edit select[name=group]');
    groupsSelect.innerHTML = '<option selected></option>';
    groups.forEach(function(groupId) {
      groupsSelect.innerHTML += '<option value="' + groupId + '">Group ' + groupId + '</option>'
    });

    var saveButton = document.querySelector('.tabs .edit button.save');
    if (saveButton) saveButton.onclick = saveStudent;

    var deleteButton = document.querySelector('.tabs .edit button.delete');
    if (deleteButton) deleteButton.onclick = deleteStudent;
  }

  function clearForm() {
    value('.tabs .edit [name=id]', '');
    value('.tabs .edit [name=name-last]', '');
    value('.tabs .edit [name=name-first]', '');
    value('.tabs .edit [name=age]', '');
    selected('.tabs .edit [name=group] option:first-child', true);
    checked('.tabs .edit [name=gender]:checked', false);
    var deleteButton = document.querySelector('.tabs .edit button.delete');
    if (deleteButton) deleteButton.classList.add('hidden');
  }

  function showPerson(id) {
    console.log('Edit: ' + id);
    var person = people.find(function(person) { return (person._id == id); });
    if (person) {
      value('.tabs .edit [name=id]',          person._id);
      value('.tabs .edit [name=name-last]',   person.name.last);
      value('.tabs .edit [name=name-first]',  person.name.first);
      value('.tabs .edit [name=age]',         person.age);
      selected('.tabs .edit [name=group] option[value="' + person.group + '"]', true);
      checked('.tabs .edit [name=gender][value=' + person.gender + ']', true);
      var deleteButton = document.querySelector('.tabs .edit button.delete');
      if (deleteButton) deleteButton.classList.remove('hidden');
    }
  }

  function getValue(selector) {
    var element = document.querySelector(selector);
    return (element)? element.value : '';
  }

  function saveStudent() {
    console.groupCollapsed('Save');
    var warning = document.querySelector('.tabs .edit .warning');
    warning.innerHTML = '';

    var data = {
      _id:     getValue('.tabs .edit [name=id]'),
      name: {
        last:   getValue('.tabs .edit [name=name-last]'),
        first:  getValue('.tabs .edit [name=name-first]')
      },
      age:    getValue('.tabs .edit [name=age]'),
      group:  getValue('.tabs .edit [name=group] option:checked'),
      gender: getValue('.tabs .edit [name=gender]:checked')
    };
    console.log('Data: ', data);

    if (data._id) {
      var person = people.find(function(person) { return (person._id == data._id); });
      if (!person) warning.innerHTML += '<li>Студент ' + data._id + ' не найден. </li>';
    }

    if (data.name.last == '')  warning.innerHTML += '<li>Недопустимая фамилия.</li>';
    if (data.name.first == '') warning.innerHTML += '<li>Недопустимое имя.</li>';
    if (!data.age)    warning.innerHTML += '<li>Недопустимый возраст.</li>';
    if (!data.group)  warning.innerHTML += '<li>Укажите группу.</li>';
    if (!data.gender) warning.innerHTML += '<li>Укажите пол.</li>';

    if (warning.innerHTML == '') {
      if (data._id) {
        var person = people.find(function(person) { return (person._id == data._id); });
        person.name   = data.name;
        person.age    = data.age;
        person.group  = data.group;
        person.gender = data.gender;
        console.log('Обновление данных студента: ', person);
      }
      else {
        data._id = generateId();
        people.push(data);
        console.log('Добавление нового студента', data);
      }

      showStudents();
      clearForm();
      location.href = '#/students';
    }
    else
      console.warn('Данные некорректны');

    console.groupEnd('Save');
  }

  function deleteStudent() {
    var id = document.querySelector('.tabs .edit [name=id]').value;
    var deletedPerson = people.find(function(person) { return person._id == id; });
    if (deletedPerson)
      people.splice(people.indexOf(deletedPerson), 1);
    showStudents();
    clearForm();
    location.href = '#/students';
  }

  function generateId() {
    return Math.random().toString(16).substr(-12) + Math.random().toString(16).substr(-12);
  }

})(people);
