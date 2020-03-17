// This is part of a homework in building front end applications
// Written by Marko Rillo, Tallinn University, student code:

// Start by checking if JS file was properly loaded
// console.log('Console js test - check if everything is ready');

// Define the arrays for month and day names
let listofMonths = ['January', 'February', 'March', 'April', 'May',
 'June', 'July', 'August', 'September', 'October', 'November', 
 'December'];
let listofDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday'];

// Define global variables for HTML Boxes - clock and timer
let dayBox = document.querySelector('#weekday');
let timeBox = document.querySelector('#time');
let dateBox = document.querySelector('#date');
let monthBox = document.querySelector('#month');
let yearBox = document.querySelector('#year');
let timerBox = document.querySelector('#mainbox');

// Define variables for HTML buttons
let colorButton = document.querySelector('#colorButton');
let fontButton = document.querySelector('#fontButton');
let resetTimerButton = document.querySelector('#resetTimerButton');
let playPauseToggleButton = document.querySelector('#playPauseToggleButton');

// Define the states and settings for the timer
let bwColorScheme = true;
let squareFontScheme = true;
let timerNotStartedYet = true;
let timerPaused = true;
let timerRefreshRateInMinute = 60;
let timerRemainingMinutes = 5;
let timerDuration = timerRefreshRateInMinute * timerRemainingMinutes;
let timer = null;

// Define clock ticking and updating year, month, day, date and time ...
function updateClock(){
    // Update the clock to the current time of the system
    let today = new Date();

    // Define the variables for clock
    let clockHour = today.getHours();
    let clockMinute = today.getMinutes();
    let clockSecond = today.getSeconds();
    let clockYear = today.getFullYear();
    let tempMonth = today.getMonth();
    let clockMonth = listofMonths[tempMonth];
    let tempDay = today.getDay();
    let clockDay = listofDays[tempDay];
    let clockDate = today.getDate();
   
    // Show seconds, minutes and hours in double digit strings ...
    if(clockSecond < 10){
        clockSecond = "0" + clockSecond;
    }
    if(clockMinute < 10){
        clockMinute = "0" + clockMinute;
    }
    if(clockHour < 10){
        clockHour = "0" + clockHour;
    }

    // Apply all the above to the time container boxes on the page ...
    time = clockHour + ':' + clockMinute + ':' + clockSecond; 
    yearBox.innerHTML = clockYear;
    monthBox.innerHTML = clockMonth;
    dayBox.innerHTML = clockDay;
    dateBox.innerHTML = clockDate;
    timeBox.innerHTML = time;
}


// Apply functions to buttons in the footer box
colorButton.addEventListener("click", toggleColor);
fontButton.addEventListener("click", toggleFont);
resetTimerButton.addEventListener("click", resetTimer);
playPauseToggleButton.addEventListener("click", pausePlay);

// Those are the functions to associate the activity for the different buttons
// First, for the color of the body and text
function changeBodyBg(bkColor, txtColor){
    document.body.style.background = bkColor;
    document.body.style.color = txtColor;
}

// Second, for the font
function changeBodyFont(txtFont){
    document.body.style.fontFamily = txtFont;
}

// Changing color scheme between B&W and Color
function toggleColor(){
    console.log('You clicked on Toggle Color');
    if (bwColorScheme == true) {
        changeBodyBg('darkslateblue', 'yellow');
        colorButton.innerHTML = "B&W";
        bwColorScheme = false;
    } else {
        changeBodyBg('black', 'lightgray');
        colorButton.innerHTML = "Color";
        bwColorScheme = true;
    }
}

// Changing font between square and round
function toggleFont(){
    console.log('You clicked on Toggle Font');
    if (squareFontScheme == true) {
        changeBodyFont("'Roboto', sans-serif");
        fontButton.innerHTML = "Square";
        squareFontScheme = false;
    } else {
        changeBodyFont("'Tomorrow', sans-serif");
        fontButton.innerHTML = "Round";
        squareFontScheme = true;
    }
}

// In case of "reset" button reload the screen and initialise the settings
function resetTimer(){
    location.reload();
    console.log('You pressed reset');
}

// Show timer in 00:00 format, hence the name: timerOooo :)
function timerOooo (timerRemainingTimeInSeconds) {
    timerMinutes = Math.floor(timerRemainingTimeInSeconds/60);
    timerSeconds = Math.floor(timerRemainingTimeInSeconds/1)%60;
    timerSeconds = (timerSeconds < 10 ? "0" : "")+timerSeconds;
    // console.log(timerMinutes + ":" + timerSeconds);
    return timerMinutes + ":" + timerSeconds;
}

function ticker() {
    if (timerDuration === 0) {
      clearInterval(timer);
      timer = null;
      playPauseToggleButton.innerText = "Play";
      return;
    }
    --timerDuration;
    timerBox.innerText = timerOooo(timerDuration);
}

// Changing the button between "pause" and "play"
function pausePlay() {
    if (timer === null) {
        // when there is no timer running that is when timer is paused
        console.log('Pressed play at:', timerDuration, 'sec');
        timer = setInterval(ticker, 1000);
        playPauseToggleButton.innerText = "Pause";
    } else {
        // when timer is there that is timer != null
        console.log('Pressed pause at:', timerDuration, 'sec');
        playPauseToggleButton.innerText = "Play";
        clearInterval(timer);
        timer = null;
    }
}
  
// This function starts the clock immediately upon opening the browser window
window.onload = function () {
    // Start the clock
    window.setInterval(updateClock, 1000);
    // Initialise he timer
    timerBox.innerText = timerOooo(timerDuration);
}
