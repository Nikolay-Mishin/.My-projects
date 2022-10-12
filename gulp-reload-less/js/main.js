$ (document).ready (function () {
    console.log ('Hello from jQuery!');

    $ ('#btn-open-form').click (function (e) {
        e.preventDefault ();
        console.log ('Click Reg!');
        
        watch_class ();
    });

    $ (".phone-mask").mask ("+7 (999) 999-99-99");
});

function watch_class () {
    // проверка существования класса hidden у элемента
    if ($ ('.booking-form-wrapper').hasClass ('hidden')) {
        console.log ('У элемента есть класс hidden');
        $ ('#btn-open-form').hide ();
        $ ('.booking-form-wrapper').slideDown (1000).removeClass ('hidden').addClass ('open');
        // $ ('.booking-form-wrapper').slideDown (1000);
    } else {
        console.log ('Элемент не содержит класс hidden');
        $ ('.booking-form-wrapper').slideUp (1000).addClass ('hidden').removeClass ('open');
        $ ('#btn-open-form').show ();
    }
}