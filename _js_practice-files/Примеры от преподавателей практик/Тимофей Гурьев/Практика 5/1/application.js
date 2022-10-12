function id(id) {
	return document.getElementById(id);
}

/* Скрыть все вкладки */
function HideAllPages() {
	document.querySelectorAll(".page").forEach(function (page) {
		page.classList.add("hidden");
	});
	document.querySelectorAll(".pages-nav li").forEach(
		function (page) {
		page.classList.remove("active");
	});
	/* Другой способ
	var pages = document.querySelectorAll(".page");
	for (var i=0; i<pages.length; i++) {
	pages[i].classList.add("hidden");
	}*/
}

/* Показать вкладку по ID. ID писать с # */
function ShowPage(pageName) {
	if (document.querySelector(".page" + pageName) != null) {
		HideAllPages();
		document.querySelector(pageName).classList.remove("hidden");
		var navA = document.querySelector(
				".pages-nav a[href=\"" + pageName + "\"]");
		if (navA != null) {
			navA.parentElement.classList.add("active");
		}
	} 
}

/* Показать статистику */
function ShowStats() {
	var quantityF = 0;
	var quantityM = 0;
	var ageSum = 0;
	var groups = {};
	var minIndex = 0;
	var maxIndex = 0;
	for (var i = 0; i < people.length; i++) {
		/* Самый молодой */
		if (people[i].age < people[minIndex].age) {
			minIndex = i;
		}
		/* Сумма возрастов (нужно для среднего) */
		ageSum += people[i].age;
		
		/* Число мужчин и женщин - два способа */
		if (people[i].gender == "m") {
			quantityM++;
		}		
		quantityF += (people[i].gender == "f") ? 1 : 0;

		/* Список груп и статистика по группам */
		if (people[i].group in groups) {
			/* Число студетов в группе */
			groups[people[i].group].quantity++;
			/* Сумма возрастов в группе */
			groups[people[i].group].age_sum += people[i].age;
			if (people[i].gender == "m") {
				groups[people[i].group].age_sum_m += people[i].age;
			}
			if (people[i].gender == "f") {
				groups[people[i].group].age_sum_f += people[i].age;
			}
			/* Число мужчин и число женщин в группе */
			groups[people[i].group].quantity_m +=
			(people[i].gender == "m") ? 1 : 0;
			groups[people[i].group].quantity_f +=
			(people[i].gender == "f") ? 1 : 0;
		} else {
			/* Если группы еще нет в списке */
			groups[people[i].group] = {
				"quantity": 1,
				"age_sum": people[i].age,
				"quantity_m": (people[i].gender == "m") ? 1 : 0,
				"quantity_f": (people[i].gender == "f") ? 1 : 0, 
				"age_sum_m" : 0,
				"age_sum_f" : 0
			};
			if (people[i].gender == "m") {
				groups[people[i].group].age_sum_m += people[i].age;
			}
			if (people[i].gender == "f") {
				groups[people[i].group].age_sum_f += people[i].age;
			}
		}

	}

	var m = Object.keys(groups);

	id("stat_students_quantity").innerHTML = people.length;
	id("stat_m_quantity").innerHTML = quantityM;
	id("stat_f_quantity").innerHTML = quantityF;
	id("stat_group_quantity").innerHTML = m.length;
	id("stat_group_av_m").innerHTML = Math.round(quantityM / m.length);
	id("stat_group_av_f").innerHTML = Math.round(quantityF / m.length);

	id("stat_av_age").innerHTML = 
		Math.round(ageSum / people.length);
	
		
	var groupTemplate = 
		"<p><b>Группа #g_name#</b><br>Студентов: #g_q#<br>" + 
		"Ср. возраст: #g_av_age#<br>Мужчин: #g_m#, ср. возраст #avm#<br>" + 
		"Женщин: #g_f#, ср. возраст #avf#</p>";
	var strGroup = "";	
	
	for (var a in groups) {
		strGroup = 
			groupTemplate.replace("#g_name#",a);
		strGroup = 
			strGroup.replace("#g_q#",groups[a].quantity);	
		strGroup = 
			strGroup.replace("#g_av_age#",
			Math.round(groups[a].age_sum / groups[a].quantity));
		strGroup = 
			strGroup.replace("#g_m#",groups[a].quantity_m);
		strGroup = 
			strGroup.replace("#g_f#",groups[a].quantity_f);	
		strGroup = 
			strGroup.replace("#avm#",Math.round(groups[a].age_sum_m/groups[a].quantity_m));				
		strGroup = 
			strGroup.replace("#avf#",Math.round(groups[a].age_sum_f/groups[a].quantity_f));							
		id("page-groups").innerHTML += 
			strGroup;
	}

	people.sort(function(a,b) {
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
	});
	


	
}

