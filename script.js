window.onload = function(){
    showTime();
    showDate();
    progressBarMovement();
}

function showTime(){

    var updateTime = setInterval(showTime, 1000);
    var time = new Date();

    var hours = time.getHours();
        if(hours < 10){hours = "0" + hours;}

    var minutes = time.getMinutes();
        if(minutes < 10){minutes = "0" + minutes;}

    var seconds = time.getSeconds();
        if(seconds < 10){seconds = "0" + seconds;}

    HMS = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timeContainer").innerHTML = HMS;

}

function showDate(){

    var date = new Date();

    let days = ["Monday","Tuesday","Wednesday","Thursday",
                "Fryday","Saturday","Sunday"];
    let months = ["January","February","March","April","May","June","July",
                  "August","September","Oktober","November","december"];

    var weekDay = days[date.getDay()-1]; 
    var month = months[date.getMonth()];
    var monthDay = date.getDate();
    var year = date.getFullYear();

    DMY = weekDay + ", " + month + " " + monthDay + ", " + year;
    document.getElementById("dateContainer").innerHTML = DMY;

}


function progressBarMovement(){

    var updateProgress = setInterval(progressBarMovement, 1000);
    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hourWitdh = (4.17 * hours) + "%";
    minuteWitdh = (1.7 * minutes) + "%";
    secondWitdh = (1.7 * seconds) + "%";

    document.getElementById("hourProgressBar").style.width = hourWitdh;
    document.getElementById("minuteProgressBar").style.width = minuteWitdh;
    document.getElementById("secondProgressBar").style.width = secondWitdh;

}
