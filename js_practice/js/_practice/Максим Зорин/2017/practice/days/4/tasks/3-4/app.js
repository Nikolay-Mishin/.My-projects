
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;

    var groupNames = getGroupNames(students);
    groupsCount(groupNames);
    avgSize(students, groupNames);
    groupStats(students, groupNames);
}

function getGroupNames(students) {
    var groupNames = [];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (groupNames.indexOf(person.group) === -1) {
            groupNames.push(person.group);
        }
    }
    groupNames.sort(function(a, b) {
        return a - b;
    });
    return groupNames;
}

function groupsCount(groupNames) {
    document.querySelector('.groupsCount').textContent = groupNames.length;
}

function avgSize(students, groupNames) {
    document.querySelector('.avgGroupSize').textContent = (students.length / groupNames.length).toFixed(1);
}

function groupStats(students, groupNames) {
    var ul = document.querySelector('.groups');
    ul.innerHTML = '';
    for (var gi = 0; gi < groupNames.length; gi += 1) {
        var group = groupNames[gi];
        var li = groupInfo(students, group);
        ul.appendChild(li);
    }
}

function groupStudents(students, group) {
    var groupStudents = [];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.group === group) {
            groupStudents.push(person);
        }
    }
    return groupStudents;
}

function groupInfo(students, group) {
//  список групп с указанием числа студентов в каждой группе, среднего возраста, числа мужчин и числа женщин
    var gStudents = groupStudents(students, group);
    var fCount = 0;
    var mCount = 0;
    var ageSum = 0;
    for (var i = 0; i < gStudents.length; i += 1) {
        var person = gStudents[i];
        ageSum += person.age;
        if (person.gender === 'f') fCount += 1;
        if (person.gender === 'm') mCount += 1;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <b>${group}</b>: 
    `;
        [group, gStudents.length, (ageSum / gStudents.length).toFixed(1), fCount, mCount].join(', ');
    return li;
}