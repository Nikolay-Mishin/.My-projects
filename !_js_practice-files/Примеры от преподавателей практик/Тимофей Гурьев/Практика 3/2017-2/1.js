"use strict";
window.addEventListener("DOMContentLoaded", Init);

/**
 * Вывод данных о студентах
 */
function Init() {
	// a) Число студентов
	id("students_quantity").innerHTML = String(people.length);

	// b) Число групп
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	id("groups_quantity").innerHTML = groups.length.toString();

	// c) Число женщин и число мужчин
	var mQ = 0;
	var fQ = 0;
	for (i = 0; i < people.length; i++) {
		if (people[i].gender == "m") {
			mQ++;
		} else if (people[i].gender == "f") {
			fQ++;
		}
	}
	id("m_quantity").innerHTML = String(mQ);
	id("f_quantity").innerHTML = String(fQ);

	// d) Средний возраст, старший и младший
	var avAge = 0;
	var iYoung = 0;
	var iOld = 0;
	var i = 0;
	while (i < people.length) {
		avAge += people[i].age / people.length;
		if (people[iYoung].age > people[i].age) {
			iYoung = i;
		}
		if (people[iOld].age < people[i].age) {
			iOld = i;
		}
		i++;
	}
	id("av_age").innerHTML = String(Math.round(avAge));
	id("min_name").innerHTML = people[iYoung].name.first +
		" " + people[iYoung].name.last;
	id("min_age").innerHTML = people[iYoung].age;
	id("max_name").innerHTML = people[iOld].name.first +
		" " + people[iOld].name.last;
	id("max_age").innerHTML = people[iOld].age;

	// e) Список групп
	var g;
	var html = "";
	groups.forEach(function(group){
		g = GetGroupInfo(group, people);
		html += "<tr><td>" + group +
			"</td><td>" + g.quantity +
			"</td><td>" + g.avAge +
			"</td><td>" + g.m_quantity +
			"</td><td>" + g.f_quantity + "</td></tr>\n";
	});
	id("groups_info").innerHTML = html;

	// g) Сортировка и вывод списка студентов
	people.sort(StudentsCompare);
	var tbody = "";
	var template = "<tr><td>#l#</td><td>#f#</td><td>#gr#</td><td>#age#</td><td>#gender#</td></tr>";
	for(i=0; i<people.length; i++){
		html = template.replace("#l#",people[i].name.last);
		html = html.replace("#f#",people[i].name.first);
		html = html.replace("#gr#",people[i].group);
		html = html.replace("#age#",people[i].age);
		tbody += html.replace("#gender#",people[i].gender);
	}
	id("students_list").innerHTML = tbody;
}

/**
 * Короткая обертка для document.getElementById
 * @param x - id элемента
 * @returns {Element}
 */
function id(x) {
	return document.getElementById(x);
}

/**
 * Получить информацию о группе
 * @param groupNumber
 * @param people
 * @returns {{quantity: number, avAge: number, m_quantity: number, f_quantity: number}}
 */
function GetGroupInfo(groupNumber, people) {
	var result = {
		"quantity" : 0,
		"avAge" : 0,
		"m_quantity" : 0,
		"f_quantity" : 0
	};
	var sumAge = 0;
	people.forEach(function(student){
		if (student.group == groupNumber) {
			sumAge += student.age;
			result.quantity++;
			if (student.gender == "m") {
				result.m_quantity++;
			} else if (student.gender == "f") {
				result.f_quantity++;
			}
		}
	});
	result.avAge = Math.round(sumAge / result.quantity);
	return result;
}

/**
 * Сравнивает двух студентов для метода sort
 * @param a
 * @param b
 * @returns {number}
 */
function StudentsCompare(a,b) {
	var aName = a.name.last + a.name.first;
	var bName = b.name.last + b.name.first;
	if (aName > bName) {
		return 1;
	} else if (aName < bName) {
		return -1;
	} else {
		return 0;
	}
}