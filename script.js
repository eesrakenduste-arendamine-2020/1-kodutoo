let d = new Date();
let r, g, b;
//let score = 0;
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let nameContainer = document.querySelector('#name'); 
//let scoreContainer = document.querySelector('#score');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts','April','Mai','Juuni','Juuli','August','September','November','Detsember'];
let name="Nina Katarina Weiss"
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;
nameContainer.innerHTML = name;
updateClock();

//scoreContainer.addEventListener('click', movePosition);

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

const positions = ['flex-start', 'flex-end', 'center'];
function movePosition(){
    //score++;
    //scoreContainer.innerHTML = score;
    time.style.order = Math.round(Math.random()*25);
    dayContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.order = Math.round(Math.random()*25);
    monthContainer.style.order = Math.round(Math.random()*25);
    yearContainer.style.order = Math.round(Math.random()*25);
    nameContainer.style.order = Math.round(Math.random()*25);
    
    //scoreContainer.style.order = Math.round(Math.random()*25);
    //scoreContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    time.style.alignSelf = positions[Math.floor(Math.random()*3)]; 
    dayContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    dateContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    monthContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    yearContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    nameContainer.style.alignSelf = positions[Math.floor(Math.random()*3)];
    
    generateColor();
    time.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor();
    dayContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor();
    dateContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor();
    monthContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor();
    yearContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor();
    nameContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    /*generateColor();
    scoreContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';*/

}

function generateColor(){
    r = Math.round(Math.random()*155);
    g = Math.round(Math.random()*155);
    b = Math.round(Math.random()*155);
}

window.addEventListener('keypress', changeColor);
function changeColor(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    time.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    
}

window.addEventListener('click', changeText);
function changeText(){

    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    time.style.color = 'rgb('+r+','+g+','+b+')';
     
}
window.addEventListener('mouseover',changeFont);
function changeFont(){
    time.style.fontFamily='Georgia';
    
}