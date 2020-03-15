let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();


//let scoreContainer = document.querySelector('#score');
let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
updateClock();

window.setInterval(updateClock, 1000);

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

dateContainer.addEventListener('mouseover', changePosition);

function changePosition(){
    let alignPosition = ['flex-end', 'center', 'flex-start'];
    //score++;
    //scoreContainer.innerHTML = score;

    yearContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.order = Math.round(Math.random()*25);
    dayContainer.style.order = Math.round(Math.random()*25);
    time.style.order = Math.round(Math.random()*25);
    monthContainer.style.order = Math.round(Math.random()*25);
    scoreContainer.style.order = Math.round(Math.random()*25);
    dateContainer.style.alignSelf = alignPosition[Math.floor(Math.random()*3)];


}

function fontColor(){
   var y = document.getElementById("time");
   if(y.style.color == "black"){
    y.style.color = "white";
   }else{
       y.style.color = "black";

   }
}

function otherColor(){
    var y = document.getElementById("besidesTime");
    if(y.style.color == "black"){
     y.style.color = "white";
    }else{
        y.style.color = "black";
 
    }
 }

function hideBesidesTime() {
    var x = document.getElementById("besidesTime");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


window.addEventListener("keypress", fontSize);
    function fontSize(){
       if(time.style.fontSize == "120px") {
        time.style.fontSize = "325px";
      }else{
           time.style.fontSize = "120px";


       }

    } 

 



