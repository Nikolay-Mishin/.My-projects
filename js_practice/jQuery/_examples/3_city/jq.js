$ (() => {
    let data = [
        {
            city: 'c1',
            adress: 'adress 1'
        },
        {
            city: 'c2',
            adress: 'adress 2'
        },
        {
            city: 'c2',
            adress: 'adress 3'
        }
    ];

    const construct = content => {
        data.forEach (el => content += `<tr><th>${el.city}</th><th>${el.adress}</th></tr>`);
        $ ('tbody').html ('').append (content);
    };
    construct();

    const cityList = () => {
        const citysDic = {}, citys = [];
        data.forEach (el => {
            if (!(el.city in citys)) citysDic [el.city] = 0;
            citysDic [el.city]++;
        });
        Object.keys (citysDic).forEach (key => citysDic [key] > 0 ? citys.push (key) : '');
        return citys;
    };

    const compare = (value, content) => {
        let subList = data.filter (el => el.city.toLocaleLowerCase() === value);
        subList.forEach (el => content += `<tr><th>${el.city}</th><th>${el.adress}</th></tr>`);
        $ ('tbody').html ('').append (content);
    };

    cityList().forEach (el => {
        $ ('div').append (`<button name="btn-${el}">${el}</button>`);
        $ (`[name=btn-${el}]`).on ('click', () => compare (`${el}`));
    });

    $ ('select').append ('<option name="op">Выберите город</option>');
    cityList().forEach (el => $ ('select').append (`<option name="${el}">${el}</option>`));

    $ ('select').on ('change', () => {
        compare ($ ('option:selected').val());
        if ($ ('option:selected').attr ('name') === 'op') construct();
    });
});
