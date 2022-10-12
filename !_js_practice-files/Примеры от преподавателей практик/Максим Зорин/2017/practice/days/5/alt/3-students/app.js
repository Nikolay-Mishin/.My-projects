
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;
    showStudents(students);
}

function showStudents(students) {
    var tbody = document.querySelector('#studentsTab table tbody');
    tbody.innerHTML = '';
    students.forEach(function(person) {
        tbody.innerHTML += "<tr>" +
            "<td>" + person.name.last +
            "<td>" + person.name.first +
            "<td>" + person.group +
            "<td>" + person.age +
            "<td>" + (person.gender == 'f'? 'Ж' : 'М') +
        "</td>";
    });
}
