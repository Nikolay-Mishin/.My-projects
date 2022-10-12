
$(()=>{
        $( ".accordion" ).accordion({
            collapsible: true,
            active: false,
            animate: 1000
        });
});


/*
$(() => {
    const $accordion = $('<div>').appendTo('body');
    for (const planet of planets.data) {
      $accordion
        .append($('<h3>').text(planet.name))
        .append($('<div>').html(`
          Diameter: <b>${planet['diameter (km)']}</b><br>
          Mass: <b>${planet['mass (Earth=1)']}</b><br>
          From Sun: <b>${planet['mean distance from Sun (AU)']}</b><br>
        `))
    }
    $accordion.accordion({
      collapsible: true,
      active: JSON.parse(localStorage.getItem('accordion-active'))
    });
    $accordion
      .on('accordionactivate', function( event, ui ) {
        const activeState = $accordion.accordion('option', 'active');
        localStorage.setItem('accordion-active', JSON.stringify(activeState));
      })
      .on('accordionbeforeactivate', function( event, ui ) {
        ui.newHeader.css({'background-color': 'gold'});
        ui.oldHeader.css({'background-color': ''});
      });

});
*/