/* ...................................... 

    	Практика 5 - Ajax
		
...................................... */
/*
const url = "http://mxn42.ru/avalon/data/planets.json";

// подписываемся на события
const xhr = new XMLHttpRequest ();
xhr.open ('GET', url, false); // тип обработки, url, сихронно/асинхронно

// функция готовности загрузки файла
xhr.addEventListener ('load', loaded);
/*
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            loaded (xhr.responseText);
        }
    }
};
*/
/*
xhr.send ();

function loaded (text) {
    const xhr = new XMLHttpRequest ();
    xhr.open ('GET', url, false);
    xhr.addEventListener ('load', function (text) {
        xhr.addEventListener ('load', function (text) {
            xhr.addEventListener ('load', function (text) {
                xhr.addEventListener ('load', function (text) {
                });
            });
        });
    });

    xhr.send ();
}
*/
// создание запроса без его выполнения
// проблема - cross origin запросы
/*
fetch (url)
    .then (response => response.json())
    .then (data => load (data));
  //.then (load)
*/
/*
fetch ('http://mxn42.ru/avalon/data/planets.json', {mode: 'cors'})
    .then (response => response.json())
    .then (load);

function load (data) {
    console.log (data);
}
*/

document.addEventListener ('DOMContentLoaded', main);

function main () { request(); }

function request () {
    for (let num = 0; num <= 10; num++)
        fetch (`https://swapi.co/api/planets/${num}`)
            .then (response => response.json())
            .then (load);
}

function load (planet) {
    console.log (planet.name, planet.population);
}