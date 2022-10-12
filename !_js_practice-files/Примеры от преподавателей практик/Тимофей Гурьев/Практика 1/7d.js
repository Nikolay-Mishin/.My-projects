function foo() {
	var a = document.getElementById("a").value;
	a = a.split(" ");
	document.getElementById("out")
		.innerHTML = a.length - 1;
}

