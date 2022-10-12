
document.addEventListener('DOMContentLoaded', main);

function main() {
  request();
}

function request() {
  for (let num = 1; num <= 10; num += 1)
    fetch(`https://swapi.co/api/planets/${num}/`)
      .then(response => response.json())
      .then(load);
}

function load(planet) {
  console.log(planet.name, planet.population);
}
