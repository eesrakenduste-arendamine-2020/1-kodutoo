let d = new Date();
let day = d.getDay();

let container = document.querySelector('#container');
let time = document.querySelector('#time');
let dayDiv = document.querySelector('#day');
let dateDiv = document.querySelector('#date');
let repoButton = document.querySelector('#repo');
let picButton = document.querySelector('#background');

repoButton.addEventListener('click', ()=>{window.location.href="https://github.com/anetevlu/1-kodutoo";});

let days = ['PÜHAPÄEV', 'ESMASPÄEV', 'TEISIPÄEV', 'KOLMAPÄEV', 'NELJAPÄEV', 'REEDE', 'LAUPÄEV'];
let months = ['JAANUAR', 'VEEBRUAR', 'MÄRTS', 'APRILL', 'MAI', 'JUUNI', 'JUULI', 'AUGUST', 'SEPTEMBER', 'OKTOOBER', 'NOVEMBER', 'DETSEMBER'];
dayDiv.innerHTML = days[day];

updateClock();
setInterval(updateClock, 1000);
Datediv();

function Datediv(){
    d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    if(date < 10){
        date = '0' + date;
    }
    if(month < 10){
        month = '0' + month;
    }
    dateDiv.innerHTML = date + "." + month + "." + year;
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

dateDiv.addEventListener('mouseover', showMonth);
dateDiv.addEventListener('click', Datediv);

function showMonth(){
    let month = d.getMonth();
    year = d.getFullYear();
    dateDiv.innerHTML = months[month] + " " + year;
}

cButton = document.querySelector('#colourButton');
cButton.addEventListener('click', changeColor);

function changeColor(){
    if(cButton.style.color == 'black'){
        container.style.color = 'white';
        repoButton.style.color = 'white';
        cButton.style.color = 'white';
        picButton.style.color = 'white';
    } else {                
        container.style.color = 'black';
        repoButton.style.color = 'black';
        cButton.style.color = 'black';  
        picButton.style.color = 'black';
    }
       
}

picButton.addEventListener('click', changeBg);

let pic1 = "url('pilt1.jpg')"; //0
let pic2 = "url('pilt2.jpg')"; //1
let pic3 = "url('pilt3.jpg')"; //2

//container.style.backgroundImage = "url('pilt1.jpg')";
let n = 1;
function changeBg(){
    if(n == 1){
        container.style.backgroundImage = "url('pilt2.jpg')";
        n++;
    } else if(n == 2){
        container.style.backgroundImage = "url('pilt3.jpg')";
        n = 3;
    } else {
        container.style.backgroundImage = "url('pilt1.jpg')";
        n = 1;

    }
}