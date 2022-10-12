"use strict";

function id(id) {
    return document.getElementById(id);
}


function SortPeople() {
    people.sort(CompareStudents);

    /**
     * Сравнение студентов по фамилии и имени
     * @param a
     * @param b
     * @returns {number}
     */
    function CompareStudents(a, b) {
        let an = a.name.last + a.name.first;
        let bn = b.name.last + b.name.first;
        if (an > bn) {
            return 1;
        } else if (an === bn) {
            return 0;
        } else {
            return -1;
        }
    }
}

function ShowPeople() {
    id("people").innerHTML = "";
    let strStudents = "";
    for (let i = 0; i < people.length; i++) {
        /*strStudents += "<p>" + people[i].name.last
          + " " + people[i].name.first + "</p>";*/
        strStudents += `<p>
${people[i].name.last} ${people[i].name.first}
</p>`;
    }
    id("people").innerHTML = strStudents;
}

function Init() {
    SortPeople();
    ShowPeople();
}

window.addEventListener("load", Init);
