let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let yearContainer = document.querySelector("#year");
//let monthContainer = document.querySelector("#month");
let dateContainer = document.querySelector("#date");
updateClock();

let days = [
  "pühapäev",
  "esmaspäev",
  "teisipäev",
  "kolmapäev",
  "neljapäev",
  "reede",
  "laupäev"
];
let months = [
  "jaanuar",
  "veebruar",
  "märts",
  "aprill",
  "mai",
  "juuni",
  "juuli",
  "august",
  "september",
  "oktoober",
  "november",
  "detsember"
];

yearContainer.innerHTML = year;
//monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + "." + " " + months[month];

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
  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

time.addEventListener("click", clockChangeColor);
dateContainer.addEventListener("click", dateChangeColor);
dayContainer.addEventListener("click", dayChangeColor);
yearContainer.addEventListener("click", yearChangeColor);

function clockChangeColor() {
  time.style.color = getRandomColor();
}

function dateChangeColor() {
    dateContainer.style.color = getRandomColor();
}

function dayChangeColor() {
    dayContainer.style.color = getRandomColor();
}

function yearChangeColor() {
    yearContainer.style.color = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function darkMode() {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "rgb(0, 0, 0)";
  document.getElementById("container").style.backgroundColor = "black";
}

function changeSize() {
  /*var id = document.getElementById("time");
  var style = window.getComputedStyle(id, null).getPropertyValue("font-size");
  var currentSize = parseInt(style);
  currentSize++;
  document.getElementById("time").style.fontSize = currentSize.toString();*/
  document.getElementById("time").style.fontSize = "20em";

}