"use strict";
window.addEventListener("DOMContentLoaded", Init);
document.querySelectorAll("[data-js='people'] thead td").forEach(
	function (td) {
		td.addEventListener("click", SortTable);
	}
);

var sort = "last";

function Init() {
	ShowGroups2();
	ShowPeople();
}

/**
 * Вывод данных о студентах
 */
function ShowPeople() {
	var rusGender = {
		"m": "м",
		"f": "ж"
	};
	var html = "";
	var tbody = "";
	var template = "<tr data-group='#gr#'><td>#l#</td><td>#f#</td><td>#gr#</td><td>#age#</td><td>#gender#</td></tr>";
	for (var i = 0; i < people.length; i++) {
		html = template.replace("#l#", people[i].name.last);
		html = html.replace("#f#", people[i].name.first);
		html = html.replace(/#gr#/g, people[i].group);
		html = html.replace("#age#", people[i].age);
		tbody += html.replace("#gender#", rusGender[people[i].gender]);
	}
	id("students_list").innerHTML = tbody;
}

function SortTable() {
	function PrepareRow(td) {
		td.parentElement.querySelectorAll("td").forEach(function(obj){
			obj.classList.remove("asc");
			obj.classList.remove("desc");
		});
	}
	sort = this.dataset.sort;
	if (this.classList.contains("asc")) {
		PrepareRow(this);
		this.classList.add("desc");
		people.sort(CompareDesc);
	} else if (this.classList.contains("desc")) {
		PrepareRow(this);
		this.classList.add("asc");
		people.sort(Compare);
	} else {
		PrepareRow(this);
		this.classList.add("asc");
		people.sort(Compare);
	}

	ShowPeople();
}

/**
* Сравнение студентов. Для сортировки.
*/
function Compare(a, b) {
	var aa = a;
	var bb = b;
	if (sort == "last" || sort == "first") {
		aa = a.name;
		bb = b.name;
	}
	if (aa[sort] > bb[sort]) {
		return 1;
	} else if (aa[sort] < bb[sort]) {
		return -1;
	} else {
		return 0;
	}
}

/**
* Сравнение студентов. Для обратной сортировки.
*/
function CompareDesc(a, b) {
	return -Compare(a,b);
}

/**
* Выводит список групп
**/
function ShowGroups() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	groups.sort();
	var str = "";
	groups.forEach(function(group) {
		str += "<span>" + group + "</span> ";
	});
	str += "<span>Все</span>";
	document.getElementById("groups-list").innerHTML = str;

	document.querySelectorAll("#groups-list span").forEach(
		function (obj) {
			obj.addEventListener("click", FilterTable);
		}
	);
}

function ShowGroups2() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	groups.sort();
	var str = "";
	groups.forEach(function(group) {
		str += "<option value='" + group + "'>" + group + "</option> ";
	});
	str += "<option value='Все'>Все</span>";
	document.getElementById("groups-select").innerHTML = str;
	document.querySelector("#groups-select").addEventListener("change", FilterTable2);
}

/**
* Фильтрует таблицу при клике по номеру группы
*/
function FilterTable() {
	// Переключить активность номера группы
	document.querySelectorAll("#groups-list span").forEach(function(obj){
		obj.classList.remove("active");
	});
	this.classList.add("active");
	// Номер группы
	var group = this.innerHTML;
	if (group === "Все") {
		document.querySelectorAll("#students_list tr").forEach(function(tr){
			tr.classList.remove("hidden");
		});
	} else {
		document.querySelectorAll("#students_list tr").forEach(function(tr){
			// Если номер группы совпадает с нужным, то показать
			if (tr.dataset.group == group) {
				tr.classList.remove("hidden");
			} else {
				// иначе скрыть
				tr.classList.add("hidden");
			}
		});
	}
}

function FilterTable2() {
	var group = this.value;
	if (group === "Все") {
		document.querySelectorAll("#students_list tr").forEach(function(tr){
			tr.classList.remove("hidden");
		});
	} else {
		document.querySelectorAll("#students_list tr").forEach(function(tr){
			if (tr.dataset.group == group) {
				tr.classList.remove("hidden");
			} else {
				tr.classList.add("hidden");
			}
		});
	}
}
/**
 * Короткая обертка для document.getElementById
 * @param x - id элемента
 * @returns {Element}
 */
function id(x) {
	return document.getElementById(x);
}
