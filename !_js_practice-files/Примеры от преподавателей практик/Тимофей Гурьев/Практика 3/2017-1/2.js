"use strict";
var sortedField = "last";
Init();
/**
* Исполняется при загрузке страницы
**/
function Init() {
	//document.querySelector(".js-sorted-students thead td").click();
	ShowGroups();
	ShowStudents();
	document.querySelectorAll(".js-sorted-students thead td").forEach(function(obj){
		obj.addEventListener("click", SortTable);
	});
	document.querySelectorAll(".js-groups-list span").forEach(function(obj){
		obj.addEventListener("click", FilterTable);
	});
}

/**
* Сортирует таблицу студентов по одной колонке.
* Обработчик клика по ячейке заголовка таблицы
**/
function SortTable() {
	sortedField = this.dataset["field"];
	if (this.classList.contains("asc")) {
		this.parentElement.querySelectorAll("td").forEach(function(obj){
			obj.classList.remove("asc");
			obj.classList.remove("desc");
		});
		this.classList.remove("asc");
		this.classList.add("desc");
		people.sort(StudentsCompareDesc);
	} else if (this.classList.contains("desc")) {
		var c = this.parentElement.children;
		for (var a in c) {
			if (c.hasOwnProperty(a)) {
				c[a].classList.remove("asc");
				c[a].classList.remove("desc");
			}
		}
		this.classList.remove("desc");
		this.classList.add("asc");
		people.sort(StudentsCompare);
	} else {
		var c = this.parentElement.children;
		for (var a in c) {
			if (c.hasOwnProperty(a)) {
				c[a].classList.remove("asc");
				c[a].classList.remove("desc");
			}
		}
		this.classList.add("asc");
		people.sort(StudentsCompare);
	}

	ShowStudents();
}

function StudentsCompare(a,b) {
	var aa = a;
	var bb = b;
	if (sortedField == "last" || sortedField == "first") {
		aa = a.name;
		bb = b.name;
	}
	if (aa[sortedField] > bb[sortedField]) {
		return 1;
	} else if (aa[sortedField] < bb[sortedField]) {
		return -1;
	} else {
		return 0;
	}
}

function StudentsCompareDesc(a,b) {
	var aa = a;
	var bb = b;
	if (sortedField == "last" || sortedField == "first") {
		aa = a.name;
		bb = b.name;
	}
	if (aa[sortedField] < bb[sortedField]) {
		return 1;
	} else if (aa[sortedField] > bb[sortedField]) {
		return -1;
	} else {
		return 0;
	}
}

function ShowStudents() {
	var rusGend = {
		'm':'м',
		'f':'ж'
	};
	var trows = "";
	var tmp = "";
	var template = "<tr><td>#last#</td><td>#name#</td><td>#group#</td>" +
		"<td>#age#</td><td>#gender#</td></tr>";
	people.forEach(function(val) {
		tmp = template.replace("#last#",val.name.last);
		tmp = tmp.replace("#name#",val.name.first);
		tmp = tmp.replace("#group#",val.group);
		tmp = tmp.replace("#age#",val.age);
		trows += tmp.replace("#gender#",rusGend[val.gender]);
	});
	document.getElementById("students_list").innerHTML = trows;
}

function ShowGroups() {
	var groups = [];
	for (var i = 0; i < people.length; i++) {
		if (groups.indexOf(people[i].group) === -1) {
			groups.push(people[i].group);
		}
	}
	var strGroups = "<span>" + groups.join("</span> <span>") + "</span> <span>Все</span>";
	document.querySelector(".js-groups-list").innerHTML = strGroups;
}

function FilterTable() {
	var group = this.innerHTML;
	var rows = document.querySelectorAll("#students_list tr");
	rows.forEach(function(obj){
		if (obj.querySelectorAll("td")[2].innerHTML != group) {
			obj.style.display = "none";
		} else {
			obj.style.display = "table-row";
		}
	});
}
