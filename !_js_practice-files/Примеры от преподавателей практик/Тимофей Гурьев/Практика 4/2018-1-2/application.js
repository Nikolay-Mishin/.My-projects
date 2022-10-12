"use strict";

function Init() {
    "use strict";

    /* Переключение вкладок при загрузке страницы */
    if (window.location.hash !== "" && window.location.hash !== "#"
     && document.querySelector("[data-tab-links] a[href='" + window.location.hash + "']") !== null) {
        ShowPage(window.location.hash);
    } else {
        ShowPage("#stats");
    }

    /* Клик по заголовку столбца - сортировка студентов */
    let columnHeaders = document.querySelectorAll("#people thead th");
    columnHeaders.forEach(function (td) {
        td.addEventListener("click", SortStudents);
    });

    /* Переключение вкладок при изменении хэша */
    window.addEventListener("hashchange", function () {
        if (document.querySelector("[data-tab]" + window.location.hash) !== null) {
            ShowPage(window.location.hash);
        }
    });

    /* Показать информацию */
    ShowStudents();
    ShowGroups();
    ShowStats();

    /**
     * Показать статистику
     */
    function ShowStats() {
        let groups = GetGroups(people);
        let grQnt = Object.getOwnPropertyNames(groups).length;
        document.querySelector("#gr-qnt").innerHTML = grQnt.toString();
        document.querySelector("#st-all").innerHTML = people.length.toString();
        let f = 0;
        let m = 0;
        let ageSum = 0;
        people.forEach(function (person) {
            if (person.gender === 'f') {
                f++;
            }
            if (person.gender === 'm') {
                m++;
            }
            ageSum += person.age;
        });
        document.querySelector("#st-f").innerHTML = f.toString();
        document.querySelector("#st-m").innerHTML = m.toString();
        document.querySelector("#gr-av").innerHTML = String(Math.round(people.length / grQnt));
        document.querySelector("#age-av").innerHTML = String(Math.round(ageSum / people.length));
        document.querySelector("#gr-m").innerHTML = String(Math.round(m / grQnt));
        document.querySelector("#gr-f").innerHTML = String(Math.round(f / grQnt));
    }

    /**
     * Показать вкладку
     * @param hash
     */
    function ShowPage(hash) {
        // Скрыть все вкладки
        document.querySelectorAll("[data-tab]").forEach(function (tab) {
            tab.classList.add("hidden");
        });
        // Показать нужную вкладку
        document.querySelector(hash).classList.remove("hidden");
        // Убрать активность ярлыков
        document.querySelectorAll("[data-tab-links] li")
         .forEach(function (li) {
             li.classList.remove("active");
         });
        // Поставить активность ярлыка
        /*try {
            document.querySelector("[data-tab-links] a[href='" + hash + "']")
             .parentElement.classList.add("active");
        } catch (e) {

        }*/
        if (document.querySelector("[data-tab-links] a[href='" + hash + "']")
         !== null) {
            document.querySelector("[data-tab-links] a[href='" + hash + "']")
             .parentElement.classList.add("active");
        }


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

    function ShowGroupsButtons() {
        let groups = GetGroups(people);
        let links = "";
        for (let k in groups) {
            links += "<input type='button' data-group='" + k + "' value='Группа " + k + "'> ";
        }
        links += "<input type='button' data-group='all' value='Все'> ";
        document.querySelector("#groups-buttons").innerHTML = links;
        document.querySelectorAll("#groups-buttons input").forEach(function (a) {
            a.addEventListener("click", FilterStudents);
        });
    }

    /**
     * Показать статистику по группам
     */
    function ShowGroups() {
        let groups = GetGroups(people);
        let html = '';
        for (let k in groups) {
            html += "<p>";
            html += "Группа " + k + ":<br>";
            html += "Студентов " + groups[k].total + "<br>";
            html += "Мужчин " + groups[k].m + "<br>";
            html += "Женщин " + groups[k].f + "<br>";
            html += "Средний возраст " + groups[k].avAge + "<br>";
            html += "</p>";
        }
        document.querySelector("#groups").innerHTML = html;
    }

    /**
     * Фильтровать список студентов по группе
     */
    function FilterStudents() {
        let group = this.getAttribute("data-group");
        if (group === "all") {
            document.querySelectorAll("#people tbody tr")
             .forEach(function (tr) {
                 tr.style.display = "table-row";
             });
        } else {
            document.querySelectorAll("#people tbody tr")
             .forEach(function (tr) {
                 if (tr.dataset["group"] === group) {
                     tr.style.display = "table-row";
                 } else {
                     tr.style.display = "none";
                 }
             });
        }

    }

    /**
     * Показать список студентов
     */
    function ShowStudents() {
        ShowGroupsButtons();
        let gender = {"f": "ж", "m": "м"};
        let tbody = document.querySelector("#people tbody");
        let html = "";
        people.forEach(function (person) {
            html += "<tr data-group='" + person.group + "'><td>" + person.name.last
             + "</td><td>" + person.name.first
             + "</td><td>" + person.group
             + "</td><td>" + person.age
             + "</td><td>" + gender[person.gender] + "</td>"
             + `</td><td>
             <button type='button' class='btn' data-del data-id='${person._id}'>
             <i class='glyphicon glyphicon-trash'></i>
             </button></td></tr>`;
        });
        tbody.innerHTML = html;
        tbody.querySelectorAll("[data-del]").forEach(function (btn) {
            btn.addEventListener("click", DeleteStudent);
        });
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

        /**
         * Сравнение строк
         * @param a
         * @param b
         * @returns {number}
         */
        function CmpString(a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }

        /**
         * Сравнение чисел
         * @param a
         * @param b
         * @returns {number}
         */
        function CmpNumber(a, b) {
            return a - b;
        }

        people.sort(cmp[key]);
        ShowStudents();
    }

    function DeleteStudent() {
        let id = this.dataset["id"];
        people.forEach(function (person, i) {
            if (person["_id"] === id) {
                people.splice(i, 1);
            }
        });
        ShowStudents();
        ShowGroups();
        ShowStats();
    }
}

window.addEventListener("DOMContentLoaded", Init);