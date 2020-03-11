let d = new Date();
let day = d.getDay();
/*let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();*/
let days = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
let Edays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember']

let time = document.querySelector('#time');
let dayContainer = document.querySelector("#weekday");
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');
let repoContainer = document.querySelector("#repoLink");
let musicContainer = document.querySelector("#music");
let languageChanger = document.querySelector("#language");
let backgroundChanger = document.querySelector("#mode")

repoContainer.addEventListener("click", ()=>{
    window.location.href="https://github.com/raiks01/1-kodutoo";
});

upDateClock();
window.setInterval(upDateClock, 1000);
updateDate();

dayContainer.innerHTML = days[day];

function upDateClock() {
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
    dateContainer.innerHTML = date + '/' + month + '/' + year;
}

document.getElementById("switchLanguage").value="EST2ENG";
let elem = document.getElementById("switchLanguage");

function switchLanguage(){
    if(elem.value=="EST2ENG"){
        elem.value="ENG2EST";
        dayContainer.innerHTML = Edays[day];
    }else{
        elem.value="EST2ENG";
        dayContainer.innerHTML = days[day];
    }
}
languageChanger.addEventListener('click',switchLanguage);

document.getElementById("backgroundMode").value="Päeva mood";

function backgroundMode(){
    let back = document.getElementById("backgroundMode");
    if(back.value=="Päeva mood"){
        back.value="Õhtu mood";
        $('body').css('background', 'black');
    }else{
        back.value="Päeva mood";
        $('body').css('background', 'white');
    }
}
backgroundChanger.addEventListener('click',backgroundMode);

document.getElementById("audio1").value = "Muusika tööle";

function playTrack(){
    let audio = document.getElementById("sound");
    let mus = document.getElementById("audio1");
    if (audio.paused){
        if(elem.value=="EST2ENG"){
            mus.value = "Muusika kinni!";
        }else{
            mus.value="Music off!";
        }
        audio.play();
    }else{
        if(elem.value=="EST2ENG"){
            mus.value = "Muusika tööle!";
        }else{
            mus.value="Music on!";
        }
        audio.pause();
        audio.currentTime = 0;
    }
}
musicContainer.addEventListener('click', playTrack);