/* ...................................... 

    	1.3 Математика
		
...................................... */

// ===== Задача № 2 =====

/*
Даны переменные f2 и x, выведите значение выражения

3,7⋅f2+5,36⋅x3 

Sample Input:

5
-1
Sample Output:

13.14
*/

// даны переменные: f2, x
console.log (3.7 * f2 + 5.36 * Math.pow (x, 3));



/*
Решение
*/

console.log(3.7 * f2 + 5.36 * x**3);

// ===== //---// =====



// ===== Задача № 3 =====

/*
Градус: из Цельсия в Фаренгейт

Дано целое число −50<tC<110 -- градус температуры по шкале Цельсия.

Найдите tF -- соответствующую величину температуры по шкале Фаренгейта.

Sample Input:

20
Sample Output:

68.00
*/

let tC = Number (prompt ());
let tF = 9 / 5 * tC + 32;
console.log (tF);



/*
Решение
*/

let tC = Number(prompt());
let tF = 9/5 * tC + 32;
console.log(tF);

// ===== //---// =====



// ===== Задача № 5 =====

/*
√7 ⋅ √52 : √182 =?
*/

console.log (Math.sqrt (7) * Math.sqrt (52) / Math.sqrt (182));



/*
Решение
*/

console.log(7**0.5 * 52**0.5 / 182**0.5);

// ===== //---// =====



// ===== Задача № 6 =====

/*
x³ − 8y² + 2x²y + 4xy² + 8y − 5x
при x = 3,14; y = √6
*/

var x = 3.14;
y = Math.sqrt (6);

var result = Math.pow (x, 3) - 8 * Math.pow (y, 2) + 2 * Math.pow (x, 2) * y + 4 * x * Math.pow (y, 2) + 8 * y - 5 * x;

console.log (result);



/*
Решение
*/

let x = 3.14;
let y = 6**0.5;
console.log(x**3 - 8*y**2 + 2*x**2*y + 4*x*y**2 + 8*y - 5*x);

// ===== //---// =====



// ===== Задача № 7 =====

/*
Расстояние на прямой

Дано две точки на прямой -- действительные числа x1 и x2.

Найти расстояние между ними.

Sample Input:

2
5
Sample Output:

3.0
*/

let x1 = Number (prompt ());
let x2 = Number (prompt ());
console.log (Math.abs (x1 - x2));



/*
Решение
*/

let x1 = Number(prompt());
let x2 = Number(prompt());
console.log(Math.abs(x1 - x2));

// ===== //---// =====



// ===== Задача № 8 =====

/*
Вычислить 
x= (2a^(b−4) − (7a−c)^(b^2)) / ((5c + √(a+b))^(1/4) + c / b)

Входные данные
a,b,c -- целые числа

Выходные данные
Вывести x.
Sample Input:

1
2
3
Sample Output:

-72.10800
*/

a = Number (prompt ());
b = Number (prompt ());
c = Number (prompt ());

var up;
var down;

up = 2 * Math.pow (a, (b - 4)) - Math.pow ((7 * a - c), Math.pow (b, 2));

down = Math.pow (5 * c + Math.sqrt (a + b), 1/4) + c / b;

x = up / down;

console.log (x);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let p1 = 2 * a**(b-4) - (7*a - c)**(b**2);
let p2 = (5*c + (a + b)**0.5)**(1/4) + c/b;
console.log(p1 / p2);

// ===== //---// =====



// ===== Задача № 9 =====

/*
Площадь треугольника

Даны три положительных натуральных числа - стороны треугольника.

Найдите площадь треугольника.

Sample Input:

3
4
5
Sample Output:

6.00
*/

let a = Number (prompt ());
let b = Number (prompt ());
let c = Number (prompt ());
    
let p = (a + b + c) / 2;
let S = Math.sqrt (p * (p - a) * (p - b) * (p - c));
    
console.log (S);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let p = (a + b + c) / 2;
let S = (p * (p - a) * (p - b) * (p - c))**0.5;
console.log(S);

// ===== //---// =====



// ===== Задача № 10 =====

/*
Вычислите
|a — b|³
Sample Input:

3
1
Sample Output:

8
*/

let a = Number (prompt ());
let b = Number (prompt ());
console.log (Math.pow (Math.abs (a - b), 3));



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
console.log(Math.abs(a - b)**3);

// ===== //---// =====



// ===== Задача № 12 =====

/*
Градусы в радианы

Дана величина угла в градусах -- положительное натуральное число.

Переведите величину угла в радианы.

Sample Input:

60
Sample Output:

1.04720
*/

let a = Number (prompt ());
let radians = (a * Math.PI) / 180;
console.log (radians);



/*
Решение
*/

let a = Number(prompt());
let radians = a * Math.PI / 180;
console.log(radians);

// ===== //---// =====



// ===== Задача № 13 =====

/*
Высота

Конец тени от стелы находится в точке A. Расстояние от A до края постамента -- x метров, в точке A угол между землей и верхушкой стелы -- a ﻿градусов.

Определите высоту памятника.







Sample Input:

10
60
Sample Output:

17.32
*/

let x = Number (prompt ());
let a = Number (prompt ());
    a *= Math.PI / 180;
let H = x * Math.tan (a);

console.log (H);



/*
Решение
*/

let x = Number(prompt());
let a = Number(prompt());
a = a * Math.PI / 180;
let H = x * Math.tan(a);
console.log(H);

// ===== //---// =====



// ===== Задача № 14 =====

/*
Для a, b -- углов в градусах вычислите

sin a−tg b 

Sample Input:

45
30
Sample Output:

0.13
*/

let a = Number (prompt ());
let b = Number (prompt ());

a *= Math.PI / 180;
b *= Math.PI / 180;

var result = Math.sin (a) - Math.tan (b);

console.log (result);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
a = a * Math.PI / 180;
b = b * Math.PI / 180;
console.log(Math.sin(a) - Math.tan(b));
