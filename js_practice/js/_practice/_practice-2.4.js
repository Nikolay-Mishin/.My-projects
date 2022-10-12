/* ...................................... 

    	2.4 Задачи
		
...................................... */

// ===== Задача № 1 =====

/*
Утренняя пробежка

В первый день спортсмен пробежал x километров, а затем он каждый день увеличивал пробег на 10% от предыдущего значения. По данному числу y определите номер дня, на который пробег спортсмена составит не менее y километров.

Входные данные
Программа получает на вход действительные числа x и y.

Выходные данные
Программа должна вывести одно натуральное число.

Sample Input:

10
20
Sample Output:

9
*/

let x = Number (prompt ());
let y = Number (prompt ());
let i = 1;

for (i; x < y; i++) {
    x *= 1.1;
}

console.log (i);



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 2 =====

/*
Сумма цифр

Выведите сумму цифр заданного натурального числа.

Sample Input:

123
Sample Output:

6
*/

let n = Number (prompt ());
let str = n.toString();
let sum = 0;

for (let i = 0; i < str.length; i++)
    sum += Number (str[i]);

console.log (sum);



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 3 =====

/*
Цифра числа -- сумма сумм

Дано число N, найдите цифру этого числа. Для этого найдите сумму цифр N. Если сумма цифр -- двузначное число, то найдите сумму цифр этой суммы. Повторяйте пока не останется одна цифра. Это цифра числа N.

Входные данные

Натуральное число N.

Выходные данные

Цифра.

Challenge (необязательное условие)

Решить задачу без циклов за линейное время.



Sample Input:

12345
Sample Output:

6
*/

function sum_numb (n) {
    let str = n.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++)
        sum += Number (str[i]);
    
    if (sum.toString().length > 1)
        sum_numb (sum);
    else {
        console.log (sum);
        return sum;
    }
}

let n = Number (prompt ());

sum_numb (n);



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 4 =====

/*
НОД

Для двух натуральных чисел найти наименьший общий делитель.


Sample Input:

24 16
Sample Output:

8
*/

// Наибольший общий делитель на JavaScript

function NOD (A)
{   
    var n = A.length, x = Math.abs (A [0]);
    for (var i = 1; i < n; i++)
    {
        var y = Math.abs (A [i]);
        while (x && y) { x > y ? x %= y : y %= x; }
        x += y;
    }
    return x;
}
// A - массив целых чисел (например, [57, 0, -45, -18, 90, 447])

let s = prompt ();

console.log (NOD (s.split (' ')));

// 1. Цикл

function gcd (a, b) {
    a = Math.abs (a);
    b = Math.abs (b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

let a = s.split (' ') [0];
let b = s.split (' ') [1];

console.log (gcd (a, b));

// 2. Рекурсия

function gcd_rec (a, b) {
    if (b) {
        return gcd_rec (b, a % b);
    }
    else {
        return Math.abs (a);
    }
}

console.log (gcd_rec (a, b));

// 3. Классический алгоритм Евклида

function gcd_3 (a, b) {
	while (a != b) {
		if (a > b)
			a = a - b;
        else
			b = b - a;
	}
	return a;
}

console.log (gcd_3 (a, b));

// 4. Бинарный алгоритм поиска НОД

function gcd_4 (a, b) {
	if (a == b)
		return a;
	if (a == 0)
		return b;
	if (b == 0)
		return a;
	if ((~a & 1) != 0) {
		if ((b & 1) != 0)
			return gcd_4 (a >> 1, b);
		else
			return gcd_4 (a >> 1, b >> 1) << 1;
	}
	if ((~b & 1) != 0)
		return gcd_4 (a, b >> 1);
	if (a > b)
		return gcd_4 ((a - b) >> 1, b);
	return gcd_4 ((b - a) >> 1, a);
}

console.log (gcd_4 (a, b));

// 5. Бинарный алгоритм на основе битовой арифметики

function gcd_5 (a, b) {
	let shift;
	if (a == 0)
		return b;
	if (b == 0)
		return a;
	for (shift = 0; ((a | b) & 1) == 0; ++shift) {
		a >>= 1;
		b >>= 1;
	}
	while ((a & 1) == 0)
		a >>= 1;
		do {
		while ((b & 1) == 0)
			b >>= 1;
		if (a > b) {
			let t = b;
			b = a;
			a = t;
		}
		b = b - a;
	}
    while (b != 0);
	return a << shift;
}

console.log (gcd_5 (a, b));



/*
Решение
*/

let [a, b] = prompt().split(' ').map(Number);
let [temp, gcd] = [a, b];
while (temp > 0) {
    [temp, gcd] = [gcd % temp, temp];
}
console.log(gcd);

// ===== //---// =====



// ===== Задача № 5 =====

/*
НОК

Для двух натуральных чисел найти наименьшее общее кратное.
Sample Input:

16 24
Sample Output:

48
*/

// Наименьшее общее кратное на JavaScript

function NOK (A)
{   
    var  n = A.length, a = Math.abs (A [0]);
    for (var i = 1; i < n; i++)
    {
        var b = Math.abs (A [i]), c = a;
        while (a && b) { a > b ? a %= b : b %= a; } 
        a = Math.abs (c * A [i]) / (a + b);
    }
    return a;
}
// A - массив целых чисел (например, [-50, 25, -45, -18, 90, 447])

let s = prompt ();

console.log (NOK (s.split (' ')));



/*
Решение
*/


