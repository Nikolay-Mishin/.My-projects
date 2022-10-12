/* ...................................... 

    	Практика 2
		
...................................... */

function calc0 () {
	output.value = Number (a.value) + Number (b.value);
}

function calc1 () {
	// получить данные
	let a = Number (document.querySelector ('input[name=a]').value);
	let b = Number (document.querySelector ('input[name=b]').value);
	console.assert (!isNaN (a));
	console.assert (!isNaN (b));

	// посчитать
	let c = a + b;

	// вывести результат
	let output = document.querySelector ("input[name=output]");
	output.value = c;
	console.log (c);
}

function calc2 () {
	// получить данные
	let a = Number (document.getElementById ('a').value);
	let b = Number (document.getElementById ('b').value);
	document.getElementById ('output').value = a + b;
}
