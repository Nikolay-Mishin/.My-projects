/* ...................................... 

    	2.2 Массивы
		
...................................... */

// ===== Задача № 1 =====

/*
Подсчитать во введенной строке число символов  o  с помощью цикла for.

Sample Input:

Hello, World!
Sample Output:

2
*/

// http://qaru.site/questions/1264604/javascript-counting-number-of-vowels-in-a-string
// https://javascript.ru/forum/misc/5078-kak-vstavit-peremennuyu-v-regexp.html

function vowelCount (str, value) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == value) {
            count++;
        }
    }
    return count;
}

let str = prompt ();

console.log (vowelCount (str, 'o'));

function vowelLength (str, value) {
    // /[^o]/ig    |    /[^`${value}`]/ig
    let re = new RegExp ('[^' + value + ']', 'ig');
    let s = str.replace (re, "").length;
    return s;
}

console.log (vowelLength (str, 'o'));



/*
Решение
*/

let line = prompt();
let k = 0;
for (let i = 0; i < line.length; i += 1) {
    if (line[i] == 'o') {
        k += 1;
    }
}
console.log(k);

// ===== //---// =====



// ===== Задача № 2 =====

/*
Сумма товаров

Даны два массива -- один содержит количество каждого вида товара, второй стоимость единицы каждого товара. Необходимо найти общую стоимость товара.

Входные данные

Одна строка натуральных чисел -- количество единиц товара.
Вторая строка натуральных чисел -- стоимость единиц товара.

Выходные данные

Общая сумма.
Sample Input:

2 3 2
8 1 9
Sample Output:

37
*/

function Total_price (value, price) {
    value = value.trim ().split (' ');
    price = price.trim ().split (' ');
    let sum = 0;
    
    for (let i = 0; i < value.length; i++) {
        sum += Number (value[i]) * price[i];
    }
    
    return sum;
}

let value = prompt ();
let price = prompt ();

console.log (Total_price (value, price));



/*
Решение
*/


