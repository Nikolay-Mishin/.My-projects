function out(text) {
    document.querySelector("#out").innerHTML += `${text}<br>\n`;
}


var d1 = new Date();
out(d1);
d1 = new Date(2018, 0, 10);
out(d1);
d1 = new Date(2018, 0, 10, 11, 11, 11);
out(d1);
out("Год: " + d1.getFullYear());
out("Месяц: " + d1.getMonth());
out("День: " + d1.getDate());
d1 = new Date(10000000000); //миллисекунды с 01.01.1970
out(d1.toLocaleDateString());
var sec = 9999999; //типа это секунды с 01.01.1970
d1 = new Date(sec * 1000); //так их переводят в JS

d1 = new Date(2015, 2, 24);
out(d1.valueOf() / 1000);