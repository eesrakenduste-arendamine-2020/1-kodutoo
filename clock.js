let d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

if(date<10){
    date = "0"+date;
}

let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];

dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + "." + months[month] + "." + year;


updateClock();

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

}


document.getElementById('bigger').addEventListener('click', function(){
    txt = document.getElementById('container');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 10) + 'px';
});
document.getElementById('smaller').addEventListener('click', function(){
    txt = document.getElementById('container');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize -10) + 'px';

});


document.getElementById('backgroundColor').addEventListener('change', function(){
    document.body.style.backgroundColor = this.value;
});
document.getElementById('textColor').addEventListener('change', function(){
    document.body.style.color = this.value;
});

