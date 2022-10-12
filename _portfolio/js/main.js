/* ...................................... 

    	BASE
		
...................................... */
//
$ (document).ready (function () {
	//pagescroll2id - плавная прокрутка по ссылкам внутри страницы
	var slide2id = $ ("nav a, a[href='#top'], a[rel='m_PageScroll2id'], a.PageScroll2id, #mouse_scroll");

	slide2id.on ('click', function () {
		console.log ('Плавная прокрутка');
		slide2id.mPageScroll2id ( {highlightSelector:"nav a"} );
	})

	// MixItUp - фильтрация работ в портфолио
	$ ('#portfolio-projects').mixItUp ();

	// FancyBox - galery
	$ (".fancybox").fancybox ({
		// Default - with fix from scroll to top
		helpers: { overlay: { locked: false } }
	});
	// End of FancyBox - galery

	// jquery.validate - jQuery Validate JS
	$ ("#contact-form").validate ({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},

		submitHandler: function (form) { ajaxFormSubmit (); }
	})

	// Функция AJAX запрса на сервер
	function ajaxFormSubmit (){
		var string = $ ("#contact-form").serialize (); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax ({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function (html){
				$ ("#contact-form").slideUp (800);
				$ ('#answer').html (html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
}); 

/* ...................................... 

    	FILTER
		
...................................... */

var click;

$ (document).ready (function () {
    var filter_btn = $ ('.filter-block__button');
    var class_active = 'filter-block__button--active';

	// Фильтр работ
	filter_btn.on ('click', function (e) {
        e.preventDefault ();
        // change_click (click = $ (this));
        $ (filter_btn).removeClass (class_active);
        $ (this).addClass (class_active);
    })

    /*
    function change_click (click) {
        var filter_active = $ ('.' + class_active);

        console.log ('Нажатие по элементу: ' + '\n' + click);
    
        // проверка существования класса
        if (click.hasClass (class_active)) {
            console.log ('Выбран активный фильтр: ' + '\n' + click);
        }
        else {
            console.log ('Выбран неактивный фильтр: ' + '\n' + click);
                
            filter_active.removeClass (class_active).on ('change', function () {
                console.log ('Удаление класса для: ' + '\n' + filter_active);
            });
    
            click.addClass (class_active).on ('change', function () {
                console.log ('Добавление класса для: ' + '\n' + click);
            });
        }
    }
    */
}); 

/* ...................................... 

    	NAVIGATION-ICON
		
...................................... */

(function () {
 
  "use strict";
 
  // var toggles = document.querySelectorAll (".cmn-toggle-switch");
 
  // for (var i = toggles.length - 1; i >= 0; i--) {
  //   var toggle = toggles [i];
  //   toggleHandler (toggle);
  // };
 
  // function toggleHandler (toggle) {
  //   toggle.addEventListener ( "click", function (e) {
  //     e.preventDefault ();
  //     (this.classList.contains ("active") === true) ? this.classList.remove ("active") : this.classList.add ("active");
  //   });
  // }

	// var toggle = $ ("#navigation__button");

	// toggle.on ("click", function (e){
	// 	e.preventDefault ();

	// 	if ( toggle.hasClass ("active")) {
	// 		toggle.removeClass ("active");
	// 	} else {
	// 		toggle.addClass ("active");
	// 	}
	// })
})();

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
