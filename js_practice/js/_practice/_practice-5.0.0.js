/* ...................................... 

    	Практика 5
		
...................................... */

console.log (planets.data);

main ();

function main () {
    document.getElementById ('planet').textContent = planets.data.length;

    table_simple ();
    table_flex ();
}

function table_simple () {
    let planetsElem = document.querySelector ('table > tbody');
    planetsElem.innerHTML = '';

    for (let planet of planets.data) {
        planetsElem.innerHTML += `<tr><td>${ planet.name } <td><span>${ planet['mean distance from Sun (AU)'] }</span>`;
    }
}

function table_flex () {
    let tbody = document.querySelector ('.tbody');
    tbody.innerHTML = '';

    let i = 0;

    for (let planet of planets.data) {
        i++;

        tbody.innerHTML += `<div class="tr" id="tr-${i}">`;

        let tr = document.getElementById ('tr-' + `${i}`);

        tr.innerHTML += `<div class="td">${ planet.name }`;
        tr.innerHTML += `<div class="td"><span>${ planet['mean distance from Sun (AU)'] }</span>`;
    }
}