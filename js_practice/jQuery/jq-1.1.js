$ (() => {
    /*
    Задание 2 — доступ к элементам документа

    после загрузки страницы вывести с помощью jQuery в абзац с id="out" следующую информацию, каждый пункт в новой строке:

    а) только текст из абзаца с id="first";
    б) html из абзаца с id="first";
    в) текст из абзаца с class="c1";
    г) содержимое элемента b из абзаца с id="first";
    д) значение атрибута align из абзаца с атрибутом data-test;
    е) число элементов p в документе.
    */

    const $out = $ ('out');

    const firstText = $ ('#first').text();
    $out.text (firstText);
    console.log (firstText);

    const firstHtml = $ ('#first').html();
    $out.text ($out.text() + '\n' + firstHtml);
    console.log (firstHtml);

    console.log ($ ('.c1').text());

    console.log ($ ('#first > b').text());
    console.log ($ ('#first').find ('b').text());

    const $dataTest = $ ('[data-test]');
    // ul.getAttribute ('align');
    // attr ('атрибут', 'запись значения')
    console.log ($dataTest.attr ('align'));

    const $p = $ ('p');
    console.log ($p.length);

    /*
    Задание 3 — работа с наборами jQuery

    Для кода HTML из задания 2 выполнить следующие действия:

    а) вывести содержимое второго по порядку элемента p в документе;
    б) сделать шрифт всех элементов p красным с помощью jQuery;
    в) подчеркнуть абзацы, у которых есть id, с помощью jQuery.
    */

    const el2 = $p[1];
    console.log ($ (el2).text());

    el2.foo = 'OK';
    // получение свойства DOM элемента
    console.log ($ (el2).prop ('foo'));

    $p.css ('color', 'red');
    $p.css ('color', '#FF0000');
    $p.css ('color', 'rgb (255, 0, 0)');
    $p.css ('color', 'rgba (255, 0, 0, 0.5)');
    //$p.css ('color', 'hsl (255, 0, 0, 0.5)');
    $p.css ({'color': 'red'});

    $ ('[id]').css ('text-decoration', 'underline');

    /*
    Задание 4 — события

    Написать четыре функции, которые выводят в консоль соответственно содержимое первого, второго, третьего и четвертого элемента p из задания 2.

    Первая функция должна запускаться после загрузки документа.
    Вторая функция должна запускаться при клике по элементу b в абзаце с d="first".
    Третья функция должна запускаться при клике на любой абзац с классом c2.
    Четвертая функция должна запускаться при клике на последний абзац документа.
    */

    const f1 = () => console.log ('HANDLE1', $ ($p[1]).text());
    const f2 = () => console.log ('HANDLE2', $ ($p[1]).text());
    const f3 = () => console.log ('HANDLE3', $ ($p[2]).text());

    $ (f1);
    $ ('#first > b').on ('click', f2);
    $ ('.c2').on ('click', f3);
    $ ($p[2]).on ('click', () => console.log ('HANDLE4', '|||'));

    /*
    Задание 5 — элементы управления

    По нажатию на кнопку OK под формой вывести введенные пользователем данные
    */

    $ (() => {
        $ ('input[type=submit]').on ('click', function (e) {
            e.preventDefault();
            // input[name=fio]
            console.log ($ ('form > [name=fio]').val());
            // input[name=gender]
            console.log ($ ('form > [name=gender]').val());
            // select[name=class]
            console.log ($ ('form > [name=class]').val());
            // textarea[name=description]
            console.log ($ ('form > [name=description]').val());
        });
    });
});

/*
jQuery - $

$ ( ... )
    '<li>' - создание элемента
    '.select' - получение элемента
*/
