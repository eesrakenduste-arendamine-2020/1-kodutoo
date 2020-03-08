let d = new Date();
let r, g, b;
let score = 0;
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let fontcounter = 0;

let fullContainer = document.querySelector("#container");
let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let movebutton = document.querySelector("#addButton");
let vadin = document.querySelector("#vidinButton");

let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'Sepetember', 'Oktoober', 'November', 'Detsember'];


dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;
updateClock();
setInterval(updateClock, 1000);

movebutton.addEventListener('click', changeColor);  
vadin.addEventListener('click', changeFont);

function changeColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    time.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
    
}

function changeFont() {
    fontcounter++;
    if (fontcounter % 2 == 1) {
    dayContainer.style.fontFamily = "Impact,Charcoal,sans-serif";
    } else {
    dayContainer.style.fontFamily = null;

    }
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

    console.log(d);
}

class clock{
    constructor(){
        this.entries = JSON.parse(window.localStorage.getItem('entries')) || [];
        this.render();
    }
}


