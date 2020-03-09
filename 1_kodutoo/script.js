window.onload = function(){
    nupp(), nupp2()
}

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
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Aprill', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detesember'];
let button = document.querySelector('#changeColorButton');
let button2 = document.querySelector('#time');

function nupp(){   
    button = document.querySelector("#changeColorButton");
    kell = document.querySelector("#kell");
    
    button.addEventListener('click', changeColor);
 }

 function nupp2(){   
    button = document.querySelector("#changeTextButton");
    time = document.querySelector("#time");
    date = document.querySelector("#date");
    month = document.querySelector("#month");
    year = document.querySelector("#year");
    weekday = document.querySelector("#weekday");
    
    button.addEventListener('click', changeColor2);
 }
 function changeColor(){
    const r = Math.round (Math.random()*255);
    const g = Math.round (Math.random()*255);
    const b = Math.round (Math.random()*255);
 
    kell.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
 }

 function changeColor2(){
    const r = Math.round (Math.random()*255);
    const g = Math.round (Math.random()*255);
    const b = Math.round (Math.random()*255);
 
    time.style.color = 'rgb('+r+', '+g+', '+b+')';
    date.style.color = 'rgb('+r+', '+g+', '+b+')';
    month.style.color = 'rgb('+r+', '+g+', '+b+')';
    year.style.color = 'rgb('+r+', '+g+', '+b+')';
    weekday.style.color = 'rgb('+r+', '+g+', '+b+')';
 }

 function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "2.5em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
  }

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
updateClock();

window.setInterval(updateClock, 1000);

function updateClock(){
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (hours < 10){
        hours = '0' + hours;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
 }

 setInterval(setKell, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setKell() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function myLink() {
    var str = "Repositooriumi link";
    var result = str.link("https://github.com/henrimag/1-kodutoo/tree/master/1_kodutoo");
    document.getElementById("link").innerHTML = result;
  }
