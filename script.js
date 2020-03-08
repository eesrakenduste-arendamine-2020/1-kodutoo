
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let changeLangButton;

let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let monthContainer = document.querySelector("#month");
let yearContainer = document.querySelector("#year");
let dateConatiner = document.querySelector("#date");

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Januaty', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

dayContainer.innerHTML = days[day];
yearContainer.innerHTML = year;
if(date==1){
    dateConatiner.innerHTML = date + 'st of ' + months[month];
} else if(date==2){
    dateConatiner.innerHTML = date + 'nd of ' + months[month];
} else if(date==3){
    dateConatiner.innerHTML = date + 'rd of ' + months[month];
} else{
    dateConatiner.innerHTML = date + 'th of ' + months[month];
}
//window.setInterval(updateClock, 1000);

EUButton = document.querySelector("#EUFormat");
EUButton.addEventListener('click', showEUTime);

function showEUTime(){
    d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if(hours<10){
        hours = '0'+hours;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }
    if(seconds<10){
        seconds = '0'+seconds;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;

    setTimeout(showEUTime, 1000);
}

button = document.querySelector("#changeThemeButton");
button.addEventListener('click', changeTheme);

var index = 0;
function changeTheme(){
    var bgColorList = ["#202020", "#20b2aa"];
    var textColorList = ["#A0A0A0", "#000000"];
    document.body.style.backgroundColor = bgColorList[index];
    document.body.style.color = textColorList[index];
    index++;
    if (index === bgColorList.length) index=0
}

USButton = document.querySelector("#USFormat");
USButton.addEventListener('click', showUSTime);

function showUSTime(){
    d = new Date();
    let hours = d.getHours(); 
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let session = "AM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    
    if(hours<10){
        hours = '0'+hours;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }
    if(seconds<10){
        seconds = '0'+seconds;
    }    
    time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + session;
    
    setTimeout(showUSTime, 1000);
    
}

randomizeCol = document.querySelector('#container');
randomizeCol.addEventListener('click', randomCol);

function randomCol(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    document.body.style.color = 'rgb('+r+','+g+','+b+')';
}


/*function buttonClick(){
    estChangeLangButton = document.querySelector("#estChangeLang");
    estChangeLangButton.addEventListener('click', estChangeLang);

    engChangeLang = document.querySelector("#engChangeLang");
    engChangeLang.addEventListener('click', engChangeLang);
}

function estChangeLang(){
    dayContainer.innerHTML = paevad[day];
    dateConatiner.innerHTML = date + '. ' + kuud[month];
}

function engChangeLang(){
    dayContainer.innerHTML = days[day];
    dateConatiner.innerHTML = date + '. ' + months[month];
}*/