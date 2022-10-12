/* ...................................... 

    	MAIN FUNCTIONS
		
...................................... */

// ===== Watch Changes =====

function watch_changes (old, cur) {
	if (old != cur) {
		old = cur;
		return true;
	}
	else return false;
}

// ===== //---// =====



// ===== String Split =====

/*
	// А как найти в строке, скажем, 20-й символ (причем без разницы, что за символ там будет стоять) и заменить его например на "А" ?

	str = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'.split ("");
	str [19] = 'A';
	str = str.join ("");
	alert (str);
*/

function string_split (str, _split, n, s, _join) {
	if (_split == undefined) { _split = ""; }
	if (n == '' || n == undefined) { n = 0; }
	if (_join == undefined) { _join = ""; }

	str = str.split (_split);
	str [n] = s;
	str = str.join (_join);
	console.log ("String Split => " + str);
}

function split_separate (str, separator) {
	var s = str;
	var sp = s.split (separator);
	var delta = s.length - sp.length;

	console.log (
		"Оригинальная строка: " + s.length + "\n" + 
		"Длина полученного массива: " + sp.length + "\n" + 
		"Длина сепаратора: " + delta
	);

	return delta;
}

// ===== //---// =====



// ===== String Replace =====

/*
	str = "тест еще тест";
	str.replace ("тест","прошел"); // = "прошел еще тест"	

	'somestring\\w'.replace ('\\w', '@'); // → somestring@
*/

function string_replace (str, s1, s2) {
	str.replace (s1, s2);
	console.log ("String Replace => " + str);
}

// ===== //---// =====



// ===== Результат деления =====

function division (a, b) {
	var b_compare = false;

	if ((a / b) < 0) {
		b_compare = true;
	}

	return b_compare;
}

// ===== //---// =====



// ===== остаток от деления =====

function division_lost (a, b) {
	var value = "";
	var result = a % b;

	if (result == 0) {
		value += "a делится нацело на b (" + result + ")";
	}
	else {
		value += "a не делится нацело на b (" + result + ")";
	}

	return value;
}

// ===== //---// =====



// ===== вхождение в диапазон =====

function range (x, name) {
	// small
	var small_min = 0;
	var small_max = 300;
	// medium
	var middle_min = 301;
	var middle_max = 1280;

	if (x == "") {
		return null_value (name);
	}
	else if (x < small_min) {
		return no_range (name);
	}
	else if (x >= small_min && x <= small_max) {
		return range_small (name);
	}
	else if (x >= middle_min && x <= middle_max) {
		return range_medium (name);
	}
	else {
		return range_big (name);
	}

	function null_value (name) {
		var value = "";
		value += name + " (значение не задано)";
		return value;
	}
	
	function no_range (name) {
		var value = "";
		value += name + " (вне диапазона)";
		return value;
	}
	
	function range_small (name) {
		var value = "";
		value += name + " (small)";
		return value;
	}
	
	function range_medium (name) {
		var value = "";
		value += name + " (middle)";
		return value;
	}
	
	function range_big (name) {
		var value = "";
		value += name + " (big)";
		return value;
	}
}

_range (n);

function _range (x) {
	// small
	var small_min = 0;
	var small_max = 300;
	// medium
	var middle_min = 301;
	var middle_max = 1280;

	if (x >= small_min && x <= small_max) {
		console.log (_return ("small"));
	}
	else if (x >= middle_min && x <= middle_max) {
		console.log (_return ("middle"));
	}
	else {
		console.log (_return ("big"));
	}
	
	function _return (value) {
		return value;
	}
}

// ===== //---// =====



// ===== Решение квадратного уравнения =====

