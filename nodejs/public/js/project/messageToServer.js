
var socket = io();

var img = document.getElementById("banner");

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (input.value) {
		socket.emit('app_message', input.value);
		input.value = '';
	}
});

socket.on('app_message', function (msg) {

	if(msg != ""){
		
		img.src = "images/" + msg;
		console.log(img.src);
	}
	else{
		img.src = "images/black.png"
	}
});