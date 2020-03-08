

/*
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let score = 0;
let scoreContainer = document.querySelector('#score');
let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar','Märts',"Aprill",'Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember'];

let clockFontColor = document.querySelector('#clockFontColor');

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + " " + months[month] + ", " + days[day];
updateClock();

window.setInterval(updateClock, 1000);


function changeClockFontColor(e){

    time.style.color = clockFontColor.value
    console.log(clockFontColor.value);
}

clockFontColor.addEventListener("onchange",changeClockFontColor);

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

dateContainer.addEventListener('mouseover', changePosition);

function changePosition(){
    let alignPosition = ['flex-end', 'center', 'flex-start'];
    score++;
    scoreContainer.innerHTML = score;

    yearContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.order = Math.round(Math.random()*25);
    dayContainer.style.order = Math.round(Math.random()*25);
    time.style.order = Math.round(Math.random()*25);
    monthContainer.style.order = Math.round(Math.random()*25);
    scoreContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.alignSelf = alignPosition[Math.floor(Math.random()*3)];


}*/
