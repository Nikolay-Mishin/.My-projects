
document.addEventListener('DOMContentLoaded', main);

function main() {
    tick();
}

function tick(id) {
    showWatch(id);
    setTimeout(tick, 10);
}

function showWatch() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var millisec = now.getMilliseconds();

    var clock = document.getElementById('clock');
    clock.innerText = `${hours}:${minutes}:${seconds}.${millisec}`;
}