function square_sol (a, b, c) {
	var string = "";
	var d = b * b - 4 * a * c;

	if ( d < 0 ) {
		string = "(пара комплексно-сопряженных корней) => x<sub>1</sub> = (";
		string += - b / ( 2 * a );
		string += ", ";
		string += Math.sqrt( -d ) / ( 2 * a );
		string += "), x<sub>2</sub> = (";
		string += - b / ( 2 * a);
		string += ", ";
		string += - Math.sqrt( -d ) / ( 2 * a );
		string += ").";
	}
	else {
		if ( d == 0 ) {
			string = "(два одинаковых вещественных корня) => x<sub>1</sub> = x<sub>2</sub> = ";
			string += -b / ( 2 * a );
			string += ".";
		}
		else {
			string = "(два различных вещественных корня) => x<sub>1</sub> = ";
			string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
			string += ", x<sub>2</sub> = ";
			string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
			string += ".";
		}
	}

	return string;
}

/* ...................................... 

    	SUB FUNCTIONS
		
...................................... */

// ===== Задание 1 =====

function click_file (lesson) {
	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + 
		'hello, World from JS file'
	);
}

function click_p (lesson) {
	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + 
		'hello, World from Click to P'
	);
}

// ===== //---// =====



// ===== Задание 2 =====

function formula_1 (lesson, a, b, c) {
	var result;
	var up;
	var down;

	up = 2 * Math.pow (a, (b - 4)) - Math.pow ((7 * a - c), Math.pow (b, 2));

	down = Math.pow (5 * c + Math.sqrt (a + b), 1/4) + c / b;

	result = up / down;

	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + 
		result + '\n' + 
		'при следующих значениях' + '\n' + 
		'a = ' + a + '\n' + 
		'b = ' + b + '\n' + 
		'c = ' + c
	);
}

// ===== //---// =====



// ===== Задание 3 =====

function formula_sum (lesson) {
	var x = parseInt (document.getElementById ('var_x').value);
	var y = parseInt (document.getElementById ('var_y').value);
	var result = x + y;

	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + result + '\n' + 
		'при следующих значениях' + '\n' + 
		'x = ' + x + '\n'+ 
		'y = ' + y
	);
}

// ===== //---// =====



// ===== Задание 4 =====

function formula_input (lesson) {
	var a = document.getElementById ('var_a').value;
	var b = document.getElementById ('var_b').value;
	var c = document.getElementById ('var_c').value;

	formula_1 (lesson, a, b, c);
}

// ===== //---// =====



// ===== Задание 5 =====

function formula_output (lesson) {
	var a = document.getElementById ('a').value;
	var b = document.getElementById ('b').value;

	var value_b = " (" + (a / b).toString() + ")";

	var result_a = Math.pow (a - b, 3);
	var result_b = division (a, b) + value_b;
	var result_c = Math.sin (a) - Math.tan (b);

	document.getElementById ('result_a').innerHTML = result_a;
	document.getElementById ('result_b').innerHTML = result_b;
	document.getElementById ('result_c').innerHTML = result_c;

	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + '\n' + 
		result_a + '\n' + 
		result_b + '\n' + 
		result_c + '\n' + 
		'при следующих значениях' + '\n' + 
		'a = ' + a + '\n' + 
		'b = ' + b
	);
}

// ===== //---// =====



// ===== Задание 6 =====

function compare_if (lesson) {
	var a = document.getElementById ('a_6').value;
	var b = document.getElementById ('b_6').value;
	var c = document.getElementById ('c_6').value;
	var sol = document.getElementById("square_sol");

	var result_a = division_lost (a, b);
	var result_b = range (a, "a") + ", " + range (b, "b") + ", " + range (c, "c");

	document.getElementById ('result_a_6').innerHTML = result_a;
	document.getElementById ('result_b_6').innerHTML = result_b;
	sol.innerHTML = square_sol (a, b, c);

	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + '\n' + 
		result_a + '\n' + 
		result_b + '\n' + 
		sol.innerHTML + '\n' + 
		'при следующих значениях' + '\n' + 
		'a = ' + a + '\n' + 
		'b = ' + b + '\n' + 
		'c = ' + c
	);
}

// ===== //---// =====



// ===== Задание 7 =====

// Вывод длины input

