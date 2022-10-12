/* ...................................... 

    	1.6 Строки
		
...................................... */

// ===== Задача № 2 =====

/*
Для введенной строки вывести «короткая», если она короче шести символов.

Sample Input 1:

hello
Sample Output 1:

короткая
Sample Input 2:

привет
Sample Output 2:
*/

var s = prompt ();

if (s.length < 6) {
    console.log ("короткая");
}
else {
    console.log ("");
}



/*
Решение
*/

let line = prompt();
if (line.length < 6)
    console.log('короткая');

// ===== //---// =====



// ===== Задача № 3 =====

/*
Подсчитать число пробелов в веденной строке.

Подсказка: метод .split(" ") строки делит ее на слова, разделяя их пробелом. Получается массив, по его длине .length можно догадаться сколько было пробелов.

Sample Input:

Hello, World!
Sample Output:

1
*/

var s = prompt ();
var sp = s.split (" ");
var result = sp.length - 1;

console.log (result);



/*
Решение
*/

let str = prompt();
let spaces = str.split(' ').length - 1;
console.log(spaces);

// ===== //---// =====



// ===== Задача № 4 =====

/*
Дан номер карточки, в виде строки, состоящей из 4 блоков по 4 цифры.

Вывести номер карточки как строку без пробелов.

Считается, что карточка не начинается с нулей.

Подсказка

1) разделить строку на массив методом split, а затем склеить части.
2) с помощью метода replace заменить пробелы за ничто.

Sample Input:

1322 2429 0012 0052
Sample Output:

1322242900120052
*/

let str = prompt (); // '1322 2429 0012 0052'

let a = str.split (' ');
let j = a.join ('');
//console.log ("Склеить (a.join ('')): " + j);

let r = str.replace (/\s+/g, '');
//console.log ("Заменить (a.replace ()): " + r);

console.log (j);



/*
Решение
*/

let blocks = prompt();
let num = blocks.split(' ').join('');
console.log(num);

let blocks = prompt();
let num = blocks.replace(/ /g, '');
console.log(num);
