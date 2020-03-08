let d = new Date();
let day = d.getDay();
let month = d.getMonth();

let dayContainer = document.querySelector("#w_paevad");
let monthContainer = document.querySelector("#month");
let time = document.querySelector("#time");

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
  "November",
  "Detsember"
];

dayContainer.innerHTML = days[day];
monthContainer.innerHTML =
  d.getDate() + " " + months[month] + " " + d.getFullYear();

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
  time.innerHTML = hours + ":" + minutes;
}

document.getElementById("changeD").onclick = function() {
  document.getElementById("time").style.textShadow =
    "0 0 30px rgb(253, 253, 253),  0 0 50px rgba(106, 159, 179, 0.281)";
  document.getElementById("month").style.textShadow =
    "0 0 30px rgb(253, 253, 253),  0 0 50px rgba(106, 159, 179, 0.281)";
  document.getElementById("w_paevad").style.textShadow =
    "0 0 30px rgb(253, 253, 253),  0 0 50px rgba(106, 159, 179, 0.281)";
};

document.getElementById("changeN").onclick = function() {
  document.getElementById("time").style.textShadow =
    "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px";
  document.getElementById("month").style.textShadow =
    "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px";
  document.getElementById("w_paevad").style.textShadow =
    "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px";
};

document.getElementById("tekst").onclick = function() {
  document.getElementById("time").style.fontFamily = 'Courier New, Courier, monospace';    
  document.getElementById("month").style.fontFamily = 'Courier New, Courier, monospace';
  document.getElementById("w_paevad").style.fontFamily = 'Courier New, Courier, monospace';
};

document.getElementById("asukohT").onclick = function() {
  document.getElementById("lala").style.background =
    'url("img/toko_blur_1.jpg") no-repeat center center fixed';
};
