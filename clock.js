let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();
let Tick;

let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let months = ['-01-','-02-','-03-','-04-','-05-','-06-','-07-','-08-','-09-','-10-','-11-','-12-']

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];

if (date < 10){
	date = "0" + date;
	dateContainer.innerHTML = date;
}




window.setInterval(updateClock, 1000);
window.setInterval(playTick, 1000);



function updateClock() {
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
	let days = d.getDay();
	let months = d.getMonth();
	let years = d.getFullYear();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }  
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function night(){
	let btn = document.getElementById('night');
	if(btn.value == "Pime"){
		document.body.style.backgroundColor = 'black';
		document.getElementById('time').style.color = 'white';
		document.getElementById('month').style.color = 'white';
		document.getElementById('year').style.color = 'white';
		document.getElementById('date').style.color = 'white';
		document.getElementById('name').style.color = 'white';
		btn.value = "Valge";
		btn.innerHTML = "Valge";
	} else {		
		document.body.style.backgroundColor = 'white';
		document.getElementById('time').style.color = 'black';
		document.getElementById('month').style.color = 'black';
		document.getElementById('year').style.color = 'black';
		document.getElementById('date').style.color = 'black';
		document.getElementById('name').style.color = 'black';
		btn.value = "Pime";
		btn.innerHTML = "Pime";
	}
}

function Switch(){
	let btn = document.getElementById('mute');
	if(btn.value == "Vaigista"){
		btn.value = "Heli sisse";
		btn.innerHTML = "Heli sisse";
	} else {
		btn.value = "Vaigista";
		btn.innerHTML = "Vaigista";
	}
}

function playTick() {
	let btn = document.getElementById('mute').value;
	if(btn == "Vaigista"){
		document.getElementById('Tick').play();
	} else {
		document.getElementById('Tick').pause();
	}
}









