
(function(people) {

  document.addEventListener('DOMContentLoaded', start);

  function start() {
    homeTab();
    studentsTab();
    groupsTab();
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
  // 2-home
  // -----------------------------------

  function homeTab() {
    var groups = [],
        mCount = 0,
        fCount = 0,
        sumAge = 0;

    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
      if (person.gender == 'm') mCount += 1;
      if (person.gender == 'f') fCount += 1;
      sumAge += person.age;
    });
    groups = groups.sort();

    innerText('.value.groupsCount', groups.length);
    innerText('.value.peopleCount', people.length);
    innerText('.value.mCount',      mCount);
    innerText('.value.fCount',      fCount);
    innerText('.value.avgCount',    parseInt(people.length / groups.length));
    innerText('.value.avgAge',      parseInt(sumAge / people.length));
    innerText('.value.avgMen',      parseInt(mCount / groups.length));
    innerText('.value.avgWomen',    parseInt(fCount / groups.length));
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
    var students = sortPeople(filterPeople(people));

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
  // 4-groups
  // -----------------------------------

  function groupsTab() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var tbody = document.querySelector('.tabs .groups > table > tbody');
    tbody.innerHTML = '';
    groups.forEach(function(groupId) {
      var studentsOfGroup = people.filter(function(person) {
        return (person.group == groupId);
      });
      tbody.innerHTML += '<tr>' +
        '<td>Group ' + groupId +
        '<td>' + stat(studentsOfGroup);
    });
  }

  function stat(studentsOfGroup) {
    var men    = studentsOfGroup.filter(function(person) { return person.gender == 'm'; }),
        women  = studentsOfGroup.filter(function(person) { return person.gender == 'f'; }),
        sumAge  = ageOf(studentsOfGroup),
        sumMAge = ageOf(men),
        sumFAge = ageOf(women);

    return ('' +
      'число мужчин: ' + men.length + '<br>' +
      'число женщин: ' + women.length + '<br>' +
      'средний возраст: ' + parseInt(sumAge / studentsOfGroup.length) + '<br>' +
      'средний возраст мужчин: ' + parseInt(sumMAge / men.length) + '<br>' +
      'средний возраст женщин: ' + parseInt(sumFAge / women.length) + '<br>');
  }

  function ageOf(group) {
    return group.reduce(function(a, person) {
      return a + Number(person.age);
    }, 0);
  }

  // -----------------------------------
  // 5-students-sort
  // -----------------------------------

  var sortMethod = null;
  var reverse = false;

  function prepareSorts() {
    var thead = document.querySelector('.tabs .students > table > thead');
    thead.innerHTML = '';
    thead.appendChild(sortedHeader('Фамилия', compareLastName));
    thead.appendChild(sortedHeader('Имя',     compareFirstName));
    thead.appendChild(sortedHeader('Группа',  compareGroup));
    thead.appendChild(sortedHeader('Возраст', compareAge));
    thead.appendChild(sortedHeader('Пол',     compareGender));
  }

  function sortedHeader(title, sortMethod) {
    var th  = document.createElement('th');
    th.innerText = title;
    th.addEventListener('click', function() {
      sortBy(sortMethod, th);
    });
    return th;
  }

  function sortBy(method, header) {
    var activeHeader = document.querySelector('.tabs .students > table > thead .active');
    if (activeHeader && activeHeader != header)
      activeHeader.classList.remove('active', 'reverse');
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
      if (reverse)
        sortedList = sortedList.reverse();
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
    return String(GENDER[a.gender]).localeCompare(GENDER[b.gender]) || compareLastName(a, b);
  }

  // -----------------------------------
  // 6-students-filter
  // -----------------------------------

  var filterGroupId = '';

  function prepareFilters() {
    var groups = [];
    people.forEach(function(person) {
      if (!groups.includes(person.group))
        groups.push(person.group);
    });
    groups = groups.sort();

    var ul = document.querySelector('.tabs .students .group-filter');
    ul.innerHTML = '';
    ul.appendChild(groupFilter('', 'All gropus', 'active'));
    groups.forEach(function(groupId) {
      ul.appendChild(groupFilter(groupId, 'Group ' + groupId, 'group-' + groupId));
    });
  }

  function groupFilter(groupId, title, cssClass) {
    var li = document.createElement('li');
    li.className = cssClass;
    li.appendChild(document.createElement('a')).innerText = title;
    li.addEventListener('click', function() {
      filterBy(groupId);
    });
    return li;
  }

  function filterBy(groupId) {
    var li = document.querySelector('.tabs .students .group-filter .active');
    if (li) li.classList.remove('active');
    var header = document.querySelector('.tabs .students .group-filter .group-' + groupId);
    if (header)
      header.classList.add('active');
    else
      document.querySelector('.tabs .students .group-filter li:first-child').classList.add('active');
    filterGroupId = groupId || '';

    showStudents();
  }

  function filterPeople(people) {
    return filterGroupId?
        people.filter(function(person) { return (person.group == filterGroupId); }) :
        people.slice();
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
