
document.addEventListener('DOMContentLoaded', main);

function main() {
    // Входные данные
    var students = people;

    // Бизнес логика
    var fCount = 0;
    var mCount = 0;
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.gender === 'f') {
            fCount += 1;
        }
        if (person.gender === 'm') {
            mCount += 1;
        }
    }

    // Вывод
    document.querySelector('.allCount').textContent = people.length;
    document.querySelector('.fCount').textContent = fCount;
    document.querySelector('.mCount').textContent = mCount;
}
