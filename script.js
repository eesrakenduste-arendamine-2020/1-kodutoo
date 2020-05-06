window.onload = function(){
    start();
}
//muusikamängija staatus; 0=peatatud(default)ja vajutusel käivitub, 1=vajutusel peatab mängimise
let musicStatus = 0;

//kuupäeva hankimine
let d1 = new Date();
let day = d1.getDay();
let date = d1.getDate();
let month = d1.getMonth();
let year = d1.getFullYear();

//elementide ette valmistamine
let timeNow = document.querySelector('#time');
let weekDay = document.querySelector('#day');
let dateToday = document.querySelector('#date');
let monthToday = document.querySelector('#month');
let yearToday = document.querySelector('#year');

let clockElement = document.querySelector('#clock');
let dateElement = document.querySelector('#dateDay');
let backgroundElement = document.querySelector('#body');
let musicElement = document.querySelector('#music');

//päevade/kuude nimetused
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];

//kuupäeva kuvamine
weekDay.innerHTML = days[day];
dateToday.innerHTML = date;
monthToday.innerHTML = months[month];
yearToday.innerHTML = year;

updateClock();

function start(){
    button1 = document.querySelector('#removeColor'); 
    button2 = document.querySelector('#removeWallPaper'); 
    button3 = document.querySelector('#blackText');  
    button4 = document.querySelector('#whiteText');
    button5 = document.querySelector('#fontSmaller');
    audioElement = document.querySelector('#clock');

    //vajutuste kuulamine
    button1.addEventListener('click', removeClockColor);
    button2.addEventListener('click', removeWallPaper);
    button3.addEventListener('click', blackText);
    button4.addEventListener('click', whiteText);
    button5.addEventListener('click', changerFontSize);
    audioElement.addEventListener('click', controlMusic);
}

setInterval(updateClock, 1000);

function updateClock(){
    //kella uuendamis funktsioon
    d1 = new Date();
    let seconds = d1.getSeconds();
    let minutes = d1.getMinutes();
    let hours = d1.getHours();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    //kellaaja kuvamine
    timeNow.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function removeClockColor(){
    //kella ja kuupäeva taustavärvi eemaldamine
    clockElement.style.backgroundColor = 'transparent';
    dateElement.style.backgroundColor = 'transparent';

    weekDay.style.color = 'gray';
    timeNow.style.color = 'gray';

    dateToday.style.color= 'gray'; 
    monthToday.style.color = 'gray';
    yearToday.style.color = 'gray';
}

function blackText(){
    //kella ja kuupäeva värvi muutmine
    weekDay.style.color = 'black';
    timeNow.style.color = 'black';

    dateToday.style.color= 'black'; 
    monthToday.style.color = 'black';
    yearToday.style.color = 'black';
}

function whiteText(){
    //kella ja kuupäeva värvi muutmine
    weekDay.style.color = 'white';
    timeNow.style.color = 'white';

    dateToday.style.color= 'white'; 
    monthToday.style.color = 'white';
    yearToday.style.color = 'white';
}

function changerFontSize(){
    //kella ja kuupäeva fondi muutmine
    weekDay.style.fontSize = '10vh';
    timeNow.style.fontSize = '10vh';

    dateToday.style.fontSize = '3vh'; 
    monthToday.style.fontSize = '3vh';
    yearToday.style.fontSize = '3vh';
}

function removeWallPaper(){
    //taustapildi eemaldamine
    backgroundElement.style.background = "0";
    backgroundElement.style.backgroundColor = "black";
}

function controlMusic(){
    //muusika mängimine
    if(musicStatus==0){
        musicElement.play();
        musicElement.volume = 0.05;
        musicStatus=1;
    }else if(musicStatus==1){
        musicElement.pause();
        musicStatus=0;
    }
}