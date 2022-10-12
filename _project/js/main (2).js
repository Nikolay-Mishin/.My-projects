var open;

$ ('.btn-modal').click (function (e) {
  e.preventDefault ();
  console.log ('Click Reg!');
  
  modal_class (open = this);
});

function modal_class (open) {
  console.log (open);
  $ (open).addClass ('clicked');
  // проверка существования элемента
  if ($ (open).hasClass ('clicked')) {
    console.log ('Анимировать' + '\n' + open);
    $ (open).modal ( {
      fadeDuration: 1000,
      fadeDelay: 0.50
    });
  }
  $ (open).removeClass ('clicked');
}