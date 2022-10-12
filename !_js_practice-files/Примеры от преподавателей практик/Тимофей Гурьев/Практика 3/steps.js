"use strict";
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
/*
 * Заполняет статистику по студентам и группам
 */
function ShowStats() {
    //a
    document.getElementById("stat_students_quantity").innerHTML = people.length;

    let groups = {};
    let f = 0, m = 0;
    let young = people[0], old = people[0];
    let sumAge = 0;
    people.forEach(function (person) {
        //b
        groups[person.group] = person.group;
        //c
        if (person.gender === "f") {
            f++;
        } else if (person.gender === "m") {
            m++;
        }
        //d
        if (person.age < young.age) {
            young = person;
        }
        if (person.age > old.age) {
            old = person;
        }
        sumAge += person.age;
    });

    document.getElementById("groups").innerHTML =
      Object.keys(groups).length;

    document.getElementById("young").innerHTML = young.name.first + " "
      + young.name.last + " &mdash; " + young.age;
    document.getElementById("old").innerHTML = old.name.first + " "
      + old.name.last + " &mdash; " + old.age;
    document.getElementById("avAge").innerHTML =
      Math.round(sumAge / people.length);

    let groups2 = GetGroups(people);
    for (let key in groups2) {
        document.getElementById("groups-stat").innerHTML +=
          "<p>Группа " + key + "<br>" +
          " Студентов: " + groups2[key]["total"] + "<br>" +
          " Ср. возраст: " + groups2[key].avAge + "<br>" +
          " Мужчин: " + groups2[key].m + "<br>" +
          " Женщин: " + groups2[key].f + "</p>";
    }

}

function Init() {
    ShowStats();
}

window.addEventListener("load", Init);
