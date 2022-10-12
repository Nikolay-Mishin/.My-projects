$ (() => {
    const output = (id, data) => {
        let keys = Object.keys (data[0]);

        data.forEach (element => {
            id
                .append ($ ('<h3>').text (`${element.name}`)
                    .attr ('title', keys.reduce ((content, key) => content += `${key}: ${element [key]} \n`, '')))
                    .append ('<span>');
        });

        // id.find ('span').tooltip();

        $ (document).tooltip ({
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function (position, feedback) {
                    $ (this).css (position);
                    $ ('<span>')
                        .addClass ("arrow")
                        .addClass (feedback.vertical)
                        .addClass (feedback.horizontal)
                        .appendTo (this);
                }
            }
            });
    };

    ajax ('../data/elements.json', content => output ($ ('#content'), content.elements));
});
