let d = new Date();
let year = d.getFullYear();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
let month = d.getMonth() ;
let day = d.getDay();
let date = d.getDate();

let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let tate = document.querySelector("#tate");

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]


time.innerHTML = hours + ":" + minutes + ":" + seconds;
tate.innerHTML = date + ":" + month + ":" + year;
dayContainer.innerHTML = days[day];
window.setInterval(uptateClock, 1000);
uptateClock();
window.setInterval(uptatedate, 1000);
uptatedate();

function uptateClock(){
    let d = new Date();
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
function uptatedate(){
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
    if(year < 10){
        year = "0" + year;
    }
    tate.innerHTML = date + ":" + month + ":" + year;
}

var button = document.querySelector("button");

button.addEventListener("click",function(){
	document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = "blue";});
    
    document.getElementById("myBtn").addEventListener("click", displayDate);

    function displayDate() {
      document.getElementById("demo").innerHTML = Date();
    }