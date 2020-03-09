let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let score = 0;
let scoreContainer = document.querySelector('#score');
let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let yearContainer = document.querySelector("#year");
let monthContainer = document.querySelector("#month");
let dateContainer = document.querySelector("#date");
let days = [
  "Pühapäev",
  "Esmaspäev",
  "Teisipäev",
  "Kolmapäev",
  "Neljapäev",
  "Reede",
  "Laupäev"
];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
updateClock();

window.setInterval(updateClock, 1000);

function updateClock() {
  d = new Date();
  let seconds = d.getSeconds();
  let minutes = d.getMinutes();
  let hours = d.getHours();
  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

var x = document.getElementById("music");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

function changeFont() {
  document.getElementById("fulldate").style.fontFamily = "Impact,Charcoal,sans-serif";
}

function changeFontColor() {
  document.getElementById("fulldate").style.color = "red";
}

function resetFont() {
  document.getElementById("fulldate").style.color = "rgb(17, 190, 118)";
  document.getElementById("fulldate").style.fontFamily = "Calibri";
}

document.addEventListener("click", myFunction);

function myFunction() {
  alert ("Dr.Disrespect - Gillette (The Best A Man Can Get)")
}


