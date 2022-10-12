
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

    document.querySelector('.allCount').textContent = students.length;
    document.querySelector('.fCount').textContent = women.length;
    document.querySelector('.mCount').textContent = students.length - women.length;
}


