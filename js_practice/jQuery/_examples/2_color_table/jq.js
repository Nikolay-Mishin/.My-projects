$ (() => {
    $ ('tbody td').each ((i, el) => {
        /* if (parseFloat ($ (el).text()) && parseFloat ($ (el).text()) < 0) $ (el).css ('color', 'red');
        else if (parseFloat ($ (el).text())) $ (el).css ('color', 'green'); */
        parseFloat ($ (el).text()) ? parseFloat ($ (el).text()) < 0 ? $ (el).css ('color', 'red') : $ (el).css ('color', 'green') : '';
    });
});
