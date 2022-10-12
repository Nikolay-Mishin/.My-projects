function id(id) {
	return document.getElementById(id);
}

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
				"quantity_f": (people[i].gender == "f") ? 1 : 0
			};
		}

	}

	var m = Object.keys(groups);

	id("stat_students_quantity").innerHTML = people.length;
	id("stat_group_quantity").innerHTML = m.length;
	id("stat_m_quantity").innerHTML = quantityM;
	id("stat_f_quantity").innerHTML = quantityF;
	id("stat_av_age").innerHTML = 
		Math.round(ageSum / people.length);
	id("min_age").innerHTML += 
		people[minIndex].name.first + " " +
		people[minIndex].name.last +
		" (" + people[minIndex].age + ")";	
		
	var groupTemplate = 
		"<p><b>Группа #g_name#</b><br>Студентов: #g_q#<br>" + 
		"Ср. возраст: #g_av_age#<br>Мужчин: #g_m#<br>" + 
		"Женщин: #g_f#</p>";
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
		id("stat_groups").innerHTML += 
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
	
	var strTBody = "";
	for (var i=0; i<people.length; i++) {
		strTBody += "<tr><td>" + people[i].name.last +
		"</td><td>" + people[i].name.first + "</td></tr>";
	}
	document.querySelector("#students_list tbody")
		.innerHTML = strTBody;

	
}

function Init() {
	ShowStats();
}

window.addEventListener("load", Init);
