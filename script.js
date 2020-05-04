let d = new Date();

let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let creator = document.querySelector('#creator');

let time = document.querySelector('#time');
let timeContainer = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');


let days = ['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
let months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

timeContainer.innerHTML = time;
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;

creator.addEventListener('click', creatorColor);
timeContainer.addEventListener('click', changeColor);
dayContainer.addEventListener('click', changeColor);
dateContainer.addEventListener('click', changeColor);
monthContainer.addEventListener('click', changeColor);
yearContainer.addEventListener('click', changeColor);

updateClock();
setInterval(updateClock, 1000);

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

    console.log(d);
}


function showDate(){
    let date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let dateTime = day + month + year;
    document.getElementById('date').innerHTML = dateTime;
}

function facebook(){
    location.replace("https://www.facebook.com");
}

function instagram(){
    location.replace("https://www.instagram.com");
}

function twitter(){
    location.replace("https://www.twitter.com");
}

function repository(){
    location.replace("https://github.com/Lypton/eesrakendused");
}

function randomColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}

function changeColor(){
    randomColor();
    timeContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    randomColor();
    dayContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    randomColor();
    dateContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    randomColor();
    yearContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    randomColor();
    monthContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
}

function creatorColor(){
    randomColor();
    creator.style.color = 'rgb('+ r +','+ g +','+ b +')';
}

function playMusic(){
    document.getElementById("music").play();
}
function stopMusic(){
    document.getElementById("music").pause();
}

