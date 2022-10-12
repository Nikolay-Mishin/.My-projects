
$(()=>{

$('td').each(function() {
    let value = $(this).text();
            if(parseFloat(value)) {
                if(parseFloat(value)<0)    
                   $(this).css('color','red');
                
                else 
                   $(this).css('color','green');
 }
/* краткий вариант
 parseFloat(value) ? parseFloat(value)<0 ? $(this).css('color','red') : $(this).css('color','green') : ''; */
      });

});


  