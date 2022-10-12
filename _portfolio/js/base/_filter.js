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
