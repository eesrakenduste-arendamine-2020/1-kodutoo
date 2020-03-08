
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();


let dayContainer = document.querySelector('#weekday');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');


let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];;
let months = ['Jaanuar', 'Veebruar','Märts','Aprill','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember']

dateContainer.innerHTML = date + " " + months[month] + ", " + days[day];
yearContainer.innerHTML = year;



let time = document.querySelector('#time');
let timeBackground = document.querySelector('div#time');

let clockFontColor = document.querySelector('#clockFontColor');
let clockBackColor = document.querySelector('#clockColor');


let textSize = document.querySelector('#textSize');

updateClock();

window.setInterval(updateClock, 1000);
timeBackground.style.fontSize = "500%";


if(localStorage.getItem("clockFontColor") != null){
    time.style.color = localStorage.getItem("clockFontColor");
    clockFontColor.setAttribute("value",localStorage.getItem("clockFontColor"));
}

if(localStorage.getItem("clockBackColor") != null){
    timeBackground.style.backgroundColor = localStorage.getItem("clockBackColor");
    clockBackColor.setAttribute("value",localStorage.getItem("clockBackColor"));
}

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

function changeClockFontColor(e){

    time.style.color = clockFontColor.value;
    localStorage.setItem("clockFontColor", clockFontColor.value);
}

function changeClockColor(e){

    timeBackground.style.backgroundColor = clockBackColor.value;
    localStorage.setItem("clockBackColor", clockBackColor.value);
}

function changeClockSize(e){
    timeBackground.style.fontSize = textSize.value+"%";

}