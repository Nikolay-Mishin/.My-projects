document.querySelector("#go").
addEventListener(
	"click",
	function () {
	document.getElementById("out").innerHTML = "";

	var a = document.getElementById("a").value;
	a = a.split(",");

	for (var i = 0; i < a.length; i++) {
		a[i] = parseInt(a[i]);
	}

	/* Сортировка простыми вставками */
	/* Здесь по возрастанию, а надо по убыванию */
	var left = 0;
	var tmp = 0;
	var minIndex = 0;
	for (var i = 0; i < a.length - 1; i++) {
		minIndex = left;
		for (var j = left; j < a.length; j++) {
			if (a[j] < a[minIndex]) {
				minIndex = j;
			}
		}
		tmp = a[left];
		a[left] = a[minIndex];
		a[minIndex] = tmp;
		left++;
	}

	document.getElementById("out").innerHTML +=
	a.join(",") + "<br>";
});
