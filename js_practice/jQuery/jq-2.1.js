$ (() => {
    // добавить кнопку и инпут на экран, который будет открывать нужный элемент
    // button: click считывает значение инпут и открывает вкладку в аккордионе
    $ ('.accordion').accordion ({active: 1});
    $ ('body')
        .prepend ($ ('<button>').text ('Открыть'))
            .on ('click', () => {
                if ($ ('input').val() > 0) $ ('.accordion').accordion ('option', 'active', (Number ($ ('input').val()) - 1));
            })
        .prepend ($ ('<input>')).on ('input', () => {
            if ($ ('input').val() > 0) $ ('.accordion').accordion ('option', 'active', (Number ($ ('input').val()) - 1));
        });

    const data = planets.data;
    let keys = Object.keys (data[0]);
    console.log (keys);
    data.forEach (planet => {
        console.log (planet);
        $ ('.planets')
            .append ($ ('<h3>').text (`${planet.name}`))
            .append ($ ('<div>').html (keys.reduce ((content, key) => content +=`${key}: ${planet [key]} <br>`)));
    });

    $ ('.planets').accordion ({
        collapsible: true,
        active: JSON.parse (localStorage.getItem ('accordion-active')),
        activate: function (event, ui) {}
    });
    
    $ ('.planets').on ('accordionactivate', (event, ui) => {
        console.log (ui);
        console.log (ui.newHeader[0]);
        console.log (ui.newPanel[0]);
        const activeState = $ (ui.newHeader[0]).accordion ("option", "active");
        localStorage.setItem ('accordion-active', JSON.stringify (activeState));
    });
});
