window.onload = function() {
  updateClock();
};

let button;
let first;
let second;
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

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

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;

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

function changeColor() {
  document.getElementById("btn1");
  document.body.style.background = "Red";
}

function changeColor2() {
  document.getElementById("btn2");
  document.body.style.background = "green";
}
function changeColor3() {
  document.getElementById("btn3");
  document.body.style.background = "blue";
}

function changeColor4() {
  document.getElementById("btn4");
  document.body.style.background = "gray";
}
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

time.onmousedown = function(event) {
  time.style.position = "absolute";
  time.style.zIndex = 1000;

  document.body.append(time);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    time.style.left = pageX - time.offsetWidth / 2 + "px";
    time.style.top = pageY - time.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  time.onmouseup = function() {
    document.removeEventListener("mousemove", onMouseMove);
    time.onmouseup = null;
    time.ondragstart = function() {
      return false;
    };
  };
};
