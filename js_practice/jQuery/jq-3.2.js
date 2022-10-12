$ (() => {
    const output = (id, data) => {
        let keys = Object.keys (data[0]);
        data.forEach (element => {
            id
                .append ($ ('<h3>').text (`${element.name}`)
                    .attr ('title', keys.reduce ((content, key) => content += `${key}: ${element [key]} \n`, '')))
                    .append ('<span>');
        });
        id.find ('span').tooltip();
    }
    let content = $ ('#content');
    const data = elements.elements;
    output (content, data);
});
