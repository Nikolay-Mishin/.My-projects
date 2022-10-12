
(function(people) {

  $(function() {
    homeTab();
    studentsTab();
    groupsTab();
    editTab();

    route();
    $(window).on('hashchange', route);
  });

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

    $('.main-menu .active').removeClass('active');
    $('.main-menu .' + id).addClass('active');

    $('.tabs > .active').removeClass('active');
    $('.tabs > .' + id).addClass('active');
  }

  // -----------------------------------
  // helpers
  // -----------------------------------

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

    $('.value.groupsCount').text(groups.length);
    $('.value.peopleCount').text(people.length);
    $('.value.mCount'  ).text(mCount);
    $('.value.fCount'  ).text(fCount);
    $('.value.avgCount').text(parseInt(people.length / groups.length));
    $('.value.avgAge'  ).text(parseInt(sumAge / people.length));
    $('.value.avgMen'  ).text(parseInt(mCount / groups.length));
    $('.value.avgWomen').text(parseInt(fCount / groups.length));
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

    var tbody = $('.tabs .students > table > tbody');
    tbody.empty();
    students.forEach(function(person) {
      $('<tr>')
        .appendTo(tbody)
        .append('<td><a href="#/edit/' + person._id + '">' + person.name.last + '</a>')
        .append('<td>' + person.name.first)
        .append('<td>' + person.group)
        .append('<td>' + person.age)
        .append('<td>' + GENDER[person.gender]);
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

    var tbody = $('.tabs .groups > table > tbody');
    tbody.empty();
    groups.forEach(function(groupId) {
      var studentsOfGroup = people.filter(function(person) {
        return (person.group == groupId);
      });
      $('<tr>')
        .appendTo(tbody)
        .append('<td>Group ' + groupId)
        .append('<td>' + stat(studentsOfGroup));
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
    var thead = $('.tabs .students > table > thead');
    thead.empty();
    $('<th>').text('Фамилия').click(function() { sortBy(compareLastName, this) }).appendTo(thead);
    $('<th>').text('Имя'    ).click(function() { sortBy(compareFirstName, this) }).appendTo(thead);
    $('<th>').text('Группа' ).click(function() { sortBy(compareGroup, this) }).appendTo(thead);
    $('<th>').text('Возраст').click(function() { sortBy(compareAge, this) }).appendTo(thead);
    $('<th>').text('Пол'    ).click(function() { sortBy(compareGender, this) }).appendTo(thead);
  }

  function sortBy(method, header) {
    if ($(header).hasClass('active')) {
      reverse = !reverse;
      $(header).toggleClass('reverse');
    }
    else {
      $('.tabs .students > table > thead .active').removeClass('active reverse');
      if (method) {
        sortMethod = method;
        reverse = false;
        $(header).addClass('active');
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

    var ul = $('.tabs .students .group-filter');
    ul.empty();
    ul.append(groupFilter('', 'All gropus', 'active'));
    groups.forEach(function(groupId) {
      ul.append(groupFilter(groupId, 'Group ' + groupId, 'group-' + groupId));
    });
  }

  function groupFilter(groupId, title, cssClass) {
    return $('<li>').addClass(cssClass).append($('<a>').text(title)).click(function() { filterBy(groupId); });
  }

  function filterBy(groupId) {
    var groupFilter = $('.tabs .students .group-filter');
    groupFilter.find('.active').removeClass('active');
    if (groupId)
      groupFilter.find('.group-' + groupId).addClass('active');
    else
      groupFilter.find('li:first-child').addClass('active');
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

    var select = $('.tabs .edit select[name=group]');
    select.append('<option selected>');
    groups.forEach(function(groupId) {
      select.append('<option value="' + groupId + '">Group ' + groupId + '</option>');
    });

    $('.tabs .edit button.save').click(saveStudent);
    $('.tabs .edit button.delete').click(deleteStudent);
    clearForm();
  }

  function clearForm() {
    $('.tabs .edit [name=id]').val('');
    $('.tabs .edit [name=name-last]').val('');
    $('.tabs .edit [name=name-first]').val('');
    $('.tabs .edit [name=age]').val('');
    $('.tabs .edit [name=group] option:first-child').prop('selected', true);
    $('.tabs .edit [name=gender]:checked').prop('checked', false);
    $('.tabs .edit button.delete').hide();
  }

  function showPerson(id) {
    console.log('Edit: ' + id);
    var person = people.find(function(person) { return (person._id == id); });
    if (person) {
      $('.tabs .edit [name=id]'        ).val(person._id);
      $('.tabs .edit [name=name-last]' ).val(person.name.last);
      $('.tabs .edit [name=name-first]').val(person.name.first);
      $('.tabs .edit [name=age]'       ).val(person.age);
      $('.tabs .edit [name=group] option[value="' + person.group + '"]').prop('selected', true);
      $('.tabs .edit [name=gender][value=' + person.gender + ']').prop('checked', true);
      $('.tabs .edit button.delete').show();
    }
  }

  function saveStudent() {
    console.groupCollapsed('Save');
    var warning = $('.tabs .edit .warning');
    warning.empty();

    var data = {
      _id:     $('.tabs .edit [name=id]').val(),
      name: {
        last:  $('.tabs .edit [name=name-last]').val(),
        first: $('.tabs .edit [name=name-first]').val()
      },
      age:     $('.tabs .edit [name=age]').val(),
      group:   $('.tabs .edit [name=group] option:checked').val(),
      gender:  $('.tabs .edit [name=gender]:checked').val()
    };
    console.log('Data: ', data);

    if (data._id) {
      var person = people.find(function(person) { return (person._id == data._id); });
      if (!person) warning.append('<li>Студент ' + data._id + ' не найден. </li>');
    }

    if (data.name.last == '')  warning.append('<li>Недопустимая фамилия.</li>');
    if (data.name.first == '') warning.append('<li>Недопустимое имя.</li>');
    if (!data.age)    warning.append('<li>Недопустимый возраст.</li>');
    if (!data.group)  warning.append('<li>Укажите группу.</li>');
    if (!data.gender) warning.append('<li>Укажите пол.</li>');

    if (warning.is(':empty')) {
      if (data._id) {
        var person = people.find(function(person) { return (person._id == data._id); });
        $.extend(person, data);
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
    var id = $('.tabs .edit [name=id]').val();
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
