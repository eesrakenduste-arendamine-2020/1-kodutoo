let d = new Date();
let day = d.getDay();

let time = document.querySelector('#time');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let languageContainer = document.querySelector('#language');
let calendarContainer = document.querySelector('#calendar');
let musicContainer = document.querySelector('#music');
let repository = document.querySelector('#repository');

dayContainer.innerHTML = days[day];

updateClock();
setInterval(updateClock, 1000);
updateDate();

languageContainer.addEventListener('click', changeLanguage);
calendarContainer.addEventListener('click', showCalendar);
musicContainer.addEventListener('click', playMusic);
repository.addEventListener("click", ()=>{
    window.location.href="https://github.com/tmiilits/1-kodutoo";
});

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

    time.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function updateDate(){
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();

    if(date < 10){
        date = "0" + date;
    }
    if(month < 10){
        month = "0" + month;
    }

    dateContainer.innerHTML = date + '/' + month + '/' + year;
}

function changeLanguage(){
    var language = document.getElementById('changeLanguage');
    var calendar = document.getElementById('showCalendar');
    var music = document.getElementById('playMusic');
    if (language.value == "English -> Estonian"){
        language.value = "Eesti keel -> Inglise keel";
        calendar.value = "Sulge kuupäev";
        music.value = "DJ keeruta plaati";
    }else {
        language.value = "English -> Estonian";
        calendar.value = "Close date";
        music.value = "Music on";
    }
}

function showCalendar(){
    var language = document.getElementById('changeLanguage');
    var calendar = document.getElementById('showCalendar');
    if (calendar.value == "Close date" || calendar.value == "Sulge kuupäev"){
        if (language.value == "English -> Estonian"){
            calendar.value = "Show date";
        } else {
            calendar.value = "Näita kuupäeva";
        }
        $('#day').css('display', 'none');
        $('#date').css('display', 'none');
        $('#time').css('font-size','150%');
    } else {
        if(language.value == "English -> Estonian"){
            calendar.value = "Close date";
        } else {
            calendar.value = "Sulge kuupäev";
        }
        $('#day').css('display', 'unset');
        $('#date').css('display', 'unset');
        $('#time').css('font-size','100%');
    }
}



function playMusic(){
    var language = document.getElementById('changeLanguage');
    var audio = document.getElementById('sound');
    var music = document.getElementById('playMusic');

    if (audio.paused) {
        if(language.value == "English -> Estonian"){
            music.value = "Music off";
        }else{
            music.value = "Aitab sellest loost";
        }
        audio.play();
        $('body').css('backgroundImage', 'url("party.gif")');
        $('#name').css('background', 'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3');
        $('#time').css('background', 'url("party2.gif")').css('color', 'white');
        $('#date').css('background', 'url("party2.gif")').css('color', 'white');
        $('#day').css('background', 'url("party2.gif")').css('color', 'white');
    }else{
        if(language.value == "English -> Estonian"){
            music.value = "Music on";
        }else{
            music.value = "DJ keeruta plaati";
        }
        audio.pause();
        $('body').css('backgroundImage', '');
        $('#name').css('background', '');
        $('#time').css('background', '').css('color', 'black');
        $('#date').css('background', '').css('color', 'black');
        $('#day').css('background', '').css('color', 'black');
    }
}


