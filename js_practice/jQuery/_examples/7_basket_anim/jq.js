$ (() => {
    let q = $ ('#q');
    let s = $ ('#s');

    $ ('.btn').on ('click', function () {
        q.text (parseInt (q.text()) + 1);
        s.text (parseFloat (s.text()) + parseFloat ($ (this).data ('price')));
        $ ($ ('#sum').children ('td')[1]).text (q.text());
        $ ($ ('#sum').children ('td')[2]).text (s.text() + ' руб.');
        let td = $ ($ (this).closest ('tr').find ('td')[0]).text();
        $ ('#output')
            .append (`<tr><td>${td}</td><td>${1}</td><td>${$ (this).data ('price')} руб.</td></tr>`)
            .append ($ ('#sum'));
    });
});
