/* ...................................... 

    	_PRACTICE-1
		
...................................... */

// https://stepik.org/catalog
// Stepik2708rbhbnj321_01

// https://stepik.org/users/71266143/courses

// http://www.sql.ru/forum/146279/zakryt-bat-posle-vypolneniya

// https://ru.stackoverflow.com/questions/776289/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%BA%D0%BE%D1%80%D0%B5%D0%BD%D1%8C-n-%D0%BE%D0%B9-%D1%81%D1%82%D0%B5%D0%BF%D0%B5%D0%BD%D0%B8

// ===== //---// =====



var tC = Number (prompt ());
var tF = 9 / 5 * tC + 32;
console.log (tF);



// ===== //---// =====



// 1.4 Условия

/*
Кто старше?

Программа принимает три числа: возраст Антона, возраст Бориса и возраст Виктора. Определите, кто из них старше остальных.

Входные данные

Входная строка содержит три натуральных числа: возраст Антона, возраст Бориса и возраст Виктора.

Выходные данные

Выходная строка должна содержать латинскую букву – код того человека, который старше всех. Код Антона – 'A', код Бориса – 'B', код Виктора – 'C'. Если двое старше третьего, нужно вывести два кода через пробел (в алфавитном порядке). Например, если Антон и Виктор старше Бориса, программа должна вывести 'A C'. Если все трое одного возраста, программа должна вывести число 0.

Замечание

Будьте внимательнее при ответах, русские буквы 'A' и 'С' не принимаются в качестве допустимых ответов.

Sample Input 1:

10
12
23
Sample Output 1:

C
Sample Input 2:

12
10
12
Sample Output 2:

A C
*/

var a = Number (prompt ());
var b = Number (prompt ());
var c = Number (prompt ());

if (a == b && b == c) {
    console.log ("0"); 
}
else if (a > b && a > c) {
    console.log ("A");
}
else if (b > a && b > c) {
    console.log ("B");
}
else if (c > a && c > b) {
    console.log ("C"); 
}
else if (a == b && b > c) {
    console.log ("A B");
}
else if (a == c && c > b) {
    console.log ("A C");
}
else {
    console.log ("B C");
}

// Решение

let A = Number (prompt());
let B = Number (prompt());
let C = Number (prompt());
if (A == B && B == C)
    console.log('0');
else if (A > B && A > C)
    console.log('A');
else if (B > A && B > C)
    console.log('B');
else if (C > A && C > B)
    console.log('C');
else if (A > C)
    console.log('A B');
else if (A > B)
    console.log('A C');
else
    console.log('B C');

// ===== //---// =====



/*
Треугольник ли?

Даны три натуральных числа a, b, c, записанные в отдельных строках. Определите, существует ли невырожденный треугольник с такими сторонами.

Если треугольник существует, выведите строку YES, иначе выведите строку NO.

Sample Input:

3
4
5
Sample Output:

YES
*/

a = Number (prompt ());
b = Number (prompt ());
c = Number (prompt ());

if ( (a < b + c) && (b < a + c) && (c < a + b) ) {
    console.log ("YES");
}
else {
    console.log ("NO");
}

// ===== //---// =====



// 1.5 Строки

/*
Вывести «число» или «не число» в зависимости от того, что пользователь ввел.

Sample Input 1:

8
Sample Output 1:

число
Sample Input 2:

hi
Sample Output 2:

не число
*/

// ===== Test isNormalInteger () =====

function isNormalInteger (str) {
    //var n = Math.floor (Number (str));
    var n = Number (str);
    return String (n) === str && n >= 0;
}

// Test ()

function test (str) {
	var n = isNormalInteger (str) ? "Yes" : "No";
	return n;
}

// ===== //---// =====

var s = prompt ();

if (test (s) == "Yes") { console.log ("число"); }
else { console.log ("не число"); }

// ===== //---// =====



/*

*/