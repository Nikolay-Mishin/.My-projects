function foo() {
	a = document.getElementById("a").value;
	a = parseFloat(a);
	if (!isNaN(a)) {
		document.getElementById("out")
			.innerHTML = "Число";
	} else {
		document.getElementById("out")
			.innerHTML = "Не число";
	}
}

