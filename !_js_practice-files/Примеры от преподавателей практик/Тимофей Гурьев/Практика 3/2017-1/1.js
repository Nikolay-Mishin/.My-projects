Init();

function Init() {
	// Число студентов
	document.getElementById("students_quantity").innerHTML = people.length;

	//Число групп
	var groups = [];
	for (var i = 0; i < people.length; i++) {
		if (groups.indexOf(people[i].group) === -1) {
			groups.push(people[i].group);
		}
	}
	id("groups_quantity").innerHTML = groups.length;

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
	id("m_quantity").innerHTML = m;
	id("f_quantity").innerHTML = f;

	//Средний возраст студентов
	var sumAge = 0;
	people.forEach(function (value) {
		sumAge += value.age;
	});
	id("av_age").innerHTML = Math.round(sumAge / people.length);

	//Младший и старший
	var minI = 0;
	var maxI = 0;
	people.forEach(function (student, i) {
		if (student.age < people[minI].age) {
			minI = i;
		}
		if (student.age > people[maxI].age) {
			maxI = i;
		}
	});
	id("min_name").innerHTML = people[minI].name.first +
		" " + people[minI].name.last;
	id("min_age").innerHTML = people[minI].age;
	id("max_name").innerHTML = people[maxI].name.first +
		" " + people[maxI].name.last;
	id("max_age").innerHTML = people[maxI].age;

	var trows = "";
	groups.forEach(function(val) {
		var g = GetGroupInfo(val, people);
		trows += "<tr><td>" + val + "</td><td>" + g.quantity + "</td><td>" +
			g.av_age + "</td><td>" + g.m_quantity + "</td><td>" + g.f_quantity +
		 "</td></tr>";
	});
	id("groups_info").innerHTML = trows;

	people.sort(StCompare);

	var rusGend = {
		'm':'м',
		'f':'ж'
	};
	trows = "";
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
	id("students_list").innerHTML = trows;

}

function GetGroupInfo(group, people) {
	var result = {
		"quantity": 0,
		"av_age": 0,
		"m_quantity": 0,
		"f_quantity": 0
	};
	var sumAge = 0;
	for (var i = 0; i < people.length; i++) {
		if (people[i].group == group) {
			sumAge += people[i].age;
			if (people[i].gender == "m") {
				result.m_quantity++;
			} else if (people[i].gender == "f") {
				result.f_quantity++;
			}
			result.quantity++;
		}
	}
	result.av_age = Math.round(sumAge / result.quantity);
	return result;
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
 * Сравнение студентов по фамилии и имени
 * Используется в sort
 * @param a
 * @param b
 * @returns {number}
 */
function StCompare(a,b) {
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