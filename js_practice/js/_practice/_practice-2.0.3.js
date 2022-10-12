/* ...................................... 

    	Массивы
		
...................................... */

function calc () {
	let line = document.querySelector ('input[name=line]').value;

	let a = line.split (', ');
	console.log (a);

	for (let i in a) {
		a[i] = Number (a[i]);
	}

	a.forEach (function (ai, i) {
		a[i] = Number (a[i]);
	});

	function toto (ai) {
		return Number (ai);
	}

	a = a.map (toto ());

	a = a.map (Number);

	a.sort ();

	let outputEl = document.querySelector ('.output');
	outputEl.innerHTML = '';
	outputEl.innerHTML += a[a.length] - 1;
	console.log (a[a.length] - 1);
}

// ===== //---// =====
