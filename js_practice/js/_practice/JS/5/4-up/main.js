/*
\\feanor\Public2\ПП_Веб-разработка\Семестр 1\Программирование клиентской части веб-приложений (JS)\Практика\Примеры от преподавателей практик
*/

document.addEventListener ('DOMContentLoaded', main);

function main () {
    let students = people;

    initNav (students);
    statDraw (students);
    studentsDraw (students);
    groupsDraw (students);

    showGroupFilters (students);
}

function initNav () {
    window.addEventListener ('hashchange', nav);
    nav();

    function nav () {
        let page = location.hash.substr (2);
        if (!['stat', 'groups', 'students'].includes (page))
        page = 'stat';
        document.querySelector ('.tab.active').classList.remove ('active');
        document.querySelector (`.tab.${page}`).classList.add ('active');
    }
}

function statDraw (students) {
    document.getElementById ('count').textContent = students.length;
    let groups = groupsOf (students);
    document.getElementById ('groupCount').textContent = groups.length;
    document.getElementById ('avgGroup').textContent =
        (people.length / groups.length).toFixed (1);
}

function studentsDraw (students) {
    const tbody = document.querySelector ('table.students > tbody');
    tbody.innerHTML = '';

    for (let person of students)
        // tbody.innerHTML +=
        //   `<tr><td>${person.name.last}<td>${person.name.first}<td>${person.group}<td>${person.age}<td>${person.gender}`;
        tbody.innerHTML += '<tr>' +
        '<td>' + person.name.last +
        '<td>' + person.name.first +
        '<td>' + person.group +
        '<td>' + person.age +
        '<td>' + mzDic[person.gender];
}

function MZH0 (gender) {
if (gender === 'f')
    return 'Ж';
else
    return 'M';
}

function MZH1 (gender) {
    switch (gender) {
        case 'f': return 'Ж';
        case 'm': return 'М';
        default: return '';
    }
}

// тернарный оператор
function MZH2 (gender) {
    return (gender === 'f')? 'Ж' : 'M';
}

const mzDic = {
    'f': 'Ж',
    'm': 'М'
};

function groupsDraw (students) {
    function groupStat (groupName) {
        let groupStudents = students.filter (person => person.group === groupName);
        return `Студентов: ${groupStudents.length}`;
    }

    const groups = groupsOf (students);
    const groupsBody = document.querySelector ('table.groups > tbody');
    groupsBody.innerHTML = '';

    for (let group of groups)
        groupsBody.innerHTML += `<tr><td>Группа ${group}<td>${groupStat(group)}`;
}

function groupsOf (students) {
    const groups = [];

    for (let person of students)
        if (!groups.includes (person.group))
        groups.push (person.group);

    groups.sort ((a, b) => a - b);
    return groups;
}

/*
if (groupId) {
    let students = [];

    for (let i = 0; i < people.length; i++) {
        if (people.group === groupId) {
            students.push (person);
        }
    }

    preparedStudents = students;
    studentsDraw (students);
}

let students = [];
students.forEach (function (person) {
    if (people.group === groupId) {
        students.push (person);
    }
});

let students = people.filter (function (person) {
    return (people.group === groupId);
});

let students = people.filter (person => people.group === groupId);
*/

/* 
if (groupId) {
    let students = [];

    for (let person of people) {
        if (people.group === groupId) {
            students.push (person);
        }
    }

    preparedStudents = students;
    studentsDraw (students);
}
else {
    preparedStudents = people;
    studentsDraw (people);
}
*/

/*
if (groupId) {
    preparedStudents = people.filter (person => people.group === groupId);
}
else {
    preparedStudents = people;
}
*/

function filterGroup (groupId) {
    console.log ('filterGroup');

    studentsDraw (groupId ? people.filter (people => people.group === groupId) : people);
}

/* 
* Объявление функции после вызова

a = f (1);

function f (n) {
    return n * n;
}

* Объявление функции до вызова

function f (n) {
    return n * n;
}

a = f (1);

* Объявление стрелочной функции
* вызов стрелочной фунции доступен только после ее объявления

const f = n => n * n;

f = f (1);
*/

// function showGroupFilters (students) {}

const showGroupFilters = (students) => {
    const groups = groupsOf (students);
    let container = document.querySelector ('.groupButtons');

    // container.innerHTML = '';
    while (container.firstChild) {
        container.removeChild (container.firstChild);
    }

    for (groupId of groups) {
        let button = document.createElement ('button');
        button.textContent = `${groupId} группа`;
        button.addEventListener ('click', () => filterGroup (groupId));
        container.appendChild (button);
    }
};

var preparedStudents = people;

function getStudents () {
    return preparedStudents;
}

let lastSortMethod = null;

function showStudents (sort, th) {
    const students = getStudents ();

    if (document.querySelector ('.back,.forward'))
        document.querySelector ('.back,.forward').classList.remove ('back', 'forward');
    if (sort === lastSortMethod) {
        people.reverse();
        th.classList.add ('back');
        lastSortMethod = null;
    }
    else {
        people.sort (sort);
        th.classList.add ('forward');
        lastSortMethod = sort;
    }

    studentsDraw (students);
}

const lastSort = (a, b) => sortLast (a, b) || sortFirst (a, b);
const firstSort = (a, b) => sortFirst (a, b) || sortLast (a, b);
const groupSort = (a, b) => sortGroup (a, b) || sortLast (a, b) || sortFirst (a, b);
const ageSort = (a, b) => (a.age - b.age) || sortLast (a, b) || sortFirst (a, b);
const genderSort = (a, b) => a.gender.localeCompare (b.gender) || sortLast(a, b) || sortFirst (a, b);

function sortFirst (a, b) {
    return a.name.first.localeCompare (b.name.first);
}
function sortLast (a, b) {
    return a.name.last.localeCompare (b.name.last);
}
function sortGroup (a, b) {
    return a.group - b.group;
}
