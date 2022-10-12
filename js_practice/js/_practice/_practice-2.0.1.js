/* ...................................... 

    	Циклы
		
...................................... */

// While

n = Number (prompt ());
e2 = 1;
c = 0;

while (e2 < n) {
	e2 = e2 * 2;
	c = c + 1;
}

console.log (c, '---->', e2);


var a = "abcde";
var i = a.length - 1;
while (i --> 0) {
	a[i];
}

var s = 'Привет, Мир';
var k = 0;
i = 0;

while (i < s.length) {
	if (s[i] == 'p') {
		k++;
	}
}



// For

var students = [];
k = 0;

for (i = 0; i < s.length; i++) {
	var person = students[i];
	if (person.age < 17) { k++; }
	i++;
}



// ForEach

students.forEach (function (person) {
	if (person.age < 17) { k++; }
});



// For / in

for (let person in students) {
	if (person.age < 17) { k++; }
}



// For / of

for (let person of students) {
	if (person.age < 17) { k++; }
}

// ===== //---// =====



// ===== Задача № n =====



// ===== //---// =====

// ===== Задача № 1 =====

/*
a) Вывести в окно браузера 10 чисел, от 0 до 9, по одному числу в строке.
b) Подсчитать во введенной пользователем строке число символов 'b' с помощью цикла for.
c) Определить, является ли число, введенное пользователем, простым.
d) Найти все делители введенного пользователем целого числа.
e) Для двух введенных пользователем целых чисел найти наименьшее общее кратное.
f) Вывести в окно браузера
*/

i = 0;
while (i < 10) {
	console.log (i);
	i++;
}



let str = prompt ();
let k = 0;

for (let i = 0; i < str.length; i++) {
	if (str[i] === 'b') {
		k++;
	}
}

let outputEl = document.querySelector ('.output');
outputEl.textContent = k;

// ===== //---// =====
