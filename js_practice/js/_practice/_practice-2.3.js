/* ...................................... 

    	2.3 Ввод-вывод
		
...................................... */

// ===== Задача № 1 - Теория =====

/*
Данные из одной строки
Данные из нескольких строк
Форматированные строки при выводе
Вывод в одну строку
Данные из одной строки

В некоторых заданиях будут встречаться серия данных в одной строке. Например, найти сумму двух чисел написанной в одной строке через пробел.

24 42

С помощью оператора prompt() мы получим всю строку "24 42". После делим строку на части оператором split, указывая пробел разделителем, input().split(' '), что вернет нам массив ["24", "42"]. Каждый элемент массива, функция  map, нужно преобразовать к числу функцией  Number. Результат можно присвоить переменной массива. Но можно и сразу присвоить пачке переменных с помощью небольшого трюка.
*/

let [a, b] = prompt().split(' ').map(Number);

// Если нужны не числа, а строки, то не приводим к числам.

let [a, b] = prompt().split(' ');

/*
Данные на нескольких строк

Если данных много и они находятся на разных строках, то prompt() нужно вызвать для каждой строки. В некоторых случаях в цикле.
*/

let n = Number(prompt());
for (let i = 0; i < n; i += 1) {
    let x = Number(prompt());
    // ...
}

/*
Форматированные строки

Для вывода иногда нужно собрать строку вывода из разнородных частей.

Пусть у нас есть переменные.
*/

name = "Earth"
age = 6000000000
 
/*
Из которых нужно получить строку I'm Earth, I'm 6000000000 years old.

Используем обратные кавычки
*/

hello = `I'm ${name}, I am ${age} years old.`

/*
Строковые методы padStart и padEnd помогут выровнить значения, если они должны занимать определенный размер.

Вывод в одну строку

В браузерном console нет специального режима, который будет выводить в одну строку. Для решение этой задачи нужно создать текстовую переменную и наполнять ее текстовым выводом, а затем ее вывести одной командой console.log.
*/

let s = '';
for (let i = 0; i < 10; i += 1) {
    s += i + ' ';
}
console.log(s);

// В качестве альтернативы можно строки добавлять в массив, а затем вывести преобразовать его в строку командой join.

let a = [];
for (let i = 0; i < 10; i += 1) {
    a.push(i);
}
console.log(a.join(' '));

// ===== //---// =====



// ===== Задача № 2 =====

/*
Среднее арифметическое

Посчитать среднее арифметическое набора чисел.

Входные данные

Дана последовательность чисел.

Выходные данные

Среднее арифметическое. Значение округлите до двух знаков после запятой.

Sample Input:

2 4 6 -6 -1
Sample Output:

1.0
*/

function avrArifmet (str) {
    str = str.trim ().split (' ');
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        sum += Number (str[i]);
    }
    
    let avr = sum / str.length;
    return avr.toFixed (3);
}

let str = prompt ();

console.log (avrArifmet (str));



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 3 =====

/*
Сумма с условием

Найдите сумму целых чисел, которые кратны 3, но не оканчиваются 3. 

Входные данные 
Вводится натуральное число n, а затем n чисел.

Выходные данные 
Вычислите сумму.

Sample Input:

9
2
3
6
9
33
-12
-13
-14
-33
Sample Output:

15
*/

function Last_numb (value) {
    if (value < 0) return -(value % 10);
    return value % 10;
}

function Sum (mas) {
    let sum = 0;

    for (let i = 0; i < mas.length; i++) {
        if (Last_numb (mas[i]) != '3' && mas[i] % 3 == '0')
            sum += mas[i];
    }

    return sum;
}

let n = Number (prompt ());
let n_mas = [];

for (let i = 0; i < n; i++) {
    let numb = Number (prompt ());
    n_mas [i] = numb;
}

console.log (Sum (n_mas));



/*
Решение
*/

let s = [...Array(Number(prompt()))]
    .map(prompt).map(Number)
    .filter(x => !(x % 3) && Math.abs(x) % 10 - 3)
    .reduce((a, x) => a + x, 0);
console.log(s);

let n = Number(prompt());
let s = 0;
for (let i of Array(n)) {
    let x =  Number(prompt());
    if (x % 3 == 0 && Math.abs(x) % 10 != 3)
        s += x;
}
console.log(s);

// ===== //---// =====



// ===== Задача № 4 =====

/*
Все делители

Найти все делители натурального числа.


Sample Input 1:

6
Sample Output 1:

1 2 3 6
Sample Input 2:

7
Sample Output 2:

1 7
*/

function dividers (n) {
    let d = 2;
    let divider = [1];

    if (n >= d) {
        let i = 1;

        for (d; d <= n; d++) {
            if (n % d == 0) {
                divider [i] = d;
                i++;
            }
        }
        
        return divider.join (' ');
    }
    else {
        return 'Введидите значение, не меньшее ' + d;
    }
}

let n = Number (prompt ());

console.log (dividers (n));



/*
Решение
*/

let n = Number(prompt());
let dividers = '';
for (let i = 1; i <= n; i += 1) {
    if (n % i == 0) {
        dividers += i + ' ';
    }
}
console.log(dividers);
