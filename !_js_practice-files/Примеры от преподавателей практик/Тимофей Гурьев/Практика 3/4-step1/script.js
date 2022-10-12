"use strict";

function Init() {
  ShowStudents();

  function ShowStudents() {
    let tbody = document.querySelector("#people tbody");
    let html = "";
    people.forEach(function (person) {
      html += "<tr><td>" + person.name.last
       + "</td><td>" + person.name.first
       + "</td><td>" + person.group
       + "</td><td>" + person.age
       + "</td><td>" + person.gender + "</td></tr>";
    });
    tbody.innerHTML = html;
  }
}

window.addEventListener("load", Init);