//console.log('Fail õigesti ühendatud');
let d = new Date();
/*let score = 0;*/
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();


let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let yearContainer = document.querySelector('#year');
let DMYContainer = document.querySelector('#day', '#month', '#year');
let container = document.querySelector('#container');
/*let scoreContainer = document.querySelector('#score')*/
let days = ['PÜHAPÄEV', 'ESMASPÄEV', 'TEISIPÄEV', 'KOLMAPÄEV', 'NELJAPÄEV', 'REEDE', 'LAUPÄEV'];
let months = ['jaanuar', 'veebruar', 'märts'];



dayContainer.innerHTML = 'Täna on: '+days[day];
/*dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;*/
DMY.innerHTML = date + "/" + (month+1) + "/" + year;
updateClock();

/*scoreContainer.addEventListener('click', movePosition);*/
time.addEventListener('click', changeColor)
container.addEventListener('click', changeColor)
setInterval(updateClock, 1000);

function updateClock(){
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(seconds<10){
        seconds = "0" + seconds;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
    console.log(d);
}


//2 eraldi funktsiooni sest teistpidi ei tahtnud töötada
function changecolorBackground(id){
    document.body.style.background = document.getElementById(id).innerHTML;
    
}

function changecolorFont(id){
    document.body.style.color = document.getElementById(id).innerHTML;
    
}

/*monthContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    dateContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    yearContainer.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    time.style.backgroundColor = 'rgb('+ 255 +','+ 255 +',' + 255 + ')';
    DMYContainer.style.backgroundColor = 'rgb('+ 255 +','+ 255 +',' + 255 + ')';*/


/*function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

}*/
