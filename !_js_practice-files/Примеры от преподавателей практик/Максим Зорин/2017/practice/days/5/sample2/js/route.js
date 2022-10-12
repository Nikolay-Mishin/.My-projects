
function route() {
  var hash = location.hash;

  if (hash.startsWith('#/students/edit'))
    show('edit');
  else if (hash == '#/students')
    show('students');
  else if (hash == '#/groups')
    show('groups');
  else
    show('home');
}

function show(id) {
  console.log('Tab: ' + id);

  var activeMenu = document.querySelector('.main-menu .active');
  if (activeMenu) activeMenu.classList.remove('active');
  var menuItem = document.querySelector('.main-menu .' + id);
  if (menuItem) menuItem.classList.add('active');

  var activeTab = document.querySelector('.tabs .active');
  if (activeTab) activeTab.classList.remove('active');
  document.querySelector('.tabs .' + id).classList.add('active');
}