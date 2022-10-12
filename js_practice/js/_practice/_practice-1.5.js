/* ...................................... 

    	1.5 Числа
		
...................................... */

// ===== Задача № 1 - Теория =====

a = -1                    // целое число
a = 3.14159         // действительно число
a = 0x11               // 17 в 16-ричной записи
a = 0b11               // 3 в двоичной записи
a = 0o11               // 9 в 8-ричной записи
// экспоненциальная запись действительного числа
a = 1e+100              // гугол
a = 1e-10                  // ангстрем

a = -Infinity              // Infinity бесконечно малое число
a = Infinity               // Infinity бесконечно большое число
a = 9007199254740991   // наибольшее целое число
a = -9007199254740991  // наименьшее целое число

// преобразование из строк в числа
a = parseInt('-10');               // целые числа
a = parseFloat('3.14159265358');   // вещественные числа
a = Number('-0.6180339887498948'); // универсальный метод
a = Number('')           // 0
a = Number(null)      // 0 
a = a-0;  // неявное преобразование
a = 1*a;  // неявное преобразование
a = +a;   // неявное преобразование

a = new Number('-0.6180339887498948'); // создание объекта Number

// parseInt для перевода чисел из другой системы счисления
a = parseInt('101010');         // 101010
a = parseInt('101010', 10);     // 101010
a = parseInt('101010', 2);      // 42
a = parseInt('101010', 8);      // 33288
a = parseInt('101010', 16);     // 1052688

// Infinity -- специальное "число"
a = Number('Infinity');         // Infinity
console.log(1 / 0);              // Infinity
console.log(Infinity + 1);      // Infinity
console.log(Math.pow(10,1000)); // Infinity
console.log(Math.log(0));       // -Infinity
console.log(1 / Infinity);      // 0

// NaN -- специальное "не число"
a = Number('Hello');            // NaN
b = Math.sqrt(-1);              // NaN
x = a == b;                     // false
x = NaN == NaN;                 // false
x = Number.NaN == NaN;          // false
x = isNaN(NaN);                 // true
x = isNaN(Number.NaN);          // true


/* Другие числа

  Number
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  Math
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

*/

// ===== //---// =====



// ===== Задача № 3 =====

/*
Отметье, что из указанных представлений интерпретируется JavaScript как число.
*/

/*
Ряды:	            Число	    Не число

10	                  +                 

0x10	              +                 

0o10	              +                 

0b10	              +                 

Infinity	          +                 

Number("")	          +                          

+0e1	              +                 

-10e-10	              +                 

0xFF	              +                 

Number(null)	      +                 

-1.0e0	              +                 
*/



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 4 =====

/*
Десятка

Отметье числа равные 10.

Осторожно, некоторые из них могут быть не числами.
*/

/*
.1e2
0e+1
0b10
1e1
10e-0
10n
1e+1
1e-1
1e0
e+1
0x10
0o10
010
*/

let n_1 = .1e2; // 10
let n_2 = 0e+1; // 0
let n_3 = 0b10; // 2
let n_4 = 1e1; // 10
let n_5 = 10e-0; // 10
let n_6 = 10n; // 10
let n_7 = 1e+1; // 10
let n_8 = 1e-1; // 0.1
let n_9 = 1e0; // 1
let n_11 = 0x10; // 16
let n_12 = 0o10; // 8
let n_13 = 010; // 8

console.log ("1: " + n_1);
console.log ("2: " + n_2);
console.log ("3: " + n_3);
console.log ("4: " + n_4);
console.log ("5: " + n_5);
console.log ("6: " + n_6);
console.log ("7: " + n_7);
console.log ("8: " + n_8);
console.log ("9: " + n_9);
console.log ("11: " + n_11);
console.log ("12: " + n_12);
console.log ("13: " + n_13);

let n_10 = e+1;

console.log ("10: " + e+1);
console.log ("10: " + n_10);



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 5 =====

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

var s = prompt ();

if (!isNaN (s)) { console.log ('число'); }
else { console.log ('не число'); }

// Failed test #10. Wrong answer
// (-8ghgytyr5599-55555ffgthjyyоаопкгшпрп558)
// не число

// isParseInteger ()

function isNormalInteger (str) {
    return parseInt (str);
}
/*
if (isNormalInteger (s) != '0') { console.log ('число'); }
else { console.log ('не число'); }
*/
// Failed test #8. Wrong answer ()
// (-8ghgytyr5599-55555ffgthjyyоаопкгшпрп558)
// число

// isNormalInteger ()

function isNormalInteger (str) {
    var n = Number (str);
    return String (n) === str;
}

function test (str) {
	var n = isNormalInteger (str) ? 'Yes' : 'No';
	return n;
}
/*
if (test (s)) { console.log ('число'); }
else { console.log ('не число'); }
*/
// Failed test #8. Wrong answer
// (-8ghgytyr5599-55555ffgthjyyоаопкгшпрп558)
// не число

// isNumber ()

function isNumber (n) { return /^-?[\d.]+(?:e-?\d+)?$/.test (n); } 
function test (obj) { return !isNaN (parseFloat (obj)); } 
/*
if (isNumber (s)) { 
    console.log ('число'); 
} 
else { 
    console.log ('не число'); 
}
*/



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 5 =====

/*
Not A Number

NaN специальное значение, означающее, что это не число. Функция isNaN возращает true, если аргумент NaN.

Отметьте выражения, которые принимают значение true.
*/

/*
NaN == NaN
false == NaN
isNaN(NaN)
Number('Hello') == NaN
isNaN(Number.NaN)
Number.NaN === NaN
isNaN(Math.sqrt(-1))
*/

console.log (NaN == NaN); // false
console.log (false == NaN); // false
console.log (isNaN (NaN)); // true
console.log (Number ('Hello') == NaN); // false
console.log (isNaN (Number.NaN)); // true
console.log (Number.NaN === NaN); // false
console.log (isNaN (Math.sqrt (-1))); // true

/*
Решение
*/



// ===== //---// =====



// ===== Задача № 7 =====

/*
Not A Number

NaN специальное значение, означающее, что это не число. Функция isNaN возращает true, если аргумент NaN.

Отметьте выражения, которые принимают значение true.
*/

/*
NaN == NaN
false == NaN
isNaN(NaN)
Number('Hello') == NaN
isNaN(Number.NaN)
Number.NaN === NaN
isNaN(Math.sqrt(-1))
*/



/*
Решение
*/

let x = Number(prompt());
if (isNaN(x))
    console.log("не число");
else
    console.log("число");

// ===== //---// =====



// ===== Задача № 6 =====

/*
Округлить число до 2 знаков после запятой до ближайшего целого.

 
Подсказка

1) Использовать методы toFixed. Метод вернет строку!, и в конце допишет нули! до нужной длины -- поэтому результат нужно обернуть приведением к числу (Number).
2) Домножить на 100, округлить Math.round, разделить на 100.

Sample Input 1:

3.14159265358
Sample Output 1:

3.14
Sample Input 2:

-3.14159265358
Sample Output 2:

-3.14
Sample Input 3:

0.000001
Sample Output 3:

0
Sample Input 4:

0.999
Sample Output 4:

1
*/

let n = Number (prompt ());

function numb (n, i) {
    let result = n.toFixed (i);
    return Number (result);
}

console.log (numb (n, 2));



/*
Решение
*/

let x = Number(prompt());
let x2d = Math.round(x * 100) / 100;
console.log(x2d);

let x = Number(prompt());
let x2d = Number(x.toFixed(2));
console.log(x2d);