/* Показать список студентов */
function ShowTable() {
	var strTBody = "";
	var mg = {
		"m": "м",
		"f": "ж"
	}
	for (var i = 0; i < people.length; i++) {
		strTBody += "<tr><td>" + people[i].name.last +
		"</td><td>" + people[i].name.first + "</td>" +
		"<td>" + people[i].group + "</td>" +
		"<td>" + people[i].age + "</td>" +
		"<td>" + mg[people[i].gender] + "</td>" +
		"<td>" + 
		
		"<button type='button' data-id='" +
		people[i]._id +	"' class='btn btn-default del'>" + 
		"<span class='glyphicon glyphicon-remove'></span></button>" +
		
		"<button type=\"button\" data-id=\"" +
		people[i]._id +	"\" class=\"btn btn-default edit\">" + 
		"<span class=\"glyphicon glyphicon-pencil\" ></span></button>" +
		
		"</td>" + 
		"</tr>";
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTBody;
	
	document.querySelectorAll(".del")
	.forEach(function (sender) {
		sender.addEventListener("click", DelStudent);
	});
	document.querySelectorAll(".edit")
	.forEach(function (sender) {
		sender.addEventListener("click", ShowEditStudentForm);
	});	
}

/* Сортировать список студентов */
function sortStudents() {
	var sender = this;

	people.sort(function (a, b) {
		var key = sender.getAttribute("data-sort");
		if (key == "lastname" || key == "firstname") {
			key2 = (key == "lastname") ? "last" : "first";
			if (a.name[key2] > b.name[key2]) {
				return 1;
			} else if (a.name[key2] < b.name[key2]) {
				return -1;
			} else {
				return 0
			}
		} else {
			if (a[key] > b[key]) {
				return 1;
			} else if (a[key] < b[key]) {
				return -1;
			} else {
				return 0
			}
		}

	});

	var head = document.querySelectorAll("#students_list thead td");
	if (sender.classList.contains("asc")) {
		people.reverse();
		head.forEach(function (td) {
			td.classList.remove("asc");
			td.classList.remove("desc");
		});
		sender.classList.add("desc");
	} else {
		head.forEach(function (td) {
			td.classList.remove("asc");
			td.classList.remove("desc");
		});
		sender.classList.add("asc");
	}
	ShowTable();

}

/* Удаление студента */
function DelStudent() {
	var id = this.getAttribute("data-id");
	for (var i = 0; i < people.length; i++) {
		if (people[i]._id == id) {
			people.splice(i,1);
			break;
		}
	}
	ShowStats();
	ShowTable();
	PrepareAddStudentForm();
}

/* Подготовка формы добавления студента */
function PrepareAddStudentForm() {
	var groups = [];
	for(a in people){
		if (groups.indexOf(people[a].group) == -1) {
			groups.push(people[a].group);
		}
	}
	groups.sort();
	var options = "";
	for (a in groups) {
		options += "<option value='" + groups[a] +
			"'>Группа " + groups[a] + "</option>";
	}
	document.getElementById("group").innerHTML = options;
}

/**/
function ShowEditStudentForm(){
	var _id = this.getAttribute("data-id");
	for (var i = 0; i < people.length; i++) {
		if (people[i]._id == _id) {
			id("_id").value = people[i]._id;
			id("age").value = people[i].age;
			id("first").value = people[i].name.first;
			id("last").value = people[i].name.last;
			id("group").value = people[i].group;
			
			document.querySelector("[name=gender][value='" +people[i].gender+ "']").checked = true;
			
			ShowPage("#page-add-student");
			break;
		}
	}	
}

function SaveNewStudent(e) {
	e.preventDefault();
	if (id("_id").value == "") {
		var student = {
			"_id" : guid(),
			"age" : document.getElementById("age").value,
			"group" : id("group").value,
			"name" : {
				"first" : id("first").value,
				"last" : id("last").value
			},
			"gender" : document.querySelector("[name=gender]:checked").value
		}
		people.push(student);
	} else {
		var _id = id("_id").value;
		for (var i = 0; i < people.length; i++) {
			if (people[i]._id == _id) {
				people[i].name.first = id("first").value;
				people[i].name.last = id("last").value;
				people[i].age = id("age").value;
				people[i].group = id("group").value;
				people[i].gender = document.querySelector("[name=gender]:checked").value;
			}
		}
	}
	
	ShowStats();
	ShowTable();
	PrepareAddStudentForm();
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
	window.addEventListener("hashchange", function () {
		ShowPage(window.location.hash);
	});

	if (window.location.hash != "") {
		ShowPage(window.location.hash);
	} else {
		ShowPage("#page-control");
	}
	
	document.querySelectorAll("#students_list thead th")
	.forEach(function (sender) {
		sender.addEventListener("click", sortStudents);
	});

	document.getElementById("save-new-student").addEventListener("click",SaveNewStudent);
	
	ShowStats();
	ShowTable();
	PrepareAddStudentForm()
	
}

window.addEventListener("DOMContentLoaded", Init);
