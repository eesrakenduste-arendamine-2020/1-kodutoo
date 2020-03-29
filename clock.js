let d = new Date();
let weekday = d.getDay();
let year = d.getFullYear();
let r;
let g;
let b;

let time = document.querySelector("#time");
let dateContainer = document.querySelector("#date");
let weekdayContainer = document.querySelector("#weekday");
let yearContainer = document.querySelector('#year');
let weekdays = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];

weekdayContainer.innerHTML = weekdays[weekday];
yearContainer.innerHTML = year;
dateContainer.innerHTML = date;

updateDate();
updateClock();
setInterval(updateClock, 1000);

function updateDate(){
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    if(date < 10){
        date = "0" + date;
    }
    if(month < 10){
        month = "0" + month;
    }
    dateContainer.innerHTML = date + "." + month;
}

function updateClock(){
    let d = new Date();
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
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

let openyoutubeButtons = document.querySelector('#openyoutube');
let colorButtons = document.querySelector('#textcolour');
let opentoggleButtons = document.querySelector('#opentoggle');

openyoutubeButtons.addEventListener("click", ()=>{window.open("https://www.youtube.com/watch?v=SN3xlcjbvUo");});
colorButtons.addEventListener('click', changeTextColor);
opentoggleButtons.addEventListener("click", ()=>{window.open("https://toggl.com/app/timer");});

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}

function changeTextColor(){
    generateColor()
    container.style.color = 'rgb('+ r +','+ g +',' + b + ')';
    author.style.color = 'rgb('+ r +','+ g +',' + b + ')';
}
