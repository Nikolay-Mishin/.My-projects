/*
Билет 3 - students
Фильтр по клику. Имеется таблица данных, включающих элементы нескольких классов (типов). 
Написать скрипт, который отображает над таблицей кнопки по числу типов: одна кнопка соответствует одному типу. 
При клике по кнопке таблица фильтруется: отображаются строки этого типа.
*/

$ (() => {
    const ajax = (url, func) => {
        const done = content => func (content);
        const fail = error => console.error (error);

        fetch (url).then (res => res.json()).then (done).catch (fail);
    };

    //ajax ('data/students.json', content => main (data));

    const main = data => {
        const types = Object.keys (data[0]);

        const construct = data => {
            $ ('thead').html ('').append (types.reduce ((content, el) => content += `<th>${el}</th>`, ''));
            $ ('tbody').html ('');
            data.forEach (o => {
                $ ('tbody').append (`<tr>${Object.keys (o).reduce ((content, el) => {
                    if (el === 'name') return content += `<td>${o [el].first} ${o [el].last}</td>`
                    return content += `<td>${o [el]}</td>`
                }, '')}</tr>`);
            });
        };
        construct (data);

        const filter = (attr, value) => {
            let subList = data.filter (el => String (el [attr]).toLocaleLowerCase() === value);
            construct (subList);
        };

        const buttons = attr => {
            $ ('div').html ('');
            const dataDic = {}, dataList = [];
            data.forEach (el => {
                if (attr === 'name') el [attr] = el [attr].first;
                if (!(el [attr] in dataList)) dataDic [el [attr]] = 0;
                dataDic [el [attr]]++;
            });
            Object.keys (dataDic).forEach (key => dataDic [key] > 0 ? dataList.push (key) : '');
            dataList.forEach (el => {
                $ ('div').append (`<button name="btn-${el}">${el}</button>`);
                $ (`[name=btn-${el}]`).on ('click', () => filter (attr, el));
            });
        };

        $ ('select').append ('<option name="op">Выберите тип данных</option>');
        types.forEach (el => $ ('select').append (`<option name="${el}">${el}</option>`));

        $ ('select').on ('click', () => {
            $ ('[name=op]').attr ('disabled', true);
        });

        $ ('select').on ('change', () => {
            buttons ($ ('option:selected').val());
        });
    };

    main (data);
});
