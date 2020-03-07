let d = new Date();
let day = d.getDay();

let time = document.querySelector("#time");
let dayContainer = document.querySelector("#day");
let dateContainer = document.querySelector("#date");
let repoContainer = document.querySelector("#repo");
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let daysEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

repoContainer.addEventListener("click", ()=>{
    window.open("https://github.com/SandraMai/1-kodutoo");
});

dayContainer.innerHTML = days[day];
let dayCounter = 1;
dayContainer.addEventListener("click",()=>{
    if(dayCounter == 1){
        dayContainer.innerHTML = daysEng[day];
        dayCounter = 0;
    }else{
        dayContainer.innerHTML = days[day];
        dayCounter++;
    }
});

updateClock();
setInterval(updateClock, 1000);
updateDate();

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
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function updateDate(){
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if(date < 10){
        date = "0" + date;
    }
    if(month < 10){
        month = "0" + month;
    }
    dateContainer.innerHTML = date + "/" + month + "/" + year;
}

let openSidebar = document.querySelector("#button");
let closeSidebar = document.querySelector("#closeSb");

openSidebar.addEventListener("click", ()=>{
    document.getElementById("sidenav").style.width = "250px";
});

closeSidebar.addEventListener("click", ()=>{
    document.getElementById("sidenav").style.width = "0";
});

let bg1="url('pics/mountains.jpg')";
let bg2="url('pics/wood.jpg')";
let bg3="url('pics/woods.jpg')";
let container = document.querySelector("#container");

let counter = 1;
document.querySelector("#background").addEventListener("click", ()=>{
        if(counter == 1){
            container.style.backgroundImage = bg2;
            counter++;
        }else if(counter == 2){
            container.style.backgroundImage = bg3;
            counter = 0;
        }else{
            container.style.backgroundImage = bg1;
            counter++;
        }
});

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
    container.style.color = 'rgb('+r+','+g+','+b+')';
});




