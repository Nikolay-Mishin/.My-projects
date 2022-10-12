/* ...................................... 

    	1.2 Ввод-вывод, переменные
		
...................................... */

// ===== Задача № 4 =====

/*
Напишите программу, которая выведет значение выражения

(0,48 + 3 : (0,2 − 0,1) + 3,14 ∙ 2⁴)∙25
*/

console.log ((0.48 + 3 / (0.2 - 0.1) + 3.14 * Math.pow (2, 4)) * 25);



/*
Решение
*/

console.log((0.48 + 3 / (0.2 - 0.1) + 3.14 * 2**4) * 25);

// ===== //---// =====



// ===== Задача № 5 =====

/*
Автозаправка

На автозаправке клиент отдал кассиру x рублей и попросил залить бензин до полного бака. Цена бензина y рублей за литр. Клиент получил z рубля сдачи. Сколько литров бензина было залито в бак?
(66C0F2)
Даны переменные x, y, z, необходимо написать код, который выведет ответ математической задачи. 

Sample Input:

1000
32
72
Sample Output:

29
*/

// x - дано рублей
// y - цена бензина
// z - сдача
console.log ((x - z) / y);



/*
Решение
*/

console.log((x - z) / y);

// ===== //---// =====



// ===== Задача № 7 =====

/*
Сумма двух

Введите два числа и выведите их сумму.

Sample Input:

8
11
Sample Output:

19
*/

let a = Number (prompt ());
let b = Number (prompt ());
console.log (a + b);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
console.log(a + b);

// ===== //---// =====



// ===== Задача № 8 =====

/*
Hello, World!

Традиционно, в начале работы с новым языком программист пытается написать программу выводящую строчку "Hello, World!".

В этом задании необходимо расширить стандартное решение. Сначала программа должна запросить имя, а затем вывести приветствие, используя введенное имя.

Входящие данные

Строка текста.

Результат

Hello, NAME!
Вместо NAME должно быть введенное пользователем имя.

Sample Input:

World
Sample Output:

Hello, World!
*/

let name = prompt ();

console.log ("Hello, " + name + "!");



/*
Решение
*/

let name = prompt();
console.log('Hello, ' + name + '!');

// ===== //---// =====



// ===== Задача № 9 =====

/*
Цветные линии

На палке от­ме­че­ны поперечные линии красного, желтого и зеленого цвета. Если рас­пи­лить палку по крас­ным линиям, по­лу­чит­ся A кусков, если по желтым — B кусков, если по зеленым — C кусков. Сколь­ко кусков получится, если рас­пи­лить палку по ли­ни­ям всех трех цветов?

Входные данные

Даны три положительных целых числа A, B, C.

Выходные данные

Целое число — количество кусков.

Sample Input:

5
6
7
Sample Output:

16
*/

A = Number (prompt ());
B = Number (prompt ());
C = Number (prompt ());
K = A + B + C - 2;
console.log (K);



/*
Решение
*/

let A = Number(prompt());
let B = Number(prompt());
let C = Number(prompt());
let K = (A - 1) + (B - 1) + (C - 1) + 1;
console.log(K);

// ===== //---// =====



// ===== Задача № 10 =====

/*
В обратном порядке на одной строке

Вывести четыре имени и вывести их в обратном порядке.

Входные данные

Четыре имени, каждое на отдельной строке.

Выходные данные

Четыре имени через запятую на одной строке, в порядке обратном введенному.

Sample Input:

Алиса
Боб
Чарли
Дейв
Sample Output:

Дейв, Чарли, Боб, Алиса
*/

let name1 = prompt ();
let name2 = prompt ();
let name3 = prompt ();
let name4 = prompt ();

console.log (name4 + ", " + name3 + ", " + name2 + ", " + name1);



/*
Решение
*/

let name1 = prompt();
let name2 = prompt();
let name3 = prompt();
let name4 = prompt();
console.log(name4 + ',', name3 + ',', name2 + ',', name1);

// ===== //---// =====



// ===== Задача № 11 =====

/*
Следующее предыдущее

Напишите программу, которая считывает целое число и выводит текст, аналогичный приведенному в примере.

Пробелы, знаки препинания, заглавные и строчные буквы важны!

Входные данные

Вводится целое число.

Выходные данные

Выведите ответ на задачу.

Sample Input 1:

179
Sample Output 1:

The next number for the number 179 is 180.
The previous number for the number 179 is 178.
Sample Input 2:

2
Sample Output 2:

The next number for the number 2 is 3.
The previous number for the number 2 is 1.
*/

n = Number (prompt ());

console.log ("The next number for the number " + n + " is " + (n + 1) + ".");
console.log ("The previous number for the number " + n + " is " + (n - 1) + ".");



/*
Решение
*/

let n = Number(prompt());
console.log(`The next number for the number ${n} is ${n+1}.`);
console.log(`The previous number for the number ${n} is ${n-1}.`);

// ===== //---// =====



// ===== Задача № 12 =====

/*
Цена сырка

Стоимость одного сырка: a рублей b копеек. Куплено c сырков.
Сколько потрачено копеек?

Входные данные
Числа a, b, c -- натуральные положительные, каждое на отдельной строке.

Выходные данные
Число копеек.

Sample Input:

2
30
4
Sample Output:

920
*/

let a = Number (prompt ());
let b = Number (prompt ());
let c = Number (prompt ());

var result = (a * 100 + b) * c;

console.log (result);



/*
Решение
*/

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
console.log((a*100 + b) * c);

// ===== //---// =====



// ===== Задача № 13 =====

/*
Напишите программу, которая запрашивает три буквы и выводит строку из этих букв в том же порядке, что и при вводе.

Sample Input:

A
B
C
Sample Output:

ABC
*/

let A = prompt();
let B = prompt();
let C = prompt();

console.log (A + B + C);



/*
Решение
*/

let A = prompt();
let B = prompt();
let C = prompt();
console.log(A + B + C);

// ===== //---// =====



// ===== Задача № 14 =====

/*
Напишите программу, которая запрашивает три цифры и выводит число из цифр в том же порядке, что и при вводе.

Sample Input:

1
2
3
Sample Output:

123
*/

let A = Number (prompt ());
let B = Number (prompt ());
let C = Number (prompt ());

console.log (Number (A.toString() + B + C));



/*
Решение
*/

let A = Number(prompt());
let B = Number(prompt());
let C = Number(prompt());
console.log(A*100 + B*10 + C);
