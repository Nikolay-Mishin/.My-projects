/* ...................................... 

    	1.7 Задачи
		
...................................... */

// ===== Задача № 1 =====

/*
Последовательность https://oeis.org/A000170 начинается числами
1, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, ...

Выведите сумму пяти следующих членов этой последовательности.
*/

console.log (365596 + 2279184 + 14772512 + 95815104 + 666090624);



/*
Решение
*/

console.log(365596 + 2279184 + 14772512 + 95815104 + 666090624);

// ===== //---// =====



// ===== Задача № 2 =====

/*
Напишите программу, которая по шагам решает арифметическое выражение относительно трех переменных a,b,c. На первом шаге вычислите выражение в первых скобках, выведите его в первой строке. На втором шаге вычислите выражение во вторых скобках, выведите его во второй строке. На третьем шаге вычислите выражение в третьих скобках, выведите его в третьей строке. В четвертой строке выведите ответ полностью на всё выражение, подставляя переменные с уже вычисленными фрагментами:

(abc^2 + ab^2c + abc^2)^2 − 4 * (3a^2 − 2b^3 + 4c^2)^2 + (5ab + a^2*b^2*c^2 − 6)^2 

Sample Input:

1
2
3

Sample Output:

48
23
40
1788
*/

let a = Number (prompt ());
let b = Number (prompt ());
let c = Number (prompt ());

let s1 = a * b * Math.pow (c, 2) + a * Math.pow (b, 2) * c + a * b * Math.pow (c, 2);
let s2 = 3 * Math.pow (a, 2) - 2 * Math.pow (b, 3) + 4 * Math.pow (c, 2);
let s3 = 5 * a * b + Math.pow (a, 2) * Math.pow (b, 2) * Math.pow (c, 2) - 6;

let R = Math.pow (s1, 2) - 4 * Math.pow (s2, 2) + Math.pow (s3, 2);

console.log (s1);
console.log (s2);
console.log (s3);

console.log (R);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt()) ;
let c = Number(prompt());
let s1 = a*b*c**2 + a*b**2*c + a*b*c**2;
let s2 = 3*a**2 - 2*b**3 + 4*c**2;
let s3 = 5*a*b + a**2*b**2*c**2 - 6;
let R = s1**2 - 4*s2**2 + s3**2;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(R);

// ===== //---// =====



// ===== Задача № 3 =====

/*
Квадратное уравнение

Найдите решения квадратного уравнения с точностью до двух знаков после запятой.

ax^2 + bx + c = 0 

Входные данные

Даны три действительных числа a, b, c в одной строке, a ≠ 0.

Выходные данные

Выведите

Два действительных числа, разделенные пробелом, если уравнение имеет два корня.
Одно действительное число – при наличии одного корня.
При отсутствии действительных корней ничего выводить не нужно.

Sample Input 1:

1
-2
-5

Sample Output 1:

-1.45 3.45

Sample Input 2:

1
-2
1

Sample Output 2:

1.0

Sample Input 3:

1
-2
5

Sample Output 3:
*/

// ===== Решение квадратного уравнения =====

function square_sol (a, b, c) {
	var string = "";
    var d = Math.pow (b, 2) - 4 * a * c;
    var x1;
    var x2;

	if (d > 0) {
        x1 = (-b - Math.sqrt (d)) / (2 * a);
		string += x1.toFixed (2);
		string += " ";
		x2 = (-b + Math.sqrt (d)) / (2 * a);
		string += x2.toFixed (2);
	}
	else if (d == 0) {
		x1 = -b / ( 2 * a );
		string += x1.toFixed (1);
	}
	else {
		string = "";
	}

	return string;
}

// ===== //---// =====

var a = Number (prompt ());
var b = Number (prompt ());
var c = Number (prompt ());

console.log (square_sol (a, b, c));



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let D = b**2 - 4*a*c;
if (D > 0) {
    let x1 = (-b - D**0.5) / (2*a);
    let x2 = (-b + D**0.5) / (2*a);
    console.log(x1.toFixed(2), x2.toFixed(2));
}
else if (D == 0) {
    let x = -b / (2*a);
    console.log(x.toFixed(2));
}

// ===== //---// =====



// ===== Задача № 4 =====

/*
Authorization

You have login and password as integer numbers stored in the code as login and password variables. The user inputs two integers (the login and the password). If they match to one in the code - output "Login success", if the password doesn't match, but logins match, output "Wrong password", if login is wrong, output "No user with login XXXX found", where XXXX is the login, the user's just input.

INPUT

Two integers, the first - login, the second - password.

OUTPUT

"Login success" if both match, "Wrong password" if passwords do not match, but logins match and "No user with login XXXX found" if logins do not match (XXXX is the login, the user has input).

Sample Input 1:

100500
424242
Sample Output 1:

Login success
Sample Input 2:

100500
311231
Sample Output 2:

Wrong password
Sample Input 3:

21341
424242
Sample Output 3:

No user with login 21341 found
*/

var login = Number (prompt ());
var password = Number (prompt ());

var data_log = 100500;
var data_pass = 424242;

if (login == data_log && password == data_pass) {
    console.log ("Login success");
}
else if (login == data_log && password != data_pass) {
    console.log ("Wrong password");
}
else {
    console.log ("No user with login " + login + " found");
}



/*
Решение
*/

let savedLogin = 100500;
let savedPassword = 424242;
let login = Number(prompt());
let password = Number(prompt());
if (login == savedLogin && password == savedPassword)
    console.log('Login success');
else if (login == savedLogin)
    console.log('Wrong password');
else 
    console.log('No user with login', login, 'found');
