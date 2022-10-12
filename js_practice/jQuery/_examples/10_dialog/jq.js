$ (() => {
    let dialog, form,
        counter = 0,
        number = $ ("#number"),
        name = $ ("#name"),
        price = $ ("#price"),
        allFields = $ ([]).add (number).add (name).add (price);
 
    const addProduct = () => {
        counter++;
        allFields.removeClass ("ui-state-error");
        $ ("#products tbody").append (`<tr>
            <td>${number.val()}</td>
            <td>${name.val()}</td>
            <td>${price.val()}</td>
            <td><button class='delete' id='delete-${counter}'>x</button></td>
        </tr>`);
        $ ('.delete').each ((i, el) => {
            $ (`#delete-${i + 1}`).on ("click", e => {
                e.preventDefault();
                console.log (el.closest ('tr'));
                el.closest ('tr').remove();
                counter--;
            });
        });
        dialog.dialog ("close");
    };
 
    dialog = $ ("#dialog-form").dialog ({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Добавить товар": addProduct,
            "Отмена": () => dialog.dialog ("close")
        },
        close: () => {
            form [0].reset();
            allFields.removeClass ("ui-state-error");
        }
    });
    
    form = dialog.find ("form").on ("submit", e => {
        e.preventDefault();
        addProduct();
    });
    
    $ ("#create-product").button().on ("click", () => {
        number.val (counter + 1);
        dialog.dialog ("open");
    });
});
