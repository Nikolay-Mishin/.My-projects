// Количество студентов
document.getElementById ('count').textContent = people.length;

// Число групп
let groups = [];
for (let person of people) {
    // поиск совпадения номеров групп (если группа в people не содержится в groups)
    if (!groups.includes (person.group)) {
        groups.push (person.group);
    }
}

/*
let groups = new Set ();
for (let person of people) {
    if (!groups.includes (person.group)) {
        groups.push (person.group);
    }
}
*/

console.log (groups);

/*
function compareNumbers (a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
}

groups.sort (compareNumbers);

function compareNumbers (a, b) {
    return a - b;
}

groups.sort (function (a, b) {
    return a - b;
});
*/

groups.sort ((a, b) => a - b);

console.log (groups);

document.getElementById ('group').textContent = groups.length;
document.getElementById ('avgGroup').textContent = (people.length / groups.length).toFixed (0);

// Количество женщин

let femaleCount = 0;

for (let person of people) {
    if (person.gender === 'f') {
        femaleCount++;
    }
}

document.getElementById ('female').textContent = femaleCount;

/*
let maleCount = people.length - femaleCount;

// Фильтр
function maleCheck (person) {
    return person.gender === 'm';
}

let males = people.filter (maleCheck);

let males = people.filter (function (person) {
    return person.gender === 'm';
});

let males = people.filter ((person) => {
    return person.gender === 'm';
});
*/

// (person) => {return person.gender === 'm';}
// (person) => (person.gender === 'm')
let males = people.filter (person => person.gender === 'm');

document.getElementById ('male').textContent = males.length;

// Среднее

let sumAges = 0;
let minAge = people[0].age;
let maxAge = people[0].age;

for (let person of people) {
    sumAges += person.age;

    if (person.age < minAge) {
        minAge = person.age;
    }
    if (person.age > maxAge) {
        maxAge = person.age
    }
}

let overageAge = sumAges / people.length;

document.getElementById ('avgAge').textContent = overageAge.toFixed (1);
document.getElementById ('youngesAge').textContent = minAge;
document.getElementById ('eldestAge').textContent = maxAge;

function stat (students) {
    let count = students.length;
    let fCount = 0;
    let mCount = 0;
    let sum = 0;

    for (let person of people) {
        sum += person.age;
    
        if (person.gender === 'f') {
            fCount++;
        }
        if (person.gender === 'f') {
            mCount++;
        }
    }

    let avgAge = sum / students.length;

    return `
        количество: ${count}
        женщин: ${fCount}
        мужчин: ${mCount}
        средний возраст: ${avgAge.toFixed (1)}
    `;
}

let groupsElem = document.getElementById ('groups');
groupsElem.innerHTML = '';
for (let group of groups) {
    console.log ('Группа', group);
    console.log (stat (people.filter (person => group === person.group)));

    //groupsElem.innerHTML += <dt>Группа <span>${ group }</span>;
    //groupsElem.innerHTML += <dd>${ stat (people.filter (person => group === person.group)) };
}

/*
function lastCompare (str1, str2) {
    if (str1.name.last > str2.name.last) return 1;
    if (str2.name.last > str1.name.last) return -1;
    return 0;
}

function lastCompare (str1, str2) {
    return str1.name.last.localeCompare (str2.name.last);
}
*/

people.sort ((str1, str2) => str1.name.last.localeCompare (str2.name.last));
for (let person of people) {
    console.log (person.name.last, person.name.first);
}