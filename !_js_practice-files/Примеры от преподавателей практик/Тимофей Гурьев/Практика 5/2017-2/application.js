"use strict";
window.addEventListener("DOMContentLoaded", Init);

function Init() {
	if (window.location.hash !== "") {
		ShowPage(window.location.hash);
	} else {
		ShowPage("#control");
	}
	document.querySelectorAll(".pages-tabs a").forEach(function(el){
		el.addEventListener("click", OnTabClick);
	});

	document.querySelector(".add-student").addEventListener("click",
		function () {
			window.location.hash = "#add-student-page";
			ShowPage("#add-student-page");
		}
	);
	// Добавление нового студента после заполнения формы
	document.querySelector("#add-student-page form")
		.addEventListener("submit", AddStudent);

	ShowStats();
	ShowGroups();
	ShowPeople();
	PrepareForm();
}

function HideAllPages() {
	document.querySelectorAll(".page").forEach(function(el){
		el.classList.add("hidden");
	});
}

function OnTabClick() {
	ShowPage(this.getAttribute("href"));
}

function ShowPage(pageId) {
	HideAllPages();
	if (document.querySelector(".page" + pageId) === null) {
		pageId = "#control";
	}
	document.querySelector(pageId).classList.remove("hidden");
	//activate tab link
	document.querySelectorAll(".pages-tabs li").forEach(function(el){
		el.classList.remove("active");
	});

	var link = document.querySelector(".pages-tabs a[href='" + pageId + "']");
	if (link !== null) {
		link.parentElement.classList.add("active");
	}

}

function ShowStats() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	id("stat-gr-cnt").innerHTML = String(groups.length);

	id("stat-st-cnt").innerHTML = String(people.length);

	var mQ = 0;
	var fQ = 0;
	for (var i = 0; i < people.length; i++) {
		if (people[i].gender == "m") {
			mQ++;
		} else if (people[i].gender == "f") {
			fQ++;
		}
	}
	id("stat-m-cnt").innerHTML = String(mQ);
	id("stat-f-cnt").innerHTML = String(fQ);

	var sumAge = 0;
	people.forEach(function(student){
		sumAge += Number(student.age);
	});

	id("stat-av-gr-cnt").innerHTML = Math.round(people.length / groups.length);
	id("stat-av-gr-age").innerHTML = Math.round(sumAge / people.length);
	id("stat-av-gr-m-cnt").innerHTML = Math.round(mQ / groups.length);
	id("stat-av-gr-f-cnt").innerHTML = Math.round(fQ / groups.length);
}

function ShowGroups() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	groups.sort();
	groups.forEach(function(group){
		var g = GetGroupInfo(group, people);
		//console.log(g);
	});
}

function id(x) {
	return document.getElementById(x);
}

function GetGroupInfo(groupNumber, people) {
	var result = {
		"quantity" : 0,
		"m_quantity" : 0,
		"f_quantity" : 0,
		"m_av_age" : 0,
		"f_av_age" : 0
	};
	var mSumAge = 0;
	var fSumAge = 0;
	people.forEach(function(student){
		if (student.group == groupNumber) {
			result.quantity++;
			if (student.gender == "m") {
				result.m_quantity++;
				mSumAge += student.age;
			} else if (student.gender == "f") {
				result.f_quantity++;
				fSumAge += student.age;
			}
		}
	});
	result.m_av_age = Math.round(mSumAge / result.m_quantity);
	result.f_av_age = Math.round(fSumAge / result.f_quantity);

	return result;
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
	var template = "<tr data-group='#gr#'><td>#l#</td><td>#f#</td>" +
	 "<td>#gr#</td><td>#age#</td><td>#gender#</td><td>#del# #edit#</td></tr>";
	for (var i = 0; i < people.length; i++) {
		html = template.replace("#l#", people[i].name.last);
		html = html.replace("#f#", people[i].name.first);
		html = html.replace(/#gr#/g, people[i].group);
		html = html.replace("#age#", people[i].age);
		html = html.replace("#del#", "<button class='btn btn-default del'" +
		" data-id='" + people[i]._id + "'>" +
		"<span class='glyphicon glyphicon-remove'></span></button>");
		html = html.replace("#edit#", "<button class='btn btn-default edit'" +
		" data-id='" + people[i]._id + "'>" +
		"<span class='glyphicon glyphicon-pencil'></span></button>");
		tbody += html.replace("#gender#", rusGender[people[i].gender]);
	}
	id("students_list").innerHTML = tbody;

	/* При клике по кнопке del - удалить студента */
	document.querySelectorAll(".del").forEach(function(el){
		el.addEventListener("click", DelStudent);
	});

	/* При клике по кнопке edit - изменить студента */
	document.querySelectorAll(".edit").forEach(function(el){
		el.addEventListener("click", EditStudent);
	});

}

/**
* Удаление студента.
* Обработчик клика по кнопке в таблице студентов.
*/
function DelStudent() {
	var id = this.dataset.id;
	for (var i = 0; i < people.length; i++) {
		if (people[i]._id === id) {
			people.splice(i,1);
			break;
		}
	}
	ShowStats();
	ShowGroups();
	ShowPeople();
	PrepareForm();
}

/*
* Подготовка формы
*/
function PrepareForm() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});

	groups.sort();

	var sel = document.querySelector("#group");
	sel.innerHTML = "";
	for (var i = 0; i< groups.length; i++) {
		sel.innerHTML += "<option value='" + groups[i] + "'>" +
			groups[i] + "</option>";
	}

	document.querySelector("#_id").value = generateUUID();
}

function AddStudent(e) {
	e.preventDefault();
	var student = {
		"_id": this.querySelector("#_id").value,
		age: Number(this.querySelector("#age").value),
		group: Number(this.querySelector("#group").value),
		name: {
			first: this.querySelector("#first").value,
			last: this.querySelector("#last").value,
		},
		gender: this.querySelector("[name='gender']:checked").value
	};
	people.push(student);
	ShowStats();
	ShowGroups();
	ShowPeople();
	PrepareForm();
	ShowPage("#students");
}

function EditStudent() {
	ShowPage("#add-student-page");
	var id = this.dataset.id;
	people.forEach(function (student) {
		if(student._id === id) {
			document.querySelector("#_id").value = student._id;
			document.querySelector("#first").value = student.name.first;
			document.querySelector("#last").value = student.name.last;
			document.querySelector("#age").value = student.age;
			document.querySelector("#group").value = student.group;
			document.querySelectorAll("[name='gender']").forEach(function(g){
				g.checked = false;
			});
			//document.querySelector("[name='gender']:checked").checked = false;
			document.querySelector("[name='gender'][value='" +
			 student.gender + "']").checked = true;
		}
	});
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
