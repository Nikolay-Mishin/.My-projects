document.querySelector("#go").
	addEventListener(
		"click",
		function() {
			var b = document.getElementById("in").value;
			document.getElementById("out").innerHTML 
				+= isSimple(b) + "<br>";
		}
	);

/*
* Определяет, простое ли число
* Возвращает строку "Простое" или "Не простое"
*/
function isSimple(x) {
	var end = Math.sqrt(x);
	for (var i = 2; i <= end; i++) {
		if ((x % i) == 0) {
			return "Не простое";
		}
	}
	return "Простое";
}	

function isSimple2(x) {
	var end = Math.sqrt(x);
	var res = "Простое";
	for (var i = 2; i <= end; i++) {
		if ((x % i) == 0) {
			res = "Не простое";
			break;
		}
	}
	return res;
}
