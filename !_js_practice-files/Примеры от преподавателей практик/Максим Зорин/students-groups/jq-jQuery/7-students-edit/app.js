
(function(people) {

  $(function() {
    studentsTab();
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
  // 3-students
  // -----------------------------------

  function studentsTab() {
    showStudents();
  }

  function showStudents() {
    var students = people;

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
