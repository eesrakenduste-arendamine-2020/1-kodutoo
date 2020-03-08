let d = new Date();
let day = d.getDay();

let container = document.querySelector('#container');
let time = document.querySelector('#time');
let dayDiv = document.querySelector('#day');
let dateDiv = document.querySelector('#date');
let repo = document.querySelector('#repo');
let bg = document.querySelector('#background');

repo.addEventListener('click', ()=>{window.location.href="https://github.com/klauskruus/1-kodutoo";});

let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
dayDiv.innerHTML = days[day];

updateClock();
setInterval(updateClock, 1000);
Datediv();

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


let r;
let g;
let b;

function changeColor(){
    r = Math.floor(Math.random() * 255) + 80;
    g = Math.floor(Math.random() * 255) + 80;
    b = Math.floor(Math.random() * 255) + 80;
}

document.querySelector("#color").addEventListener("click", ()=>{
    changeColor();
    container.style.color = 'rgb('+ r +','+ g +','+ b +')';
});

bg.addEventListener('click', switchBackground);

let pic1 = "url('image.jpg')"; //0
let pic2 = "url('image2.jpg')"; //1
let pic3 = "url('image3.jpg')"; //2

//container.style.backgroundImage = "url('pilt1.jpg')";
let n = 1;
function switchBackground(){
    if(n == 1){
        container.style.backgroundImage = "url('image2.jpg')";
        n++;
    } else if(n == 2){
        container.style.backgroundImage = "url('image3.jpg')";
        n = 3;
    } else {
        container.style.backgroundImage = "url('image.jpg')";
        n = 1;

    }
} 