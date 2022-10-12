
$(document).ready(function() {
  $('html').removeClass('no-js');
  $('.menu-click a').on('click', function () {
    let el = $(this);
    el.parent().toggleClass('menu-active');
    el.parent().siblings('.menu-click.menu-active').removeClass('menu-active');
  }); 
  });

  $( function() {
    $( "#menu" ).menu();
  } );
