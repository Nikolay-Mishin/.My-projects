/* ...................................... 

    	Задачи
		
...................................... */

// ===== Задача № 1 =====

/*
a) Вывести в окно браузера 10 чисел, от 0 до 9, по одному числу в строке.
b) Подсчитать во введенной пользователем строке число символов 'b' с помощью цикла for.
c) Определить, является ли число, введенное пользователем, простым.
d) Найти все делители введенного пользователем целого числа.
e) Для двух введенных пользователем целых чисел найти наименьшее общее кратное.
f) Вывести в окно браузера
*/

function calc (symbol) {
	let str = document.querySelector ('input[name=line]').value;

	let k = 0;
	for (let bukva of str) {
		if (bukva.toLocalLowerCase() === 'b') {
			k++;
		}
	}

	k = 0;
	for (let i = 0; i < str.length; i++) {
		let bukva = str[i];
		if (bukva.toLocalLowerCase() === 'b') {
			k++;
		}
	}

	let outputEl = document.querySelector ('.output');
	outputEl.textContent = k;
}

// ===== //---// =====
