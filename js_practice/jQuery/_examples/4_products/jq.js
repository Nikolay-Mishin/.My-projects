$ (() => {
    const main = content => {
        let data = content;

        const compare = (value1, value2, content) => {
            let subList = data.filter (el => el.price.toLocaleLowerCase() >= value1 && el.price.toLocaleLowerCase() <= value2);
            subList.forEach (el => content += `<tr><th>${el.name}</th><th>${el.price}</th></tr>`);
            $ ('tbody').html ('').append (content);
        };

        $ ("#slider-range").slider ({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: (event, ui) => {
                $ ("#amount").val ("$" + ui.values [0] + " - $" + ui.values [1]);
                compare (ui.values [0], ui.values [1]);
            }
        });
        let range = n => $ ("#slider-range").slider ("values", n);
        $ ("#amount").val ("$" + range (0) + " - $" + range (1));

        compare ($ ("#slider-range" ).slider ("values", 0), $ ("#slider-range" ).slider ("values", 1));
    };

    ajax ('../jq.json', content => main (content));
});
