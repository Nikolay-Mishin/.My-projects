
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;

    var fCount = 0;
    var mCount = 0;
    students.forEach(function(person) {
        if (person.gender === 'f') {
            fCount += 1;
        }
        else if (person.gender === 'm') {
            mCount += 1;
        }
    });

    document.querySelector('.allCount').textContent = students.length;
    document.querySelector('.fCount').textContent = fCount;
    document.querySelector('.mCount').textContent = mCount;
}
