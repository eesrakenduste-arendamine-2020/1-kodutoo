let d = new Date();
let day = d.getDay();

let time = document.querySelector("#time");
let dayContainer = document.querySelector("#day");
let dateContainer = document.querySelector("#date");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let 일 = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
let repoContainer=document.querySelector("#repoLink");
let musicContainer = document.querySelector("#music");
let calenderHider=document.querySelector("#edits");
let languageChanger=document.querySelector("#language");


repoContainer.addEventListener("click", ()=>{
    window.location.href="https://github.com/hp355837/1-kodutoo.git";
});

dayContainer.innerHTML = days[day];

updateClock();
setInterval(updateClock, 1000);
updateDate();
document.getElementById("melody1").value = "Turn on the beat";
document.getElementById("focusTime").value="Hide calendar";
document.getElementById("switchLanguage").value="ENG to KOR";
var calendar = "opened";

function updateClock(){
    
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
    dateContainer.innerHTML = date + "|" + month + "|" + year;
}

function playTrack() {
    var language =document.getElementById("switchLanguage");
    var audio = document.getElementById('sound');
    var elem = document.getElementById("melody1");
    if (audio.paused) {
        if(language.value=="ENG to KOR"){
            elem.value = "Turn off the beat";
        }else{
            elem.value="비트를 끄십시오";
        }
        audio.play();
        $('body').css('backgroundImage', 'url("doggo-space.gif")');
        $('#day').css('backgroundImage', 'url("space1.gif")').css('color','white');
        $('#time').css('backgroundImage', 'url("space2.gif")').css('color','red');
        $('#date').css('backgroundImage', 'url("space3.gif")').css('color','white');
    }else{
        if(language.value=="ENG to KOR"){
            elem.value = "Turn on the beat";
        }else{
            elem.value="비트를 켜십시오";
        }
        audio.pause();
        audio.currentTime = 0;
        $('body').css('backgroundImage', '');
        $('#day').css('backgroundImage', '').css('color','black');
        $('#time').css('backgroundImage', '').css('color','black');
        $('#date').css('backgroundImage', '').css('color','black');
    }
}

function hideCalender(){
    var language = document.getElementById("switchLanguage");
    var element = document.getElementById("focusTime");
    if(calendar=="opened"){
        if(language.value=="ENG to KOR"){
            element.value="Show calendar";
        }else{
            element.value="캘린더 표시";
        }

        $('#day').css('display', 'none');
        $('#date').css('display', 'none');
        $('#time').css('font-size','150%');
        calendar="closed";
    }
}
function closedCalender(){
    var language = document.getElementById("switchLanguage");
    var element = document.getElementById("focusTime");
    if(calendar=="closed"){
        if(language.value=="ENG to KOR"){
            element.value="Hide calendar";
        }else{
            element.value="캘린더 숨기기";
        }

        $('#day').css('display', 'unset');
        $('#date').css('display', 'unset');
        $('#time').css('font-size','100%');
        calendar="opened";
    }
}

function switchLanguage(){
    var audio = document.getElementById('sound');
    var elem1 = document.getElementById("melody1");
    var elem2 = document.getElementById("focusTime");
    var elem3 =document.getElementById("switchLanguage");
    if(elem3.value=="ENG to KOR"){

            if(audio.paused){
                elem1.value="비트를 켜십시오";
            }else{
                elem1.value="비트를 끄십시오";
            }
            if(calendar=="opened"){
                elem2.value="캘린더 숨기기";
            }else{
                elem2.value="캘린더 표시";
            }
        elem3.value="KOR to ENG";
        dayContainer.innerHTML = 일[day];
    }else{
        if(audio.paused){
            elem1.value="Turn on the beat";
        }else{
            elem1.value="Turn off the beat";
        }
        if(calendar=="opened"){
            elem2.value="Hide calendar";
        }else{
            elem2.value="Show calendar";
        }
        elem3.value="ENG to KOR";
        dayContainer.innerHTML = days[day];
    }
}
languageChanger.addEventListener('click',switchLanguage);
musicContainer.addEventListener('click',playTrack);
calenderHider.addEventListener('click',()=>{
    if(calendar=="opened"){
        hideCalender();
    }else{
        closedCalender();
    }
});







