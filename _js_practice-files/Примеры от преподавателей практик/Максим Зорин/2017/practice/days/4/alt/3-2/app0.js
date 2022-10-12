
document.addEventListener('DOMContentLoaded', function() {

    console.log('Hello, world!');

    console.log(people.length);
    console.log(people[5]);

    var span = document.querySelector('.allCount');
// span.innerHTML = people.length;
// span.innerText = people.length;
    span.textContent = people.length;

});
