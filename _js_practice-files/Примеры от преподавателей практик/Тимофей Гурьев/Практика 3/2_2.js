function id(id) {
	return document.getElementById(id);
}

function ShowStats() {

	people.sort(function (a, b) {
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
	
	showGroups();
	showTable();

}

function Init() {
	ShowStats();

	document.querySelectorAll("#students_list thead td")
	.forEach(function (sender) {
		sender.addEventListener("click", sortStudents);
	});

}

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
	showTable();

}

function showTable() {
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
		"</tr>";
	}
	document.querySelector("#students_list tbody")
	.innerHTML = strTBody;
}

function showGroups()  {
	var groups = {};
	for (person in people)  {
		groups[people[person].group] = 0;
	}
	for (group in groups) {
		document.querySelector("#groups_list").innerHTML +=
			"<li data-group='" + group + "'>Группа " + group + "</li>";
	}
	document.querySelector("#groups_list").innerHTML +=
			"<li data-group='all'>Все</li>";
			
	document.querySelectorAll("#groups_list li").forEach(function(sender) {
		sender.addEventListener("click", filterStudents);		
	});
	
	
}

function filterStudents() {
	var groupName = this.dataset.group;
	if (groupName == "all") {
		document.querySelectorAll("#students_list tbody tr").forEach(function (tr) {
			tr.classList.remove("hidden");
		});
	} else {
		document.querySelectorAll("#students_list tbody tr").forEach(function (tr) {
			if (tr.dataset.group == groupName ) {
				tr.classList.remove("hidden");
			} else {
				tr.classList.add("hidden");
			}
	});
	}

}
window.addEventListener("load", Init);
