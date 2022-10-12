
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;
    showHome(students)
}

function showHome(students) {
    var mCount = 0;
    var fCount = 0;
    // for (var i = 0; i < students.length; i += 1) {
    //     var person = students[i];
    //     if (person.gender == 'f') fCount += 1;
    //     if (person.gender == 'm') mCount += 1;
    // }
    students.forEach(function(person) {
        if (person.gender == 'f') fCount += 1;
        if (person.gender == 'm') mCount += 1;
    });

    var groupNames = [];
    // for (var i = 0; i < students.length; i += 1) {
    //     var person = students[i];
    //     if (groupNames.indexOf(person.group) === -1) {
    //         groupNames.push(person.group);
    //     }
    // }
    students.forEach(function(person) {
        if (groupNames.indexOf(person.group) === -1) {
            groupNames.push(person.group);
        }
    });
    var groupCount = groupNames.length;

    document.getElementById('OBSCHEE_KOLVO').innerText = students.length;
    document.getElementById('mCount').innerText = mCount;
    document.getElementById('fCount').innerText = fCount;
    document.getElementById('groupCount').innerText = groupCount;
}
