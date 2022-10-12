function Init() {
    var columnHeaders = document.querySelectorAll("#people thead td");
    columnHeaders.forEach(function (td) {
        td.addEventListener("click", SortStudents);
    });


    ShowStudents();


    function SortStudents() {
        let sender = this;
        columnHeaders.forEach(function (td) {
            if (td != sender) {
                delete td.dataset["sort"];
                td.classList.remove("asc");
                td.classList.remove("desc");
            }
        });
        let dir;
        if (this.dataset["sort"] === "asc") {
            dir = -1;
            this.dataset["sort"] = 'desc';
            this.classList.add("desc");
        } else {
            dir = 1;
            this.dataset["sort"] = 'asc';
            this.classList.add("asc");
        }
        let key = this.dataset["key"];
        let cmp = {
            "gender": function (a, b) {
                return dir * cmpStr(a.gender, b.gender)
            },
            "last": function (a, b) {
                return dir * cmpStr(a.name.last, b.name.last)
            },
            "first": function (a, b) {
                return dir * cmpStr(a.name.first, b.name.first)
            },
            "group": function (a, b) {
                return dir * cmpStr(a.group, b.group)
            },
            "age": function (a, b) {
                return dir * cmpNum(a.age, b.age)
            }

        };
        people.sort(cmp[key]);
        ShowStudents();

        function cmpStr(aa, bb) {
            if (aa > bb) {
                return 1;
            } else if (aa < bb) {
                return -1;
            } else {
                return 0;
            }
        }

        function cmpNum(aa, bb) {
            return aa - bb;
        }
    }

    function ShowStudents() {
        let tbody = document.querySelector("#people tbody");
        let html = "";
        people.forEach(function (person) {
            html += "<tr data-group='"+ person.group + "'><td>"
              + person.name.last + "</td>"
              + "<td>" + person.name.first + "</td>"
              + "<td>" + person.group + "</td>"
              + "<td>" + person.age + "</td>"
              + "<td>" + person.gender + "</td></tr>";
        });
        tbody.innerHTML = html;
        ShowGroups();
    }
    
    function ShowGroups() {
        let groups = GetGroups(people);
        let links = "";
        for (let k in groups) {
            links += "<a href='" + k + "'>Группа "+ k + "</a><br>";
        }
        document.querySelector("#groups").innerHTML = links;
        document.querySelectorAll("#groups a").forEach(function(a){
            a.addEventListener("click", FilterStudents);
        });
    }

    function FilterStudents(e) {
        e.preventDefault();
        let group = this.getAttribute("href");;
        document.querySelectorAll("#people tbody tr")
          .forEach(function(tr){
                if (tr.dataset["group"] == group) {
                    tr.style.display = "table-row";
                } else {
                    tr.style.display = "none";
                }
          });

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
}

window.addEventListener("load", Init);