function foo() {
	a = document.getElementById("a").value;
	if (a.length < 6) {
		document.getElementById("out")
			.innerHTML = "Короткая";
	}
}