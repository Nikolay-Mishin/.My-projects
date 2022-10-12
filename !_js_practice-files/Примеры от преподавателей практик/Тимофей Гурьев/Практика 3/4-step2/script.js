"use strict";

function Init() {
  let columnHeaders = document.querySelectorAll("#people thead td");
  columnHeaders.forEach(function (td) {
    td.addEventListener("click", SortStudents);
  });

  ShowStudents();

  function ShowStudents() {
    let gender = {"f": "ж", "m": "м"};
    let tbody = document.querySelector("#people tbody");
    let html = "";
    people.forEach(function (person) {
      html += "<tr><td>" + person.name.last
       + "</td><td>" + person.name.first
       + "</td><td>" + person.group
       + "</td><td>" + person.age
       + "</td><td>" + gender[person.gender] + "</td></tr>";
    });
    tbody.innerHTML = html;
  }

  function SortStudents() {
    let key = this.dataset["key"];
    let cmp = {
      "gender": function (a, b) {
        return CmpString(a.gender, b.gender);
      },
      "last": function (a, b) {
        return CmpString(a.name.last, b.name.last);
      },
      "first": function (a, b) {
        return CmpString(a.name.first, b.name.first);
      },
      "group": function (a, b) {
        return CmpString(a.group, b.group);
      },
      "age": function (a, b) {
        return CmpNumber(a.age, b.age);
      }
    };

    function CmpString(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }

    function CmpNumber(a, b) {
      return a - b;
    }

    people.sort(cmp[key]);
    ShowStudents();
  }
}

window.addEventListener("load", Init);