

let d = new Date();
let date = d.getDate();
let hours = d.getHours(); 
let minutes = d.getMinutes(); 
let month = d.getMonth();
let year = d.getFullYear();
let day = d.getDay();
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli'];
let r, g, b;



let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let changeTime = document.querySelector('#changeTime');
let changeColour = document.querySelector('#changeColour');


changeColour.addEventListener('click', changeColor);
changeTime.addEventListener('click', changePMAM);

upDateClock();

dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;

function upDateClock(){
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
    window.setInterval(upDateClock, 1000);
}

function generateColor(){
    r = Math.round(Math.random()*155);
    g = Math.round(Math.random()*155);
    b = Math.round(Math.random()*155);
}

function changeColor(){
    generateColor();
    time.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
}

function changePMAM(){
        let seconds = d.getSeconds();
        let newformat = hours >= 12 ? 'PM' : 'AM';  
        
        hours = hours % 12;  
        
        hours = hours ? hours : 12;  
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        time.innerHTML =  
          hours + ':' + minutes + ':' + seconds +  ' ' + newformat;


}



