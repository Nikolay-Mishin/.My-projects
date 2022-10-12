"use strict";

function id(id) {
    return document.getElementById(id);
}

/**
 * Получить информацию по группам
 * @param people
 * @returns {{}}
 * @constructor
 */
function GetGroups(people) {
    let groups = {};
    people.forEach(function (person) {
        if (!(person.group in groups)) {
            groups[person.group] = {
                "sumAge": 0,
                "f": 0,
                "m": 0,
                "total": 0
            };
        }
        groups[person.group].sumAge += person.age;
        groups[person.group].total++;
        groups[person.group].f += (person.gender === "f") ? 1 : 0;
        if (person.gender === "m") {
            groups[person.group].m++;
        }
    });

    for (let key in groups) {
        groups[key].avAge =
          Math.round(groups[key].sumAge / groups[key].total);
    }

    return groups
}


/**
 * Заполняет статистику по студентам и группам
 */
function ShowStats() {
    id("stat_students_quantity").innerHTML = people.length;

    /* Массив, обход for */
    let groups = [];
    for (let i = 0; i < people.length; i++) {
        if (groups.indexOf(people[i].group) === -1) {
            groups.push(people[i].group);
        }
    }
    id("stat_group_quantity").innerHTML = groups.length;

    /* Массив, обход foreach */
    let groups1 = [];
    people.forEach(function (person) {
        if (groups1.indexOf(person.group) === -1) {
            groups1.push(person.group);
        }
    });
    id("stat_group_quantity_1").innerHTML =
      groups1.length;



    /* Объект */
    let groups2 = {};
    for (let i = 0; i < people.length; i++) {
        groups2[people[i].group] = people[i].group;
    }
    id("stat_group_quantity_2").innerHTML =
      Object.keys(groups2).length;



    let groups3 = GetGroups(people);
    console.log(groups3);
    id("stat_group_quantity_3").innerHTML =
      Object.keys(groups3).length;

}

function Init() {
    ShowStats();
}

window.addEventListener("load", Init);
