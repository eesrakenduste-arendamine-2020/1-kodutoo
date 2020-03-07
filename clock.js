let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']

var x = document.getElementById("myMusic");
var y = document.getElementById("time");
yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
updateClock();
play();
pause();
popup();
hideClock();

window.setInterval(updateClock, 1000);

document.addEventListener("click", popup);

function updateClock(){
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds; 
}


function play(){ 
    x.play(); 
} 
  
function pause(){ 
    x.pause(); 
} 

function popup(){
    alert ("Tere tulemast Paasi kodulehele! Viiruste eest ei vastuta, kui saad :D")
}

function hideClock(){
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function randomize() {
    document.getElementById('time').style.color = randomColors();
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}