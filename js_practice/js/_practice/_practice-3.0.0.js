/* ...................................... 

        Практика 3
    
...................................... */

document.getElementById('count').textContent = people.length;

let groups = [];
for (let person of people) {
    if (!groups.includes(person.group)) {
    groups.push(person.group);
    }
}

// function compareNumbers(a, b) {
//   if (a > b) return 1;
//   if (b > a) return -1;
//   return 0;
// }
// function compareNumbers(a, b) {
//   return a - b;
// }
//
// groups.sort(function(a, b) {
//   return a - b;
// });

groups.sort((a, b) => a - b);
console.log(groups);

// let groups = new Set();
// for (let person of people) {
//   groups.add(person.group);
// }

document.getElementById('groupCount').textContent = groups.length;
document.getElementById('avgGroup').textContent = (people.length / groups.length).toFixed(0);

let femaleCount = 0;
for (let person of people) {
    if (person.gender === 'f') {
    femaleCount += 1;
    }
}
document.getElementById('fCount').textContent = femaleCount;

//let maleCount = people.length - femaleCount;

// let males = people.filter(function(person) {
//   return person.gender === 'm';
// });
//
// let males = people.filter((person) => {
//   return person.gender === 'm';
// });
//
// let males = people.filter((person) => { return person.gender === 'm'; });

let males = people.filter(person => person.gender === 'm');
document.getElementById('mCount').textContent = males.length;

let sumAges = 0;
let minAge = people[0].age;
let maxAge = people[0].age;
for (let person of people) {
    sumAges += person.age;
    if (person.age < minAge)
    minAge = person.age;
    if (person.age > maxAge)
    maxAge = person.age;
}
let averageAge = sumAges / people.length;
document.getElementById('avgAge').textContent = averageAge.toFixed(1);
document.getElementById('youngestAge').textContent = minAge;
document.getElementById('eldestAge').textContent = maxAge;

function stat(students) {
    let [fCount, mCount, sum] = [0, 0, 0];
    for (let person of students) {
    sum += person.age;
    if (person.gender === 'f')
        fCount += 1;
    if (person.gender === 'm')
        mCount += 1;
    }
    let avgAge = sum / students.length;
    return `
    количество: <span>${students.length}</span><br>
    женщин: <span>${fCount}</span><br>
    мужчин: <span>${mCount}</span><br>
    средний возраст: <span>${avgAge.toFixed(1)}</span>
    `;
}

let groupsElem = document.getElementById('groups');
groupsElem.innerHTML = '';
for (let group of groups) {
    groupsElem.innerHTML += `<dt>Группа <span>${ group }</span>`;
    groupsElem.innerHTML += `<dd>${ stat(people.filter(person => group === person.group)) }`;
}

people.sort((st1, st2) => st1.name.last.localeCompare(st2.name.last));
for (let person of people) {
    console.log(person.name.last, person.name.first);
}



// ===== Сравнение =====

function MZH0 (gender) {
    if (gender === 'f') return 'Ж';
    else return 'М';
}

function MZH1 (gender) {
    switch (gender) {
        case f: return 'Ж';
        case m: return 'М';
    }
}

// тернарный оператор
// const a = УСЛОВИЕ ? БЛОК1 : БЛОК2;
function MZH (gender) {
    return (gender === 'f') ? 'Ж' : 'М';
}

// сопоставление - карта
// Dictionary - словарь
const mzDic = {
    'f': 'Ж',
    'm': 'М'
};

// ===== Сортировка =====

/*
<th><span onclick="showStudents (lastSort, this)">
*/

let lastSortMethod = null;

function showStudents (sort, th) {
    if (document.querySelector ('.forward,.back'))
        document.querySelector ('.forward,.back').classList.remove ('forward', '.back');
    
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
    studentsDraw (people);
}

const lastSort = (a, b) => sortLast (a, b) || sortFirst (a, b);
const firstSort = (a, b) => sortFirst (a, b) || sortLast (a, b);
const groupSort = (a, b) => sortGroup (a, b) || sortLast (a, b) || sortFirst (a, b);
const ageSort = (a, b) => (a.age - b.age) || sortLast (a, b) || sortFirst (a, b);
const genderSort = (a, b) => a.gender.localeCompare (b.gender) || sortLast (a, b) || sortFirst (a, b);
/*
function lastSort () {
    people.sort (function (a, b) {
        return sortLast (a, b) || sortFirst (a, b);
    });
    studentsDraw (people);
}

function firstSort () {
    people.sort (function (a, b) {
        return sortFirst (a, b) || sortLast (a, b);
    });
    studentsDraw (people);
}

function groupSort () {
    people.sort (function (a, b) {
        return sortGroup (a, b) || sortLast (a, b) || sortFirst (a, b);
    });
    studentsDraw (people);
}
*/
function sortFirst (a, b) {
    return a.name.first.localeCompare (b.name.first);
}

function sortLast (a, b) {
    return a.name.last.localeCompare (b.name.last);
}

function sortGroup (a, b) {
    return a.group - b.group;
}
