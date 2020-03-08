let now = new Date();
let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let yearContainer = document.querySelector('#year');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];


let time = document.querySelector('#time');
let r;
let g;
let b
let grad1 = 'aquamarine';
let grad2 = 'blue';
let grad3 = 'violet';


function changeColor1(val){
    grad1 = document.getElementById("grad1").value;
}
function changeColor2(val){
    grad2 = document.getElementById("grad2").value;
}
function changeColor3(val){
    grad3 = document.getElementById("grad3").value;
}


let ctx = kell.getContext("2d");
let radius = kell.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
  draw(ctx, radius);

}


updateClock();
setInterval(updateClock, 1000);

function updateClock(){
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month];
    yearContainer.innerHTML = year;
    now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    time.innerHTML = hours + ':' + minutes + ":" + seconds;
}

function draw(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
  
    grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, grad1);
    grad.addColorStop(0.5, grad2);
    grad.addColorStop(1, grad3);
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    ctx.strokeStyle = 'aqua';
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.7, radius*0.07);
    
    ctx.strokeStyle = 'red';
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.85, radius*0.02);
}
  
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


let counter = 1;
document.getElementById("button").addEventListener("click", function(){
    if(counter == 1){
        document.getElementById("kell").style.display="none";
        document.getElementById("time").style.display="block";
        counter = 2;
        document.getElementById("grad1").style.display="none";
        document.getElementById("grad2").style.display="none";
        document.getElementById("grad3").style.display="none";
        document.getElementById("grad01").style.display="none";
        document.getElementById("grad02").style.display="none";
        document.getElementById("grad03").style.display="none";

    } else{
        document.getElementById("time").style.display="none";
        document.getElementById("kell").style.display="block";
        counter = 1;
        document.getElementById("grad1").style.display="block";
        document.getElementById("grad2").style.display="block";
        document.getElementById("grad3").style.display="block";
        document.getElementById("grad01").style.display="block";
        document.getElementById("grad02").style.display="block";
        document.getElementById("grad03").style.display="block";
    }
  });


function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}

dateContainer.addEventListener('click', movePosition);
const postions = ['flex-start', 'flex-end', 'center']


function movePosition(){
    time.style.order = Math.round(Math.random()*4);
    dayContainer.style.order = Math.round(Math.random()*4);
    dateContainer.style.order = Math.round(Math.random()*4);
    yearContainer.style.order = Math.round(Math.random()*4);
}

dayContainer.addEventListener('mouseover', changeBgColor);
function changeBgColor(){
    generateColor()
    time.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    dayContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    dateContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    yearContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}

yearContainer.addEventListener('mouseover', changeColor);
function changeColor(){
    generateColor()
    time.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    dayContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    dateContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor()
    yearContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
}

document.getElementById("inglise").addEventListener("click", function(){
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById("grad01").innerHTML = "color1";
    document.getElementById("grad02").innerHTML = "color2";
    document.getElementById("grad03").innerHTML = "color3";
    document.getElementById("button").innerHTML = "swap";
});

document.getElementById("eesti").addEventListener("click", function(){
    days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
    months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];
    document.getElementById("grad01").innerHTML = "värv1";
    document.getElementById("grad02").innerHTML = "värv2";
    document.getElementById("grad03").innerHTML = "värv3";
    document.getElementById("button").innerHTML = "vaheta";
});