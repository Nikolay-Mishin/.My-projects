
a = parseInt('-10');               // целые числа
a = parseFloat('3.14159265358');   // вещественные числа
a = Number('-0.6180339887498948'); // универсальный метод
a = a-0;  // неявное преобразование
a = 1*a;  // неявное преобразование
a = +a;   // неявное преобразование

a = new Number('-0.6180339887498948'); // создание объекта Number

// экспоненциальная запись числа
a = Number('1e+100');           // гугол
a = Number('1e-10');            // ангстрем

//

// parseInt для перевода чисел из другой системы счисления
a = parseInt('101010');         // 101010
a = parseInt('101010', 10);     // 101010
a = parseInt('101010', 2);      // 42
a = parseInt('101010', 8);      // 33288
a = parseInt('101010', 16);     // 1052688

// Infinity -- специальное "число"
a = Number('Infinity');         // Infinity
console.log(1 / 0);             // Infinity
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
