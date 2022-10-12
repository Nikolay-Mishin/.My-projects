
document.addEventListener('DOMContentLoaded', main);




function main() {

    var start = new Date();

    for (var i = 0; i < 1000000; i += 1) {
        var clock = document.querySelector('#clock');
        clock.innerText = 'Hello, world!';
    }

    var finish = new Date();
    console.log(finish - start);
}

