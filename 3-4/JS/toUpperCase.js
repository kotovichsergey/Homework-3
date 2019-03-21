let send = document.getElementById('send');
//проверка ввода
function check() {
	let text = document.getElementById('text').value;
		send.disabled = (text) ? false : true;
}
//сброс
function check_reset() {
	send.disabled = "true";
	document.getElementById('text').value = "";
}
//преобразование введённого текста
function toCapitalCase() {
	let text = document.getElementById('text').value,
		array = text.trim().replace(/\s+/g, ' ').split(' '),
		capital = ([first,...rest]) => first.toUpperCase() + rest.join('');
	if (text.trim()) {
		for (let i = 0; i < array.length; i++) {
			array[i] = capital(array[i]);
		}
		alert("Ваш преобразованный текст:\n" + array.join(' '));	
	} else {
		alert("Введите текст");
	}
}
send.onclick = toCapitalCase;