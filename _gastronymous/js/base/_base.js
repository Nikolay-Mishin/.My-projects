/* ...................................... 

    	BASE
		
...................................... */

$ (document).ready (function () {
    $ ('.hamburger').on ('click', function () {
        $ ('.menu').toggleClass ('open');
    });

    // Вызов слайдера owl-carousel
    $ ("#slides-owl").owlCarousel ({
        singleItem: true,
        navigation: true,
        theme: "top-slider-theme",
        navigationText : ["",""],
        slideSpeed: 600
    });

	//pagescroll2id - плавная прокрутка по ссылкам внутри страницы
	var slide2id = $ ("nav a, a[href='#top'], a[rel='m_PageScroll2id'], a.PageScroll2id, #mouse_scroll");

	slide2id.on ('click', function () {
		console.log ('Плавная прокрутка');
		slide2id.mPageScroll2id ( {highlightSelector:"nav a"} );
	})

	// FancyBox - gallery
	$ (".fancybox").fancybox ({
		// Default - with fix from scroll to top
		helpers: { overlay: { locked: false } }
	});

    // FancyBox - Video gallery
	$ (".fancybox-video").fancybox ({
		// Default - with fix from scroll to top
		helpers: { overlay: { locked: false } }
	});

    $ ("#submit-vote").on ('click', function () {
        ajaxFormSubmit ();
    });

	// Функция AJAX запроса на сервер
	function ajaxFormSubmit () {
		var string = $ ("#vote-form").serialize (); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax ({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function (html) {
				$ ("#vote-form").slideUp (800);
				$ ('#answer').html (html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
    
    // Slider buttons Construct
    $ ('#slides-owl .owl-prev').html ('<i class="fa fa-chevron-left"></i>');
    $ ('#slides-owl .owl-next').html ('<i class="fa fa-chevron-right"></i>');
});
