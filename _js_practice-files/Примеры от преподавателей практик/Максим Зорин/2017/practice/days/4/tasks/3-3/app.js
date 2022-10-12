
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;

    var sum = students[0].age;
    var youngest = students[0];
    var eldest = students[0];
    for (var i = 1; i < students.length; i += 1) {
        var person = students[i];
        sum += person.age;
        if (person.age < youngest.age) {
            youngest = person;
        }
        if (person.age > eldest.age) {
            eldest = person;
        }
    }

    document.querySelector('.avgAge').textContent = (sum / students.length).toFixed(1);
    document.querySelector('.youngest').textContent = youngest.age + ' ' + youngest.name.last;
    document.querySelector('.eldest').textContent = eldest.age + ' ' + eldest.name.last;
}
