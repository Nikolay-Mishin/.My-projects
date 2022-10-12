// JS

//document.addEventListener ('DOMContentLoaded', main);

function main () {
    const ul = document.createElement ('ul');

    const li1 = document.createElement ('li');
    li1.textContent = 'Апельсин';
    const li2 = document.createElement ('li');
    li2.textContent = 'Яблоко';
    const li3 = document.createElement ('li');
    li3.textContent = 'Груша';

    ul.appendChild (li1);
    ul.appendChild (li2);
    ul.appendChild (li3);

    const body = document.getElementsByTagName ('body') [0];
    body.appendChild (ul);
}

// jQuery

$ (j_2);

function j_1 () {
    const $ul = $ ('<ul>');

    const $li1 = $ ('<li>');
    $li1.text ('Апельсин');
    const $li2 = $ ('<li>');
    $li2.text ('Яблоко');
    const $li3 = $ ('<li>');
    $li3.text ('Груша');

    $ul.append ($li1);
    $ul.append ($li2);
    $ul.append ($li3);

    $ ('body').append ($ul);
}

// Цепочечные вызовы

function j_2 () {
    $ ('<ul>')
        .append ($ ('<li>').text ('Апельсин'))
        .append ($ ('<li>').text ('Яблоко'))
        .append ($ ('<li>').text ('Груша'))
        .appendTo ($ ('body'));
}

// Методы вызова jQuery

function j_3 () {
    //const jQuery = function () {};
    //const $ = jQuery;
    jQuery ('<li>');                // document.createElement ('li')
    jQuery ('<li>Яблоко</li>');
    // const li = document.createElement ('li')
    // li.textContent = 'Яблоко'
    jQuery ('<table><tr><td><a href="a" onclick="void()">Ссылка</a></td></tr></table>');
    // const d = document.createElement ('div')
    // d.outerHTML = '<table><tr><td><a href="a" onclick="void()">Ссылка</a></td></tr></table>'
}

// Поиск отдельных ИЛИ множество элементов

function j_4 () {
    // единичные элемменты

    document.getElementById ('idE1');
    document.querySelector ('#idE1');
    const el = document.getElementById ('idE1');
    el.style.color = 'Red';

    jQuery ('#idE1');
    jQuery ('input[name=password]');
    jQuery ('#idE1').css ('color', 'Red');

    // множество элементов

    document.getElementByClassName ('active');
    document.querySelectorAll ('.active');
    for (const el of document.querySelectorAll ('.active'))
        el.style.color = 'Red';

    jQuery ('.active').css ('color', 'Red');
    jQuery ('.active').css ({
        'color': 'Red',
        'backgroundColor': 'Blue'
    });

    // чтение и запись

    $ ('#apple').text ('Антоновка'); // запись
    $ ('#apple').text (); // чтение

    // обработчики событий

    const handler = function () {};
    document.addEventListener ('DOMContentLoaded', handler);
    document.removeEventListener ('DOMContentLoaded', handler);

    $ (document).on ('DOMContentLoaded', handler);
    $ (document).off ('DOMContentLoaded', handler);

    $ (handler);

    $ (document).on ('click', handler);
    $ (document).click (handler);
}

// Принципы Программирования
/*
https://www.stijit.com/web-tips/dry-kiss-solid-yagni

DRY | DIE | KISS | SOLID | YAGNI

иерархичность и системность кода

* DRY – расшифровывается как Don’t Repeat Youself – не повторяйся, также известен как DIE – Duplication Is Evil – дублирование это зло. Этот принцип заключается в том, что нужно избегать повторений одного и того же кода. Лучше использовать универсальные свойства и функции.

* KISS – Keep It Simple, Stupid – не усложняй! Смысл этого принципа программирования заключается в том, что стоит делать максимально простую и понятную архитектуру, применять шаблоны проектирования и не изобретать велосипед.

* Принцип SOLID в упрощенном варианте означает, что когда при написании кода используется несколько принципов вместе, то это значительно облегчает дальнейшую поддержку и развитие программы. Полностью акроним расшифровывается так:

- Single responsibility principle – принцип единственной обязанности (на каждый класс должна быть возложена одна-единственная обязанность);
- Open/closed principle – принцип открытости/закрытости (программные сущности должны быть закрыты для изменения но открыты для расширения);
- Liskov substitution principle – принцип подстановки Барбары Лисков
(функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа, не зная об этом. Подклассы не могут замещать поведения базовых классов. Подтипы должны дополнять базовые типы);
- Interface segregation principle – принцип разделения интерфейса
(много специализированных интерфейсов лучше, чем один универсальный);
- Dependency inversion principle – принцип инверсии зависимостей
(зависимости внутри системы строятся на основе абстракций. Модули верхнего уровня не зависят от модулей нижнего уровня. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций);

* Термин YAGNI значит You Ain’t Gonna Need It – вам это не понадобится!     Его суть в том, чтобы реализовать только поставленные задачи и отказаться от избыточного функционала.
*/


