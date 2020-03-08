let choice = true;
let choice2 = true;
clockFunction1(); /* must be there for the Web page to load right away*/
checkTime();
setInterval(clockFunction1, 1000);


/* clock function*/
function clockFunction1() {
    /* names */
    let weekDaysNames = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let yearNames = ['January', "February", 'march', 'April', 'may', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    /* verifies that the number is greater than zero
*  if the number is quieter, it will put a leading zero*/
    function checkNullDate(NUMBER) {
        if (NUMBER < 10) {
            return "0" + NUMBER
        } else {
            return NUMBER
        }
    }

    /* create a new date every time function is loaded*/
    let fullDate = new Date();
    /* and then the times and so on*/
    let second = fullDate.getSeconds();
    let minute = fullDate.getMinutes();
    let hour = fullDate.getHours();
    let day = fullDate.getDay();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();
    /* put them on the screen*/
    if (choice) {
        document.getElementById("time").innerText = "Hour: " + checkNullDate(hour) + " Minute: " + checkNullDate(minute) + " Second: " + checkNullDate(second);
    } else {
        document.getElementById("time").innerText = checkNullDate(hour) + ":" + checkNullDate(minute) + ":" + checkNullDate(second);
    }

    if (choice2) {
        document.getElementById("date").innerText = "Today is: " + weekDaysNames[day];
        document.getElementById("month").innerText = "Month: " + yearNames[month];
        document.getElementById("year").innerText = "Year: " + year;

    }


}

/* Changes background image by time*/
function checkTime() {
    let time = new Date().getHours();
    if (time >= 20) {
        document.body.style.backgroundImage = "url(Images/nightTime.jpg)";
        document.body.style.color = "whitesmoke";
    } else {
        document.body.style.backgroundImage = "url(Images/dayTime.jpg)";
        document.body.style.color = "rosybrown";
    }

}

function blackMode() {
    document.body.style.backgroundImage = "url(Images/nightTime.jpg)";
    document.body.style.color = "whitesmoke";
}

function whiteMode() {
    document.body.style.backgroundImage = "url(Images/dayTime.jpg)";
    document.body.style.color = "rosybrown";
}


function clockVersion(Version) {
    choice = Version;
    clockFunction1();
}
