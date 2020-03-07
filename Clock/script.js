let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let score = 0;
let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'märts', 'aprill', 'mai' , 'juuni', 'juuli', 'august', 'septemebr', 'oktoober', 'november', 'detsember'];

yearContainer.innerHTML = year;
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + ". " + months[month];
updateClock();

window.setInterval(updateClock, 1000);

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

document.getElementById("change-color-white").addEventListener("click", toWhite);
document.getElementById("change-color-black").addEventListener("click", toBlack);
document.getElementById("language-eng").addEventListener("click", engLang);
document.getElementById("language-est").addEventListener("click", estLang);

let header = document.getElementById("header");
let everything = document.getElementById("all-items");
let containerBackround = document.getElementsByClassName("time-container");

function toWhite() {

    header.style.backgroundColor = "black";
    header.style.color = "white";
    everything.style.backgroundColor = "black";;

    for(i = 0; i < 4; i++){
        containerBackround[i].style.backgroundColor = "white";
        containerBackround[i].style.color = "black";
    }
    
}

function toBlack() {

    header.style.backgroundColor = "white";
    header.style.color = "black";
    everything.style.backgroundColor = "white";;

    for(i = 0; i < 4; i++){
        containerBackround[i].style.backgroundColor = "black";
        containerBackround[i].style.color = "#F5025F";
    }

}

function engLang() {
    var white = document.getElementById("change-color-white");
    white.innerHTML = "WHITE"

    var white = document.getElementById("change-color-black");
    white.innerHTML = "BLACK";

    let months = ['January', 'February', 'March', 'April', 'May' , 'June', 'July', 'August', 'Septemebr', 'October', 'November', 'December'];
    dateContainer.innerHTML = date + ". " + months[month];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayContainer.innerHTML = days[day];

}

function estLang(){
    var white = document.getElementById("change-color-white");
    white.innerHTML = "VALGE";

    var white = document.getElementById("change-color-black");
    white.innerHTML = "MUST";

    dateContainer.innerHTML = date + ". " + months[month];
    dayContainer.innerHTML = days[day];
}
