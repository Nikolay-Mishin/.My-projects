
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;
    showGroups(students);
}

function showGroups(students) {
    var groups = getGroups(students);
    var tbody = document.querySelector('#groupsTab table tbody');
    tbody.innerHTML = '';
    groups.forEach(function(group) {
        tbody.innerHTML += '<tr>' +
            '<td>Group ' + group +
            '<td>' + infoAboutGroup(students, group) +
        '</tr>';
    })
}

function infoAboutGroup(students, group) {
    // var studentsOfGroup = [];
    // for (var i = 0; i < students.length; i += 1) {
    //     var person = students[i];
    //     if (person.group === group) {
    //         studentsOfGroup.push(person);
    //     }
    // }
    var studentsOfGroup = students.filter(function(person) {
        return (person.group === group);
    });

    var mCount = 0;
    var fCount = 0;
    var menAgeSum = 0;
    var womenAgeSum = 0;
    var ageSum = 0;
    studentsOfGroup.forEach(function(person) {
        ageSum += person.age;
        if (person.gender == 'f') {
            fCount += 1;
            womenAgeSum += person.age;
        }
        if (person.gender == 'm') {
            mCount += 1;
            menAgeSum += person.age;
        }
    });
    var count = studentsOfGroup.length;
    var avgAge = (ageSum / count).toFixed(1);

    return '' +
        'количество студентов: ' + count + '<br>' +
        'число мужчин: ' + mCount + '<br>' +
        'число женщин: ' + fCount + '<br>' +
        'средний возраст: ' + avgAge + '<br>' +
        'средний возраст мужчин: ' + (menAgeSum / mCount).toFixed(1) + '<br>' +
        'средний возраст женщин: ' + (womenAgeSum / fCount).toFixed(1) + '<br>' +
        '';
}

function getGroups(students) {
    var groupNames = [];
    students.forEach(function(person) {
        if (groupNames.indexOf(person.group) === -1) {
            groupNames.push(person.group);
        }
    });
    groupNames.sort(function(a, b) {
        // if (a > b) return 1;
        // if (a < b) return -1;
        // if (a == b) return 0;
        return a - b;
    });
    return groupNames;
}
