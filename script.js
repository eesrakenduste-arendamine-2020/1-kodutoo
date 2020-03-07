window.onload = function(){
    start();
}
let d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let makerContainer = document.querySelector('#maker');

let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];


dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;
updateClock();

function start(){
button = document.querySelector('#changeColor'); 
button2 = document.querySelector('#changeColor2'); 
button3 = document.querySelector('#changeColor3');  
button4 = document.querySelector('#changeFont');
button5 = document.querySelector('#changeColor4');
button.addEventListener('click', changeColor);
button2.addEventListener('click', changeColor2);
button3.addEventListener('click', changeColor3);
button4.addEventListener('click', changeFont);
button5.addEventListener('click', changeColor4);
}

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

function changeColor(){
    generateColor()
    dayContainer.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    dateContainer.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')'; 
    generateColor()
    monthContainer.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    yearContainer.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    time.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    makerContainer.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
}

function changeColor2(){
    generateColor()
    dayContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    dateContainer.style.color= 'rgb('+ r +','+ g + ',' + b +')'; 
    generateColor()
    monthContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    yearContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    time.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    makerContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
}
function changeColor3(){
    dayContainer.style.color = 'white';
    dateContainer.style.color= 'white'; 
    monthContainer.style.color = 'white';
    yearContainer.style.color = 'white';
    time.style.color = 'white';
    makerContainer.style.color = 'white';
}
function changeColor4(){
    dayContainer.style.backgroundColor = 'transparent';
    dateContainer.style.backgroundColor = 'transparent';
    monthContainer.style.backgroundColor = 'transparent';
    yearContainer.style.backgroundColor = 'transparent';
    time.style.backgroundColor = 'transparent';
    makerContainer.style.backgroundColor = 'transparent';
}
function changeFont(){
    dayContainer.style.fontSize = '51px';
    dateContainer.style.fontSize = '51px'; 
    monthContainer.style.fontSize = '51px';
    yearContainer.style.fontSize = '51px';
    time.style.fontSize = '51px';
    makerContainer.style.fontSize = '51px';
}
function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255); 
}
//et autoplay töötaks ka google chromes
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}