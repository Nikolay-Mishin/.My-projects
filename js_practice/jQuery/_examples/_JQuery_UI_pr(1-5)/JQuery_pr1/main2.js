// JavaScript Document

document.addEventListener('DOMContentLoaded', main);  //обработчик сработает сразу после загрузки документа

function main() {  // 
  const planets = planets.data;
  const contaier = $('#div').appendTo('body');
 for (const planet of planets.data);
}

function list (data) {
	
let data = document.querySelector('#data'); 
 data.textContent = '';  
 for (let dates of data) { 
 
 
document.querySelector('#planets').innerHTML = 
      "name": ,
      "diameter (Earth=1)": ,
      "diameter (km)": ,
      "mass (Earth=1)": ,
      "mean distance from Sun (AU)": ,
 }
};

// обьявл переменную for вывод клик

$(()=> {
  const container = $('#div').appendTo('body');
 for (const planet of planets.data){

     .append($('h3').text(planet.name))
	 .append($('div').html('
	 Diameter: <b>${planet['diameter (km)']}</b><br>
	 Mass: <b>${planet['mass (Earth=1)']}</b><br>
     From Sun: <b>${planet['mean distance from Sun (AU)']}</b><br> 
	 '))
	}
						   container.accordion({
						   collapsible:true,
						   active:Json.parse(localStorage.getItem(accordion.active))
						   
						   }); //вызываем обраб и ивент сод элемент по кот кликнули и возвращает ео после перезагрузки
	                           // ui передает новый заголовок старый заголовок кот был выделен и номера панелей
							container.on('accordionactive', function(event,ui){
								console.log(ui);
							const activeState = $accordion.accordion( "option", "active");
							localStorage.setItem('accordion-active', Json.stringify(activeState));
						});
	
	$accordion
	.on(accordionbeforeactive, function(event, ui))
			 

	 });