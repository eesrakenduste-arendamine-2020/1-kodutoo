let d = new Date();

let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let score = 0;

let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
let monthsEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let daysEng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//time.innerHTML = hours + ':' + minutes + ':' + seconds;
yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
updateClock();
window.setInterval(updateClock, 1000);

function updateClock(){
    let d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours; 
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
    console.log(year, minutes, hours);
}

let x = document.getElementById("sunny");
let y = document.getElementById("rainy");
let s = document.getElementById("playMusic");
let colors = document.getElementById("colors")
let english = document.querySelector('#english')

colors.addEventListener('click', changeColors);
colors.addEventListener('mouseover', returnColors);
english.addEventListener('click', changeLanguage);
english.addEventListener('dblclick', languageBack);



x.addEventListener('click', changeGif);
y.addEventListener('click', changeBack);

function changeGif(){
    document.getElementById('body').style.backgroundImage = "none";
    s.muted = true;
    document.getElementById("rainy").style.visibility = "visible";
    document.getElementById("sunny").style.visibility = "hidden";
}
function changeBack(){
    document.getElementById("body").style.backgroundImage = "url('vihm.gif')";
    document.getElementById("body").style.backgroundPosition = "100%";
    document.getElementById("body").style.backgroundSize = "cover";
    s.muted = false;
    document.getElementById("rainy").style.visibility = "hidden";
    document.getElementById("sunny").style.visibility = "visible";
}

function changeLanguage(){
     monthContainer.innerHTML = monthsEng[month];
     dayContainer.innerHTML = daysEng[day];
     document.getElementById('sunny').innerHTML = "Sun!";
     document.getElementById('rainy').innerHTML = "Thunder!";
     document.getElementById('english').innerHTML = "1 click = english <br> <br> 2 clicks = estonian";
     document.getElementById('colors').innerHTML = "Press me!";
     document.getElementById('github').innerHTML = "REPOSITORY";
}

function languageBack(){
    monthContainer.innerHTML = months[month];
    dayContainer.innerHTML = days[day];
    document.getElementById('sunny').innerHTML = "Päikest!";
    document.getElementById('rainy').innerHTML = "Vihma!";
    document.getElementById('english').innerHTML = "1 klikk = inglise keel <br> <br> 2 klikki = eesti keel";
    document.getElementById('colors').innerHTML = "Vajuta mind!";
    document.getElementById('github').innerHTML = "REPOSITOORIUM";
}

 function changeColors(){
    //console.log('hiir üle');
    document.getElementById('container').style.animationName = "test";
    document.getElementById('container').style.animationDuration = "60s";
}

function returnColors(){
    document.getElementById('container').style.animationName = "none";
    document.getElementById('container').style.animationDuration = "20s";
}