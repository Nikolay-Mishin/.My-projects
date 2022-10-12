"use strict";

function Init() {
  let columnHeaders = document.querySelectorAll("#people thead td");
  columnHeaders.forEach(function (td) {
    td.addEventListener("click", SortStudents);
  });

  ShowStudents();

  /**
   * Показать список студентов
   */
  function ShowStudents() {
    ShowGroups();
    let gender = {"f": "ж", "m": "м"};
    let tbody = document.querySelector("#people tbody");
    let html = "";
    people.forEach(function (person) {
      html += "<tr data-group='" + person.group + "'><td>" + person.name.last
       + "</td><td>" + person.name.first
       + "</td><td>" + person.group
       + "</td><td>" + person.age
       + "</td><td>" + gender[person.gender] + "</td></tr>";
    });
    tbody.innerHTML = html;
  }

  /**
   * Сортировать студентов
   */
  function SortStudents() {
    let sender = this;
    columnHeaders.forEach(function (td) {
      if (td !== sender) {
        delete td.dataset["sort"];
      }
    });

    let order;
    if (this.dataset["sort"] === "asc") {
      order = -1;
      this.dataset["sort"] = "desc";
    } else {
      order = 1;
      this.dataset["sort"] = "asc";
    }
    let key = this.dataset["key"];
    let cmp = {
      "gender": function (a, b) {
        return order * CmpString(a.gender, b.gender);
      },
      "last": function (a, b) {
        return order * CmpString(a.name.last, b.name.last);
      },
      "first": function (a, b) {
        return order * CmpString(a.name.first, b.name.first);
      },
      "group": function (a, b) {
        return order * CmpString(a.group, b.group);
      },
      "age": function (a, b) {
        return order * CmpNumber(a.age, b.age);
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

  function ShowGroups() {
    let groups = GetGroups(people);
    let links = "";
    for (let k in groups) {
      links += "<input type='button' data-group='" + k + "' value='Группа " + k + "'> ";
    }
    document.querySelector("#groups").innerHTML = links;
    document.querySelectorAll("#groups input").forEach(function (a) {
      a.addEventListener("click", FilterStudents);
    });
  }

  function FilterStudents(e) {
    e.preventDefault();
    let group = this.getAttribute("data-group");
    document.querySelectorAll("#people tbody tr")
     .forEach(function (tr) {
       if (tr.dataset["group"] == group) {
         tr.style.display = "table-row";
       } else {
         tr.style.display = "none";
       }
     });
  }
}

window.addEventListener("load", Init);