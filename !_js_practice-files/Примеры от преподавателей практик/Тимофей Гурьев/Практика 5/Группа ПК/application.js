window.addEventListener("DOMContentLoaded", Init);

function Init() {
	/*document.querySelectorAll(".page-tabs a").forEach(function(tab){
		tab.addEventListener("click", OnTabClick);
	});*/
	window.addEventListener("hashchange", function () {
		ShowPage(window.location.hash);
	});
	if (window.location.hash != "") {
		ShowPage(window.location.hash);
	} else {
		ShowPage("#page-control");
	}
	
	document.querySelector("#btn-add-student")
		.addEventListener("click", function(){
			ShowPage("#page-add-student");
	});
	document.querySelector("#save-new-student")
		.addEventListener("click", SaveNewStudent);	
		
	ShowGroups();
	ShowStudents();
	


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
	if (document.querySelector(".page-tabs [href='" + pageName + "']") != null) {
		document.querySelector(".page-tabs [href='" + pageName + "']").parentNode
			.classList.add("active");
	}
}

/* Клик по ярлыку вкладки */
function OnTabClick() {
	ShowPage(this.getAttribute("href"));
}

function ShowGroups() {
	document.querySelector("#groups-buttons").innerHTML = "";
	document.querySelector("#group").innerHTML = "";
	var groups = {};
	for (person in people)  {
		groups[people[person].group] = 0;
	}
	for (group in groups) {
		document.querySelector("#groups-buttons").innerHTML +=
			"<button type=\"button\" class=\"btn btn-default\" data-group=\"" +group+ "\">" + group + "</button>";
		document.querySelector("#group").innerHTML += 
			"<option value='" + group + "'>Группа " + group + "</option>";
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
		"<td>" + 
		
		"<button type='button' data-id='" +
		people[i]._id +	"' class='btn btn-default del'>" + 
		"<span class='glyphicon glyphicon-remove'></span></button>" +
		
		"<button type=\"button\" data-id=\"" +
		people[i]._id +	"\" class=\"btn btn-default edit\">" + 
		"<span class=\"glyphicon glyphicon-pencil\" ></span></button>" +
		
		"</tr>";
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTBody;
	
	document.querySelectorAll("button.del").forEach(function(el){
		el.addEventListener("click", RemoveStudent);
	});
	
	document.querySelectorAll("button.edit").forEach(function(el){
		el.addEventListener("click", EditStudent);
	});	
}

/* Удаление студента */
function RemoveStudent() {
	var id = this.getAttribute("data-id");
	for (var i=0; i<people.length; i++) {
		if (people[i]._id == id) {
			people.splice(i,1);
			break;
		}
	}
	ShowGroups();
	ShowStudents();
}

/* Показать форму изменения студента */
function EditStudent() {
	var id = this.getAttribute("data-id");
	document.getElementById("_id").value = id;
	for (var i=0; i<people.length; i++) {
		if (people[i]._id == id) {
			document.getElementById("first").value = people[i].name.first;
			document.getElementById("last").value = people[i].name.last;
			document.getElementById("age").value = people[i].age;
			document.querySelector("#group option[value='" +people[i].group+ "']").selected = true;
			document.querySelector("input[name=gender][value='" +people[i].gender+ "']").checked = true;
			ShowPage("#page-add-student");
			break;
		}
	}	
}

/* Добавление студента */
function SaveNewStudent(e) {
	e.preventDefault();
	if (document.getElementById("_id").value == "") {
	var student = {
		"_id" : guid(),
		"name" : {
			"first" : document.getElementById("first").value,
			"last" : document.getElementById("last").value
		},
		"group" : document.getElementById("group").value, 
		"age" : document.getElementById("age").value, 
		"gender" : document.querySelector("[name=gender]:checked").value
	};
	people.push(student);
	} else {
		var id = document.getElementById("_id").value;
		for (var i=0; i<people.length; i++) {
			if (people[i]._id == id) {
				people[i].name.first = document.getElementById("first").value;
				people[i].name.last = document.getElementById("last").value;
				people[i].age = document.getElementById("age").value;
				people[i].group = document.querySelector("#group").value;
				people[i].gender = document.querySelector("input[name=gender]:checked").value;
				break;
			}
		}			
	}
	ShowGroups();
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