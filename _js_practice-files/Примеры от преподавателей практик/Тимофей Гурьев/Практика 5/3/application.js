"use strict";
function id(id) {
	return document.getElementById(id);
}

/* Скрывает все вкладки */
function HideAllPages() {
	document.querySelectorAll(".page").forEach(function(div){
		div.classList.add("hidden");
	});
	document.querySelectorAll(".pages-nav li").forEach(function(li){
		li.classList.remove("active");
	});	
}

function ShowPage(id) {
	if (id != "" && document.querySelector(".page"+id) != null) {		
		HideAllPages();
		document.querySelector(id).classList.remove("hidden");
		var navLink = document.querySelector(".pages-nav a[href='" + id + "']");
		if (navLink != null) {
			navLink.parentElement.classList.add("active");
		}
	}
}

function ShowStats() {
	id("stat_students_quantity").innerHTML = people.length;

	var groups = {};
	for (var i = 0; i < people.length; i++) {
		groups[people[i].group] = {
			"quantity": 0,
			"ageSum": 0,
			"quantityM": 0,
			"quantityF": 0,
			"ageSumM" : 0,
			"ageSumF" : 0
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
			groups[people[i].group].ageSumM += people[i].age;
			quantityM += 1;
		}
		if (people[i].gender == "f") {
			groups[people[i].group].quantityF += 1;
			groups[people[i].group].ageSumF += people[i].age;
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


		var strTmp = "";
	for (var a in groups) {
		strTmp += "<p><b>Группа " + a + "</b><br>";
		strTmp += "Студентов " + groups[a].quantity + "<br>";
		strTmp += "Средний возраст " +
		Math.round(groups[a].ageSum / groups[a].quantity) + "<br>";
		strTmp += "Мужчин " + groups[a].quantityM + "<br>";
		strTmp += "Ср. возраст мужчин " + groups[a].ageSumM/groups[a].quantityM + "<br>";
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

function ShowStudents() {
	var g = {
		"m": "м",
		"f": "ж"
	};
	var strTmp = "";
	var template = "<tr><td>#last#</td><td>#first#</td><td class='group'>#group#</td><td>#age#</td><td>#gender#</td><td><button type='button' data-id='#_id#' class='btn btn-default del'><span class='glyphicon glyphicon-remove'></span></button><button type='button' data-id='#_id#' class='btn btn-default edit'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";
	var row = "";
	var gender = "";
	for (var i = 0; i < people.length; i++) {
		row = template.replace("#last#", people[i].name.last);
		row = row.replace("#first#", people[i].name.first);
		row = row.replace("#group#", people[i].group);
		row = row.replace("#age#", people[i].age);
		row = row.replace("#gender#", g[people[i].gender]);
		row = row.replace(/#_id#/g, people[i]._id);
		strTmp += row;
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTmp;
	
	/* Клик по кнопке удаления студента */
	document.querySelectorAll(".del").forEach(
		function(elem){
			elem.addEventListener("click",RemoveStudent);
		}
	);
	/* Клик по кнопке добавления студента */
	document.querySelectorAll(".edit").forEach(
		function(elem){
			elem.addEventListener("click",ShowEditStudent);
		}
	);
}

/* Удаление студента */
function RemoveStudent() {
	var _id = this.getAttribute("data-id");
	for(var a in people) {
		if (people[a]._id == _id) {
			people.splice(a,1);
			break;
		}
	}
	ShowStats();
	ShowStudents();
}

/* Показать форму редактирования студента */
function ShowEditStudent() {
	var _id = this.getAttribute("data-id");
	for(var a in people) {
		if (people[a]._id == _id) {
			id("_id").value = _id;
			id("age").value = people[a].age;
			id("group").value = people[a].group;
			id("first").value = people[a].name.first;
			id("last").value = people[a].name.last;
			document.querySelector("[name=gender][value=" + people[a].gender + "]").checked = true;
			break;
		}
	}
	ShowPage("#page-add-student");
}

/* Подготовить форму добавления студента */
function PrepareAddStudentForm() {
	var groups = {};
	for (var a in people) {
		groups[people[a].group] = 0;
	}
	var options = "";
	for (var a in groups) {
		options += "<option value='" + a + "'>Группа " + a + "</option>";
	}
	id("group").innerHTML = options;
}

/* Сохраниить студента */
function SaveStudent(e) {
	e.preventDefault();
	if (id("_id").value == "") {
		var student = {
			"_id" : guid(),
			"age" : id("age").value,
			"group" : id("group").value,
			"name" : {
				"first" : id("first").value,
				"last" : id("last").value
			},
			"gender" : document.querySelector("[name=gender]:checked").value
		};	
		people.push(student);
	} else {
		var _id = id("_id").value;
		for(var a in people) {
			if (people[a]._id == _id) {
				people[a].age = id("age").value;
				people[a].group = id("group").value;
				people[a].name.first = id("first").value;
				people[a].name.last = id("last").value;
				people[a].gender = document.querySelector("[name=gender]:checked").value;
				break;
			}
		}		
	}	
	
	id("_id").value = "";
	id("age").value = "";
	id("group").value = "";
	id("first").value = "";
	id("last").value = "";
			
	ShowStats();
	ShowStudents();
	ShowPage("#page-students");
}

/* Unique ID */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function Init() {

	window.addEventListener("hashchange",function(){
		ShowPage(window.location.hash);
	});
	
	if (window.location.hash != "") {
		if (document.querySelector(".page"
					+window.location.hash) != null) {
			ShowPage(window.location.hash);
		} else {
			ShowPage("#page-control");
		}		
	} else {
		ShowPage("#page-control");
	}
		
	id("save-new-student").addEventListener("click",SaveStudent);
	
	ShowStats();
	ShowStudents();
	PrepareAddStudentForm();

}

window.addEventListener("DOMContentLoaded", Init);