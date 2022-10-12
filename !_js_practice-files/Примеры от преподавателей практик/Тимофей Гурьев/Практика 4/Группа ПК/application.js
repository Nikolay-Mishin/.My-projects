window.addEventListener("DOMContentLoaded", Init);

function Init() {
	document.querySelectorAll(".page-tabs a").forEach(function(tab){
		tab.addEventListener("click", OnTabClick);
	});
	ShowGroups();
	ShowStudents();
	ShowPage("#page-control");
}

/* Скрывает все вкладки */
function HideAllPages() {
	document.querySelectorAll(".page").forEach(function(page){
		page.classList.add("hidden");
	});
	document.querySelectorAll(".page-tabs li").forEach(function(page){
		page.classList.remove("active");
	});
}

/* Показывает одну вкладку, скрывая другие */
function ShowPage(pageName) {
	HideAllPages();
	document.querySelector(pageName).classList.remove("hidden");
	console.log(".page-tabs [href='" + pageName + "']");
	document.querySelector(".page-tabs [href='" + pageName + "']").parentNode
		.classList.add("active");
}

/* Клик по ярлыку вкладки */
function OnTabClick() {
	ShowPage(this.getAttribute("href"));
}

function ShowGroups() {
	var groups = {};
	for (person in people)  {
		groups[people[person].group] = 0;
	}
	for (group in groups) {
		document.querySelector("#groups-buttons").innerHTML +=
			"<button type=\"button\" class=\"btn btn-default\" data-group=\"" +group+ "\">" + group + "</button>";
	}
	document.querySelector("#groups-buttons").innerHTML +=
			"<button type=\"button\" class=\"btn btn-default\" data-group=\"all\">Все</button>";
}

function ShowStudents() {
	var strTBody = "";
	var mg = {
		"m": "м",
		"f": "ж"
	}
	for (var i = 0; i < people.length; i++) {
		strTBody += "<tr data-group=\""+ people[i].group + "\"><td>" + people[i].name.last +
		"</td><td>" + people[i].name.first + "</td>" +
		"<td>" + people[i].group + "</td>" +
		"<td>" + people[i].age + "</td>" +
		"<td>" + mg[people[i].gender] + "</td>" +
		"</tr>";
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTBody;
}