
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year= d.getFullYear();
let date = d.getDate();




let dayContainer = document.querySelector("#weekday");
let timeContainer = document.querySelector("#time");
let monthContainer = document.querySelector("#month");
let yearContainer = document.querySelector("#year");
let dateContainer = document.querySelector("#date");
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev",]
let months = ["Jaanuar", "Veebruar", "Märts"]

dayContainer.innerHTML = days[day];
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;
dateContainer.innerHTML = date;
upDateClock();


window.setInterval(upDateClock, 1000);

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
    time.innerHTML = hours + ":" + minutes + ":" + seconds;

    
}

dateContainer.addEventListener("mouseover", changePosition);

function changePosition(){
    let alignPosition = ['flex-end', 'center', 'flex-start'];
    

    yearContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.order = Math.round(Math.random()*25);
    dayContainer.style.order = Math.round(Math.random()*25);
    monthContainer.style.order = Math.round(Math.random()*25);
    timeContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.alignself = alignPosition[Math.ceil(Math.random()*3)];
}

function timeColor(){
    var color = document.getElementById("time");
    if(color.style.color == "yellow"){
     color.style.color = "white";
    }else{
        color.style.color = "yellow";
 
    }
 }

 window.addEventListener("keypress", clockSize);
function clockSize(){ 
    if (time.style.fontSize == "120px") { 
        time.style.fontSize = "325px";
    } else { 
        time.style.fontSize = "120px"; 
    }
}
