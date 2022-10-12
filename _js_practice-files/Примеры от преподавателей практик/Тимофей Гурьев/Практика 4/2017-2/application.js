"use strict";
window.addEventListener("DOMContentLoaded", Init);

function Init() {
	if (window.location.hash !== "") {
		ShowPage(window.location.hash);
	} else {
		ShowPage("#control");
	}
	document.querySelectorAll(".pages-tabs a").forEach(function(el){
		el.addEventListener("click", OnTabClick);
	});

	ShowStats();
	ShowGroups();
}

function HideAllPages() {
	document.querySelectorAll(".page").forEach(function(el){
		el.classList.add("hidden");
	});
}

function OnTabClick() {
	ShowPage(this.getAttribute("href"));
}

function ShowPage(pageId) {
	HideAllPages();
	if (document.querySelector(".page" + pageId) === null) {
		pageId = "#control";
	}
	document.querySelector(pageId).classList.remove("hidden");
	//activate tab link
	document.querySelectorAll(".pages-tabs li").forEach(function(el){
		el.classList.remove("active");
	});
	document.querySelector(".pages-tabs a[href='" + pageId + "']")
		.parentElement.classList.add("active");
}

function ShowStats() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	id("stat-gr-cnt").innerHTML = String(groups.length);

	id("stat-st-cnt").innerHTML = String(people.length);

	var mQ = 0;
	var fQ = 0;
	for (var i = 0; i < people.length; i++) {
		if (people[i].gender == "m") {
			mQ++;
		} else if (people[i].gender == "f") {
			fQ++;
		}
	}
	id("stat-m-cnt").innerHTML = String(mQ);
	id("stat-f-cnt").innerHTML = String(fQ);

	var sumAge = 0;
	people.forEach(function(student){
		sumAge += Number(student.age);
	});

	id("stat-av-gr-cnt").innerHTML = Math.round(people.length / groups.length);
	id("stat-av-gr-age").innerHTML = Math.round(sumAge / people.length);
	id("stat-av-gr-m-cnt").innerHTML = Math.round(mQ / groups.length);
	id("stat-av-gr-f-cnt").innerHTML = Math.round(fQ / groups.length);
}

function ShowGroups() {
	var groups = [];
	people.forEach(function (student) {
		if (groups.indexOf(student.group) === -1) {
			groups.push(student.group);
		}
	});
	groups.sort();
	groups.forEach(function(group){
		var g = GetGroupInfo(group, people);
		console.log(g);
	});
}

function id(x) {
	return document.getElementById(x);
}

function GetGroupInfo(groupNumber, people) {
	var result = {
		"quantity" : 0,
		"m_quantity" : 0,
		"f_quantity" : 0,
		"m_av_age" : 0,
		"f_av_age" : 0
	};
	var mSumAge = 0;
	var fSumAge = 0;
	people.forEach(function(student){
		if (student.group == groupNumber) {
			result.quantity++;
			if (student.gender == "m") {
				result.m_quantity++;
				mSumAge += student.age;
			} else if (student.gender == "f") {
				result.f_quantity++;
				fSumAge += student.age;
			}
		}
	});
	result.m_av_age = Math.round(mSumAge / result.m_quantity);
	result.f_av_age = Math.round(fSumAge / result.f_quantity);

	return result;
}