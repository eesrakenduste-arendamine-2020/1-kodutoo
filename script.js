window.onload = function(){
    start();
}
let d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let musicStatus = 0;

let backgroundElement = document.querySelector('#body');
let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let creatorContainer = document.querySelector('#creator');
let musicElement = document.querySelector('#music');

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];


dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;
updateClock();

function start(){
    button1 = document.querySelector('#changeColor'); 
    button2 = document.querySelector('#removeBackground');  
    button3 = document.querySelector('#changeFont');
    audioElement = document.querySelector('#musicPlayer');
    button1.addEventListener('click', changeColor);
    button2.addEventListener('click', removeBackground);
    button3.addEventListener('click', changeFont);
    audioElement.addEventListener('click', musicPlayer);
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
    dayContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    dateContainer.style.color= 'rgb('+ r +','+ g + ',' + b +')'; 
    generateColor()
    monthContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    yearContainer.style.color = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor()
    time.style.color = 'rgb('+ r +','+ g + ',' + b +')';
}

function removeBackground(){
    backgroundElement.style.background = '0';
    backgroundElement.style.backgroundColor = 'rgb(53, 53, 53)';
}

function changeFont(){
    time.style.fontSize = '80px';
    dayContainer.style.fontSize = '80px';
    dateContainer.style.fontSize = '30px'; 
    monthContainer.style.fontSize = '30px';
    yearContainer.style.fontSize = '30px';

}

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255); 
}

function musicPlayer(){
    if(musicStatus == 0){
        musicElement.play();
        musicElement.volume = 0.05;
        musicStatus = 1;
    }else if(musicStatus == 1){
        musicElement.pause();
        musicStatus = 0;
    }
} 
