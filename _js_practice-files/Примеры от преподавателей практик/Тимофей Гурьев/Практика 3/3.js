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
	for (var i = 0; i < people.length; i++) {
		groups[people[i].group] = {
			"quantity": 0,
			"ageSum": 0,
			"quantityM": 0,
			"quantityF": 0
		};
	}

	var quantityM = 0;
	var quantityF = 0;
	var ageSum = 0;
	var indexMin = 0;
	var indexMax = 0;
	for (var i = 0; i < people.length; i++) {
		ageSum += people[i].age;

		groups[people[i].group].quantity++;
		groups[people[i].group].ageSum
		 += people[i].age;

		if (people[i].gender == "m") {
			groups[people[i].group].quantityM += 1;
			quantityM += 1;
		}
		if (people[i].gender == "f") {
			groups[people[i].group].quantityF += 1;
			quantityF += 1;
		}

		if (people[i].age < people[indexMin].age) {
			indexMin = i;
		}
		if (people[i].age > people[indexMax].age) {
			indexMax = i;
		}
	}

	var m = Object.keys(groups);
	id("stat_group_quantity").innerHTML = m.length;
	id("stat_m_quantity").innerHTML = quantityM;
	id("stat_f_quantity").innerHTML = quantityF;
	id("stat_av_age").innerHTML =
		Math.round(ageSum / people.length);
	id("min_age").innerHTML = people[indexMin].name.first +
		" " + people[indexMin].name.last + ", " +
		people[indexMin].age
		id("max_age").innerHTML = people[indexMax].name.first +
		" " + people[indexMax].name.last + ", " +
		people[indexMax].age

		var strTmp = "";
	for (var a in groups) {
		strTmp += "<p><b>Группа " + a + "</b><br>";
		strTmp += "Студентов " + groups[a].quantity + "<br>";
		strTmp += "Средний возраст " +
		Math.round(groups[a].ageSum / groups[a].quantity) + "<br>";
		strTmp += "Мужчин " + groups[a].quantityM + "<br>";
		strTmp += "Женщин " + groups[a].quantityF + "</p>";
	}
	id("groups").innerHTML = strTmp;

	people.sort(peopleCompare);

	function peopleCompare(a, b) {
		if (a.name.last > b.name.last) {
			return 1;
		} else if (a.name.last < b.name.last) {
			return -1;
		} else {
			if (a.name.first > b.name.first) {
				return 1;
			} else if (a.name.first < b.name.first) {
				return -1;
			} else {
				return 0;
			}
		}
	}
	
	function peopleCompare2(a, b) {
		var strA = a.name.last + a.name.first;
		var strB = b.name.last + b.name.first;
		if (strA > strB) {
			return 1;
		} else if (a.name.last < b.name.last) {
			return -1;
		} else {
			return 0
		}
	}
}

function Init() {
	ShowStats();
}

window.addEventListener("load", Init);
