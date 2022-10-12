"use strict"
function id(id) {
	return document.getElementById(id);
}

function ShowStudents() {
	var g = {
		"m": "м",
		"f": "ж"
	};
	var strTmp = "";
	var template = "<tr><td>#last#</td><td>#first#</td><td class='group'>#group#</td><td>#age#</td><td>#gender#</td></tr>";
	var row = "";
	var gender = "";
	for (var i = 0; i < people.length; i++) {
		row = template.replace("#last#", people[i].name.last);
		row = row.replace("#first#", people[i].name.first);
		row = row.replace("#group#", people[i].group);
		row = row.replace("#age#", people[i].age);
		row = row.replace("#gender#", g[people[i].gender]);
		strTmp += row;
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTmp;
}

function SortPeople(e) {
	var key = this.dataset.sort;
	people.sort(function (a, b) {
		var va;
		var vb;
		if (key == "last" || key == "first") {
			va = a.name;
			vb = b.name;
		} else {
			va = a;
			vb = b;
		}
		if (va[key] > vb[key]) {
			return 1;
		} else if (va[key] < vb[key]) {
			return -1;
		} else {
			return 0;
		}

	});
	
	if (this.classList.contains("asc")) {
		people.reverse();
		ClearClasses()
		this.classList.add("desc");
	} else {
		ClearClasses()
		this.classList.add("asc");
	}
	ShowStudents();
}

function ClearClasses() {
	document.querySelectorAll("#students_list thead td")
	.forEach(function (sender) {
		sender.classList.remove("desc", "asc");
	});	
}

function prepareGroups() {
	var groups = {};
	for (var i = 0; i < people.length; i++) {
		groups[people[i].group] = 0;
	}
	for (var a in groups) {
		document.getElementById("groups").innerHTML
			+= "<li data-group='" + a + "'>Группа " + a + "</li>";
	}
	document.querySelectorAll("#groups li")
	.forEach(function (sender) {
		sender.addEventListener("click", FilterTable);
	});	
}
function FilterTable() {
	var groupName = this.dataset.group;
	document.querySelectorAll("#students_list tbody tr")
	.forEach(function (tr) {
		if(tr.querySelector(".group").innerHTML == groupName) {
			tr.classList.remove("hidden");
		} else {
			tr.classList.add("hidden");
		}
	});	
}
function Init() {
	prepareGroups();
	document.querySelectorAll("#students_list thead td")
	.forEach(function (sender) {
		sender.addEventListener("click", SortPeople);
	});

	ShowStudents();
}

window.addEventListener("load", Init);
