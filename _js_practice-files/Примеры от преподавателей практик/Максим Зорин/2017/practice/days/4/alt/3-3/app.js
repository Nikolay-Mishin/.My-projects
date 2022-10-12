
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;

    var ageSum = 0;
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        ageSum += person.age;
    }
    var avg = ageSum / students.length;

    var youngest = students[0];
    var eldest = students[0];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.age < youngest.age) {
            youngest = person;
        }
        if (person.age > eldest.age) {
            eldest = person;
        }
    }

    students.forEach(function(person) {
        ageSum += person.age;
        if (person.age < youngest.age) youngest = person;
        if (person.age > eldest.age)   eldest = person;
    });

    document.querySelector('.ageAvg').textContent = avg.toFixed(1);
    document.querySelector('.youngest').textContent = youngest.age + ' ' + youngest.name.last;
    document.querySelector('.eldest').textContent =     eldest.age + ' ' + eldest.name.last;

}
