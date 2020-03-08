let d = new Date();

let year = d.getFullYear();
let month = d.getMonth();
let weekday = d.getDay();
let date = d.getDate();

let days = ['Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäeva'];
let months = ['Jaanuar','Veebruar','Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];

let weekdayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let yearContainer = document.querySelector('#year');
let monthContainer = document.querySelector('#month');
let dateContainer = document.querySelector('#date');

weekdayContainer.innerHTML = days[weekday];

yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;

updateClock();
window.setInterval(updateClock, 500);

function updateClock() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    time.innerHTML = hours + " : " + minutes + " : " + seconds;
}

// Funktsiooni sisu on osaliselt kopeeritud netist.
// Nupu vajutamisel asendatakse lehe tausta sisestatud url-l oleva pildiga. Juhul, kui url jäetud tühjaks,
// siis vajutamisel taust ei muutu.

function changebackground(){
    var url =  document.getElementById('bgchanger').value;
    if(url != ""){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
        localStorage.setItem('back',url);
        let boxes = document.getElementsByClassName('box');
        for (let i = 0; i < boxes.length; i++) {
            document.getElementsByClassName('box')[i].style.backgroundImage = "url('" + url + "')";
        }

    } else {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url(" + forest.jpg + ")";
    }
  }

  //Fonti muutmise funktsioon 

  function changefontcolor(){
    var fontcolor = document.getElementById('fontcolor').value;
    document.getElementsByTagName('body')[0].style.color = fontcolor;
    document.getElementById('buttonDiv').style.color = fontcolor;
    document.getElementById('fontColorDiv').style.color = fontcolor;
    document.getElementById('bgColorDiv').style.color = fontcolor;
    document.getElementById('bgchanger').style.border = "1px solid " + fontcolor;
    document.getElementById('personal') .style.color = fontcolor;   

    var buttonClassArray = document.getElementsByClassName('button');
    for (i = 0; i < buttonClassArray.length; i++) {
        buttonClassArray[i].style.color = fontcolor;
        buttonClassArray[i].style.border = "2px solid " + fontcolor;
    }
    
  }

  // Funktsioon muudab containeri laps-div'de tausta värvi, lisaks 
  // konverteerib hex värvi koodi rga'ks.

function changebgcolor(){
    var r,g,b;
    var bgcolor = document.getElementById('bgcolor').value;
    var children = document.getElementsByClassName('child');
    r=bgcolor.slice(1,3);
    g=bgcolor.slice(3,5);
    b=bgcolor.slice(5);
    rgbString ="rgba(" + parseInt(r,16) + "," + parseInt(g,16) + ","+ parseInt(b,16) + ", 0.137 )";

    for (let index = 0; index < children.length; index++) {
        children[index].style.background = rgbString;  
    }    
}

// Glitch effect
// Loon body sisse uued div'id klassi nimega box

let backGround = document.getElementsByTagName('body')[0];
for( let i = 0; i < 20; i++ ){
    let glitchBox = document.createElement('div');
    glitchBox.className = 'box';
    backGround.appendChild(glitchBox);
}

function glitchEffect(){        
    let glitch = document.getElementsByClassName('box');
    for (let i = 0; i < glitch.length; i++) {

        // kui suurel alal efekt toimub, hetkel 100% x 100%
        glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
        glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';

        // Individuaalse divi suurus
        glitch[i].style.width = Math.floor(Math.random()*250) + 'px';
        glitch[i].style.height = Math.floor(Math.random()*250) + 'px';

        // Divi sees pildi positsiioni randomizer
        glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) + 'px';
    }
}
//setInterval(glitchEffect,200)

// Efekt toimub githubi logole hiire paigutamisel
// efekt lõppeb kui kursos logolt eemaldub ning kustutab tekitatud divid

var logo = document.getElementById("github-logo");
let boxes = document.getElementsByClassName('box');

logo.addEventListener('mouseover', function(){
    setInterval(glitchEffect,200)
    for( let i = 0; i < 20; i++ ){
        let glitchBox = document.createElement('div');
        glitchBox.className = 'box';
        backGround.appendChild(glitchBox);
    }    
});

logo.addEventListener('mouseout', function(){
    for(var i = boxes.length - 1; 0 <= i; i--){
        if(boxes[i] && boxes[i].parentElement){
            boxes[i].parentElement.removeChild(boxes[i]);}        
    }
});