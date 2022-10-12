/* ...................................... 

    	1.4 Условия
		
...................................... */

// ===== Задача № 2 =====

/*
Реализуйте алгоритм, представленный блок-схемой.

Max из двух

ввод a, b
{
a > b

да => вывод a

нет => вывод b
}


Sample Input:

8
11
Sample Output:

11
*/

a = Number (prompt ());
b = Number (prompt ());

if (a > b) {
    console.log (a);   
}
else {
    console.log (b);   
}



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
if (a > b) 
    console.log(a);
else
    console.log(b);

// ===== //---// =====



// ===== Задача № 3 =====

/*
Определить, делится ли нацело число a на число b. Вывести «делится» или «не делится».

Sample Input 1:

32
8
Sample Output 1:

делится
Sample Input 2:

45
4
Sample Output 2:

не делится
*/

let a = Number (prompt ());
let b = Number (prompt ());

if (a % b == 0) {
    console.log ("делится");   
}
else {
    console.log ("не делится");  
}



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
if (a % b == 0) 
    console.log('делится');
else
    console.log('не делится');

// ===== //---// =====



// ===== Задача № 4 =====

/*
Определите для a и b.

a/b<0

Если это верно, выведите YES, иначе выведите NO.

Sample Input:

2
1
Sample Output:

NO
*/

var a = Number (prompt ());
var b = Number (prompt ());

if (a / b < 0) {
    console.log ("YES");
}
else {
    console.log ("NO");
}



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
if (a/b < 0)
    console.log("YES");
else 
    console.log("NO");

// ===== //---// =====



// ===== Задача № 6 =====

/*
Даны три диапазона значений:

small — от 0 до 300
middle — от 301 до 1280
big — от 1281 до бесконечности

Определить, в какой диапазон входит введенное пользователем число.

Sample Input:

567
Sample Output:

middle
*/

let n = Number (prompt ());

range (n);

// ===== вхождение в диапазон =====

function range (x) {
	// small
	var small_min = 0;
	var small_max = 300;
	// medium
	var middle_min = 301;
	var middle_max = 1280;

	if (x >= small_min && x <= small_max) {
		console.log (_return ("small"));
	}
	else if (x >= middle_min && x <= middle_max) {
		console.log (_return ("middle"));
	}
	else {
		console.log (_return ("big"));
	}
	
	function _return (value) {
		return value;
	}
}

// ===== //---// =====



/*
Решение
*/

let n = Number(prompt())
if (n <= 300)
    console.log('small');
else if (n <= 1280)
    console.log('middle');
else
    console.log('big');

// ===== //---// =====



// ===== Задача № 8 =====

/*
Реализуйте алгоритм, представленный блок-схемой.

Какое из двух больше

ввод a, b
{
a > b

да => вывод "1"

нет => a = b
}
{
да => вывод "0"

нет => вывод "2"
}


Sample Input:

8
11
Sample Output:

2
*/

a = Number (prompt ());
b = Number (prompt ());

if (a > b) {
    console.log ("1"); 
}
else if (a == b) {
    console.log ("0"); 
}
else {
    console.log ("2"); 
}

/*
Решение
*/


let a = Number(prompt());
let b = Number(prompt());
if (a > b)
    console.log("1");
else if (a == b)
    console.log("0");
else 
    console.log("2");

// ===== //---// =====



// ===== Задача № 9 =====

/*
Реализуйте алгоритм, представленный блок-схемой.

Max из трех

ввод a, b, c
{
a >= b
и
a >= c

да => вывод a

нет => b >= c
}
{
да => вывод b

нет => вывод c
}


Sample Input:

8
11
7
Sample Output:

11
*/

a = Number (prompt ());
b = Number (prompt ());
c = Number (prompt ());

if (a >= b && a >= c) {
    console.log (a);   
}
else if (b >= c) {
    console.log (b);   
}
else {
     console.log (c);  
}



/*
Решение
*/


let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
if (a >= b && a >= c) 
    console.log(a);
else if (b >= c) 
    console.log(b);
else 
    console.log(c);

// ===== //---// =====



// ===== Задача № 10 =====

/*
Знак числа

В математике функция sign(x) (знак числа) определена так:

sign(x) = 1,   если x > 0, 
sign(x) = -1,  если x < 0, 
sign(x) = 0,   если x = 0.


Для данного числа x выведите значение sign(x).

Входные данные

Вводится число x.

Выходные данные

Выведите ответ на задачу.

Sample Input:

42
Sample Output:

1
*/

x = Number (prompt ());

if (x > 0) {
    console.log ("1");
}
else if (x < 0) {
    console.log ("-1");
}
else {
    console.log ("0");
}



/*
Решение
*/

let x = Number(prompt());
console.log(Math.sign(x));

// ===== //---// =====



// ===== Задача № 11 =====

/*
Трехзначное

Напишите программу, которая определяет, верно ли, что число – трехзначное.

Входные данные

Натуральное число.

Выходные данные

Если число трехзначное, нужно вывести YES, в противном случае вывести NO.

Sample Input 1:

345
Sample Output 1:

YES
Sample Input 2:

42
Sample Output 2:

NO
*/

var n = Number (prompt ());

if (n.toString().length == 3) {
    console.log ("YES"); 
}
else {
    console.log ("NO"); 
}



/*
Решение
*/

let x = Number(prompt());
if (100 <= x && x <= 999)
    console.log('YES');
else
    console.log('NO');

// ===== //---// =====



// ===== Задача № 12 =====

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



/*
Решение
*/

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



// ===== Задача № 13 =====

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



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
if ((a < b + c) && (b < a + c) && (c < a + b))
    console.log('YES');
else 
    console.log('NO');
