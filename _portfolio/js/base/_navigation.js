/* ...................................... 

    	NAVIGATION
		
...................................... */

$ (document).ready (function () {
	// Опеделяем переменные
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	// События по клику на иконку
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle();
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		}
		navBlock.removeClass(navBlockOpen);
	})

	// Функция для анимации иконки
	function navButtonToggle(){
		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	}

	/* 
	var navToggleButton = $ ('.navigation__toggle');
	var navToggleIcon = $ ('.navigation__toggle .fa');
	var navBlock = $ ('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $ ('.navigation__list a');
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times'; 

	// Мобильная навигация
	navToggleButton.on ('click', function (e) {
		console.log ('Нажатие по элементу: ' + '\n' + navToggleButton);
		e.preventDefault ();
		navBlock.toggleClass (navBlockOpen);
		console.log ('Открытие мобильного меню');

		if ( navToggleIcon.hasClass (iconNav) ) {
			navToggleIcon.removeClass (iconNav);
			navToggleIcon.addClass (iconClose);
			console.log ('Смена состояния кнопки: Закрытие');
		} else {
			navToggleIcon.removeClass (iconClose);
			navToggleIcon.addClass (iconNav);
			console.log ('Смена состояния кнопки: Открытие');
		}
	})

	navLink.on ('click', function () {
		console.log ('Нажатие по элементу: ' + '\n' + navLink);
		if ( navBlock.hasClass (navBlockOpen) ) {
			console.log ('Состояние мобильного меню: Открыто');
			if ( navToggleIcon.hasClass (iconNav) ){
				navToggleIcon.removeClass (iconNav);
				navToggleIcon.addClass (iconClose);
				console.log ('Смена состояния кнопки: Закрытие');
			} else {
				navToggleIcon.removeClass (iconClose);
				navToggleIcon.addClass (iconNav);
				console.log ('Смена состояния кнопки: Открытие');
			}
		}

		navBlock.removeClass (navBlockOpen);
		console.log ('Закрытие мобильного меню');
	}) 
	*/
}); 
