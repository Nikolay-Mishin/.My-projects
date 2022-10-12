
document.addEventListener('DOMContentLoaded', main);

function main() {
    var students = people;
}

function showTab(idElement) {
    document.querySelectorAll('.tab').forEach(function(el) {
        el.classList.remove('active');
    });

    document.getElementById(idElement).classList.add('active');
}
