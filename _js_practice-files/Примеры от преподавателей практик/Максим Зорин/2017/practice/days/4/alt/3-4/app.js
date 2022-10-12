
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;
    var groupNames = getGroupNames(students);
    // commonStat(students, groupNames);
    perGroupStat(students, groupNames);
}

function perGroupStat(students, groupNames) {
    var ul = document.querySelector('.groups');
    ul.innerHTML = '';
    for (var i = 0; i < groupNames.length; i += 1) {
        var groupName = groupNames[i];
        var li = getStat(students, groupName);
        ul.appendChild(li);
    }
}

function getStudentsInGroup(students, groupName) {
    var group = [];
    for (var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (person.group === groupName) {
            group.push(person);
        }
    }
    return group;
}

function getStat(students, groupName) {
    var studentsInGroup = getStudentsInGroup(students, groupName);
    var li = document.createElement('li');
    li.innerHTML = groupName + ' [count = ' + studentsInGroup.length + '] | ';
    return li;
}

function getGroupNames(students) {
    var names = [];
    for(var i = 0; i < students.length; i += 1) {
        var person = students[i];
        if (names.indexOf(person.group) === -1) {
            names.push(person.group);
        }
    }
    names.sort(function(a, b) {
        return a - b;
    });
    return names;
}

function commonStat(students, groupNames) {
    var groupCount = groupNames.length;
    document.querySelector('.groupCount').textContent =
        groupCount;
    document.querySelector('.groupSizeAvg').textContent =
        (students.length / groupCount).toFixed(2);
}

