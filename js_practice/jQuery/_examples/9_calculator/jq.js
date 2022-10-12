$ (() => {
    const value = (heigth, width) => {
        $ ('#amount').val ((heigth / 30).toFixed() * (width / 20).toFixed() + ' шт');
    };

    $ ('#slider-heigth').slider ({
        range: 'min',
        value: 150,
        min: 0,
        max: 300,
        slide: (event, ui) => {
            $ ('#amount-heigth').val (ui.value + ' см');
            value (heigth(), width());
        }
    });
    let heigth = n => $ ('#slider-heigth').slider ('value');

    $ ('#slider-width').slider ({
        range: 'min',
        value: 100,
        min: 0,
        max: 500,
        slide: (event, ui) => {
            $ ('#amount-width').val (ui.value + ' см');
            value (heigth(), width());
        }
    });
    let width = n => $ ('#slider-width').slider ('value');
    
    value (heigth(), width());
    $ ('#amount-heigth').val (heigth() + ' см');
    $ ('#amount-width').val (width() + ' см');
});
