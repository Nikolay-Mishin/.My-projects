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

	document.querySelector("#new-student")
		.addEventListener("click", function(){
			window.location.hash = "#new-student-page";
			ShowPage("#new-student-page");
	});

	document.querySelector("#new-student-page form")
		.addEventListener("submit", AddStudent);

	ShowStats();
	ShowStudents();
	PrepareForms();
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
	var link = document.querySelector(".pages-nav [href='" + pageName +	"']");
	if (link !== null) {
			link.parentElement.classList.add("active");
	}

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

function ShowStudents() {
	var rusGend = {
		'm':'м',
		'f':'ж'
	};
	var trows = "";
	var tmp = "";
	var template = "<tr><td>#last#</td><td>#name#</td><td>#group#</td>" +
		"<td>#age#</td><td>#gender#</td><td>#del# #edit#</td></tr>";
	people.forEach(function(val) {
		tmp = template.replace("#last#",val.name.last);
		tmp = tmp.replace("#name#",val.name.first);
		tmp = tmp.replace("#group#",val.group);
		tmp = tmp.replace("#age#",val.age);
		tmp = tmp.replace("#del#","<button type=\"button\" data-id=\"" +
			val._id +
			"\" class=\"btn btn-default del\"><span class=\"glyphicon glyphicon-remove\"></span></button>");
		tmp = tmp.replace("#edit#","<button type=\"button\" data-id=\"" +
			val._id +
			"\" class=\"btn btn-default edit\"><span class=\"glyphicon glyphicon-pencil\"></span></button>");
		trows += tmp.replace("#gender#",rusGend[val.gender]);
	});
	document.getElementById("students-list").innerHTML = trows;

	document.querySelectorAll(".del").forEach(function(obj) {
		obj.addEventListener("click", DeleteStudent);
	});
}

function DeleteStudent() {
	var id = this.dataset.id;
	for (var i=0; i<people.length; i++){
		if (people[i]._id === id) {
			people.splice(i, 1);
			break;
		}
	}
	ShowStats();
	ShowStudents();
	PrepareForms();
}

function PrepareForms() {
	var groups = [];
	for (var i = 0; i < people.length; i++) {
		if (groups.indexOf(people[i].group) === -1) {
			groups.push(people[i].group);
		}
	}
	groups.sort();

	var sel = document.querySelector("#group");
	sel.innerHTML = "";
	groups.forEach(function(gr){
		sel.innerHTML += "<option value='" + gr + "'>" + gr + "</option>";
	});

	document.querySelector("#_id").value = generateUUID();
}

function AddStudent(e) {
	e.preventDefault();
	var student = {
		_id: this.querySelector("#_id").value,
		age: Number(this.querySelector("#age").value),
		group: Number(this.querySelector("#group").value),
		name: {
			last: this.querySelector("#last").value,
			first: this.querySelector("#first").value,
		},
		gender: this.querySelector("input[name='gender']:checked").value,
	}
	people.push(student);
	ShowStats();
	ShowStudents();
	PrepareForms();
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
