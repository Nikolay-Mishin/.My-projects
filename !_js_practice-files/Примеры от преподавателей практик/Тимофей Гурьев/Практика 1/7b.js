function foo() {
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	if (a.indexOf(b) != -1) {
		document.getElementById("out")
			.innerHTML = "Да";
	} else {
		document.getElementById("out")
			.innerHTML = "Нет";
	}
}

