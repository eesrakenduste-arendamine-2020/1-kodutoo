let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();
let counter = 0;
let datecounter = 0;
let timecounter = 0;

let fulldateContainer = document.querySelector("#container2");
let colorbutton = document.querySelector("#changecolor");
let backgroundbutton = document.querySelector("#changebackground");
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
  "Laupäev",
  "Pühapäev"
];
let months = [
  "Jaanuar",
  "Veebruar",
  "Märts",
  "Aprill",
  "Mai",
  "Juuni",
  "Juuli",
  "August",
  "September",
  "Oktoober",
  "November",
  "Detsember"
];

fulldateContainer.innerHTML = date + " " + months[month] + " " + year;
dayContainer.innerHTML = days[day];
colorbutton.addEventListener("click", changeColor);
backgroundbutton.addEventListener("click", changeBackground);
fulldateContainer.addEventListener("click", changeDateFormat);
time.addEventListener("click", changeTimeFormat);

updateClock();

window.setInterval(updateClock, 1000);

function updateClock() {
  let d = new Date();
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

  if (timecounter % 2 == 1) {
    hours = ((hours + 11) % 12) + 1;
  }
  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function changeColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  var container = document.getElementById("container");
  container.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeBackground() {
  counter++;
  if (counter % 2 == 1) {
    document.body.style.backgroundImage =
      "url(https://images.wallpapersden.com/image/download/new-york-city-buildings-at-day-sunlight_59756_1920x1080.jpg)";
  } else {
    document.body.style.backgroundImage = null;
  }
}

function changeDateFormat() {
  datecounter++;
  if (datecounter % 2 == 1) {
    fulldateContainer.innerHTML = date + "." + month + "." + year;
  } else {
    fulldateContainer.innerHTML = date + " " + months[month] + " " + year;
  }
}

function changeTimeFormat() {
  timecounter++;
}