function showCount (input, output, value, n) {
	if (input.value.length > 0) {
		if (input.value.length < n) { str = value; }
		else { str = ""; }

		if (test (input.value) == "Yes") { _type = "число"; }
		else { _type = "не число"; }

		output.innerHTML = 
			str + " (" + input.value.length + ")" + ", " + 
			_type + ", " + 
			"Число пробелов: " + split_separate (input.value, " ");
	}
	else { output.innerHTML = "Введите данные в поле ввода"; }
}

// Input Validate

var a_7 = document.getElementById ('a_7');
var output_7 = document.getElementById ('output_7');

function input_validate (lesson, input, output) {
	input_symbol (input, output, "короткая", 6);

	console.log (
		'Задание ' + lesson + '\n' + 
		'резальтат равен: ' + 
		watch_changes (old_value, cur_value)
	);
}

var output_event = document.getElementById ('output_event');
var output_symbol = document.getElementById ('output_symbol');
var output_symbol_ie = document.getElementById ('output_symbol_ie');

// События cut, copy, paste

input_copy (a_7, output_event);

function input_copy (input, output) {
	input.oncut = input.oncopy = input.onpaste = function (event) {
		output.innerHTML = event.type + ' ' + input.value;
		return false;
	};
}

// поле с контролем СМС

// В IE8- событие input не поддерживается, но, как мы видели ранее, есть onpropertychange, которое может заменить его.
// Что же касается IE9 – там поддерживаются и input и onpropertychange, но они оба не работают при удалении символов. Поэтому мы будем отслеживать удаление при помощи keyup на Delete и BackSpace . А вот удаление командой «вырезать» из меню – сможет отловить лишь oncut.

function input_symbol (input, output, value, n) {
	showCount ();
	
	function showCount () {
		if (input.value.length > 0) {
			if (input.value.length < n) { str = value; }
			else { str = ""; }

			if (test (input.value) == "Yes") { _type = "число"; }
			else { _type = "не число"; }

			output.innerHTML = 
				str + " (" + input.value.length + ")" + ", " + 
				_type + ", " + 
				"Число пробелов: " + split_separate (input.value, " ");
		}
		else { output.innerHTML = "Введите данные в поле ввода"; }
	}
	
	input.onkeyup = input.oninput = showCount;
	input.onpropertychange = function () {
		if (event.propertyName == "value") showCount ();
	}
	input.oncut = function () {
		setTimeout (showCount, 0); // на момент oncut значение еще старое
	};
}

// через setInterval регулярно проверять значение и, если оно слишком длинное, обрезать его.
// Чтобы сэкономить ресурсы браузера, мы можем начинать отслеживание по onfocus, а прекращать – по onblur, вот так:
// Обратим внимание – весь этот «танец с бубном» нужен только для поддержки IE8-, в которых не поддерживается oninput и IE9, где oninput не работает при удалении.

function input_symbol_ie (input, output, value, n) {
	showCount (input, output, value, n);

	var timerId;

	input.onfocus = function () {
		var lastValue = input.value;
		timerId = setInterval (function () {
			if (input.value != lastValue) {
				showCount (input, output, value, n);
				lastValue = input.value;
			}
		}, 20);
	};

	input.onblur = function () {
		clearInterval (timerId);
	};
}

// Test isNormalInteger ()

function isNormalInteger (str) {
    var n = Math.floor (Number (str));
    return String (n) === str && n >= 0;
}

// Test ()

function test (str, expect) {
	var n = isNormalInteger (str) ? "Yes" : "No";
	console.log (str + ": " + n);
	return n;
}

// Gid ()

function gid (id) { return document.getElementById (id); }

// Call Gid ()

gid ("btn").addEventListener (
  "click",
  function () {
    test (gid ("a_7").value);
  },
  false
);

// Call Test ()

test ("1");
test ("1.23");
test ("1234567890123");
test ("1234567890123.1");

/*
1: Yes
1.23: No
1234567890123: Yes
1234567890123.1: No

111: Yes
fff: No
*/

// ===== //---// =====
