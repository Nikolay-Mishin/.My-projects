window.addEventListener("DOMContentLoaded", Init);

function Init() {
	document.querySelectorAll(".pages-nav a").forEach(
		function (obj) {
			obj.addEventListener(
				"click",
				function (e) {
					//e.preventDefault();
					ShowPage(this.getAttribute("href"));
				}
			);
		}
	);

	var hash = window.location.hash;
	if (hash != "") {
		ShowPage(hash);
	} else {
		ShowPage("#control");
	}

	ShowStats();

}

function ShowPage(pageName) {
	/*if (document.querySelector(pageName) == null) {
		pageName = "#control";
	}*/
	HideAllPages();
	try {
		document.querySelector(pageName)
			.classList.remove("hidden");
	} catch (e){
		pageName = "#control";
		document.querySelector(pageName)
			.classList.remove("hidden");
	}
	document.querySelector(".pages-nav [href='" + pageName +
		"']").parentElement.classList.add("active");

}

function HideAllPages() {
	document.querySelectorAll(".page").forEach(
		function (obj) {
			obj.classList.add("hidden");
		}
	);
	document.querySelectorAll(".pages-nav li").forEach(
		function (obj) {
			obj.classList.remove("active");
		}
	);
}

function ShowStats() {
	//Группы
	var groups = [];
	for (var i = 0; i < people.length; i++) {
		if (groups.indexOf(people[i].group) === -1) {
			groups.push(people[i].group);
		}
	}
	document.getElementById("stat-groups-qnt")
		.innerHTML = groups.length;
	//Студентов
	document.getElementById("stat-students-qnt")
		.innerHTML = people.length;
	//Мужчин и женщин
	//Число женщин и число мужчин
	var m = 0;
	var f = 0;
	for (i = 0; i < people.length; i++) {
		if (people[i].gender == "m") {
			m++;
		} else if (people[i].gender == "f") {
			f++;
		}
	}
	document.getElementById("stat-m-qnt")
		.innerHTML = m;
	document.getElementById("stat-f-qnt")
		.innerHTML = f;
}