let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let changeLangButton;

let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let monthContainer = document.querySelector("#month");
let yearContainer = document.querySelector("#year");
let dateConatiner = document.querySelector("#date");

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Januaty', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let paevad = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let kuud = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];

dayContainer.innerHTML = days[day];
yearContainer.innerHTML = year;
if(date==1){
    dateConatiner.innerHTML = date + 'st of ' + months[month];
} else if(date==2){
    dateConatiner.innerHTML = date + 'nd of ' + months[month];
} else if(date==3){
    dateConatiner.innerHTML = date + 'rd of ' + months[month];
} else{
    dateConatiner.innerHTML = date + 'th of ' + months[month];
}
window.setInterval(updateClock, 1000);

function updateClock(){
    d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if(hours<10){
        hours = '0'+hours;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }
    if(seconds<10){
        seconds = '0'+seconds;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
}

button = document.querySelector("#changeThemeButton");
button.addEventListener('click', changeTheme);

var index = 0;
function changeTheme(){
    var bgColorList = ["#202020", "#20b2aa"];
    var textColorList = ["#A0A0A0", "#000000"];
    document.body.style.backgroundColor = bgColorList[index];
    document.body.style.color = textColorList[index];
    index++;
    if (index === bgColorList.length) index=0
}

function timedTheme(){
    var hours = d.getHours();
    if(hours > 19 || hours < 6){
        document.body.style.backgroundColor = bgColorList[0];
        document.body.style.color = textColorList[0];
    } else {
        document.body.style.backgroundColor = bgColorList[1];
        document.body.style.color = textColorList[1];
    }
}


/*function buttonClick(){
    estChangeLangButton = document.querySelector("#estChangeLang");
    estChangeLangButton.addEventListener('click', estChangeLang);

    engChangeLang = document.querySelector("#engChangeLang");
    engChangeLang.addEventListener('click', engChangeLang);
}

function estChangeLang(){
    dayContainer.innerHTML = paevad[day];
    dateConatiner.innerHTML = date + '. ' + kuud[month];
}

function engChangeLang(){
    dayContainer.innerHTML = days[day];
    dateConatiner.innerHTML = date + '. ' + months[month];
}*/