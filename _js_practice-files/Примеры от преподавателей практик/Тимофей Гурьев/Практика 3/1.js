"use strict"
function id(id) {
	return document.getElementById(id);
}

/*
 * Заполняет статистику по студентам и группам
 */
function ShowStats() {
	id("stat_students_quantity").innerHTML = people.length;
	var groups = {};
	var quantityM = 0;
	var quantityF = 0;
	var ageSum = 0;
	var indexMin = 0,
	indexMax = 0;
	for (var i = 0; i < people.length; i++) {
		if (people[indexMin].age > people[i].age) {
			indexMin = i;
		}
		if (people[indexMax].age < people[i].age) {
			indexMax = i;
		}
		groups[people[i].group] = {
			"quantity": 0,
			"quantityM": 0,
			"quantityF": 0,
			"ageSum": 0
		};
		if (people[i].gender == "m") {
			quantityM++;
		}
		if (people[i].gender == "f") {
			quantityF++;
		}
		ageSum += people[i].age;
	}

	for (var i = 0; i < people.length; i++) {
		groups[people[i].group].quantity++;
		groups[people[i].group].quantityM +=
		(people[i].gender == "m") ? 1 : 0;
		if (people[i].gender == "f") {
			groups[people[i].group].quantityF++;
		}
		groups[people[i].group].ageSum += people[i].age;
	}

	var m = Object.keys(groups);
	id("stat_group_quantity").innerHTML = m.length;
	id("stat_m_quantity").innerHTML = quantityM;
	id("stat_f_quantity").innerHTML = quantityF;
	id("stat_av_age").innerHTML =
		Math.round(ageSum / people.length);
	id("stat_av_quantity").innerHTML =
		Math.round(people.length / m.length);
	id("min_age").innerHTML = people[indexMin].name.first
		 + " " + people[indexMin].name.last
		 + " (" + people[indexMin].age + ")";
	id("max_age").innerHTML = people[indexMax].name.first
		 + " " + people[indexMax].name.last
		 + " (" + people[indexMax].age + ")";

	var strTmp = "";
	for (var key in groups) {
		strTmp += "<p><b>Группа " + key + "</b><br>";
		strTmp += "Студентов " + groups[key].quantity + "<br>";
		strTmp += "Мужчин " + groups[key].quantityM + "<br>";
		strTmp += "Женщин " + groups[key].quantityF + "<br>";
		strTmp += "Средний возраст "
		 + Math.round(groups[key].ageSum / groups[key].quantity)
		 + "</p>";
	}
	id("groups").innerHTML = strTmp;

	people.sort(function (a, b) {
		if (a.name.last > b.name.last) {
			return 1;
		} else if (a.name.last < b.name.last) {
			return -1;
		} else if (a.name.first > b.name.first){
			return 1;
		} else if (a.name.first < b.name.first) {
			return -1;
		} else {
			return 0;
		}
	});

	for (var key in people) {
		id("people").innerHTML += people[key].name.last + " "
		 + people[key].name.first + "<br>";
	}

}

function Init() {
	ShowStats();
}

window.addEventListener("load", Init);
