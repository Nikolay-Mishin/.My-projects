
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;

    var women = [];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.gender === 'f') {
            women.push(person);
        }
    }

    var men = [];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.gender === 'm') {
            men.push(person);
        }
    }

    document.querySelector('.allCount').textContent = students.length;
    document.querySelector('.fCount').textContent = women.length;
    document.querySelector('.mCount').textContent = men.length;
}
