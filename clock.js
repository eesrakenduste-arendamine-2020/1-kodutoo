let d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['jaanuar', 'veebruar', "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

let time = document.querySelector('#time');

gifChangeClick();
upDateClock();
window.setInterval(upDateClock, 1000);

function changeColor(){
    generateColor();
    time.style.color = 'rgb('+ r +','+g+','+b+ ')';
}

function gifChangeClick(){
    randomGif = Math.floor(Math.random() * 25) + 1; 
    document.querySelector("#gif1").src = "images/" + randomGif + ".gif";
}

let dateContainer = document.querySelector('#date');
dateContainer.innerHTML = days[day] + ": " + date + "." + months[month] + ", " + year;

function upDateClock(){
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    time.innerHTML = hours + ':' + minutes + ":" + seconds;
}

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}

let dare = document.querySelector('#dare');
let doubleDare = document.querySelector('#doubleDare');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');

dare.addEventListener('click', () => {
    window.setInterval(strobo, 500);
})

function strobo() {
    generateColor();
    box1.style.backgroundColor = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box2.style.backgroundColor = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box3.style.backgroundColor = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box4.style.backgroundColor = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box5.style.backgroundColor = 'rgb('+ r +','+g+','+b+ ')';
}


doubleDare.addEventListener('click', () => {
    window.setInterval(stroboText, 500);
})

function stroboText() {
    generateColor();
    box1.style.color = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box2.style.color = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box3.style.color = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box4.style.color = 'rgb('+ r +','+g+','+b+ ')';
    generateColor();
    box5.style.color = 'rgb('+ r +','+g+','+b+ ')';
}