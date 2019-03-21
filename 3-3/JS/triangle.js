let send = document.getElementById('send'),
	result = document.getElementsByClassName('result');
//проверка ввода
function check() {
	let simbol = document.getElementById('simbol').value;
	send.disabled = (simbol) ? false : true;
}
//сброс
function check_reset() {
	send.disabled = "true";
	document.getElementById('simbol').value = "";
	document.getElementById('lines').value = 3;
	result[0].innerHTML = "";
	console.clear();
}
//сбор данных с формы и построение треугольника
function draw() {
	let simbol = document.getElementById('simbol').value,
		lines = document.getElementById('lines').value,
	drawTriangle = (simbol, lines) => {	
		//строим треугольник
		let i = 0, j = 0;
		while (i < lines) {
			let space = "",
				star = "";
			for (j = 0; j < lines - i; j++) {
				space += " ";
			}
			for (j = 0; j < 2 * i + 1; j++) {
				star += simbol;
			}
			console.log(space + star);
			i++;
		}
	};	
	//убираем старый результат
	console.clear();
	//выводим новый
	drawTriangle (simbol, lines);
	result[0].innerHTML = "Результат построения в консоли";
}
send.onclick = draw;