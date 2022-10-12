
document.addEventListener("DOMContentLoaded", function() {
  menu('overview');
});

var previousMenu = null,
    previousTab = null;

function menu(id) {
  if (previousMenu) previousMenu.className = '';
  var menuItem = document.getElementById(id + 'Menu');
  menuItem.className = 'active';
  previousMenu = menuItem;

  if (previousTab) previousTab.style.display = 'none';
  var tab = document.getElementById(id + 'Tab');
  tab.style.display = 'block';
  previousTab = tab;
}
