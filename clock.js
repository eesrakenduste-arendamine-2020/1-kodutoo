// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);
    
    

    // console.log("t66tab");

};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var date = currentDate.getDate();
    var year = currentDate.getFullYear();
	
    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + '<br><hr><font size="3"> ' + addZeroBefore(date) + '.' + (myMonths(month))
	+ '<br> ' + (myDays(day) + '<br>' + year +  '</font>');

	
    return dateString;
};

function myDays(day){
    if(day==0){day="Pühapäev";}
	if(day==1){day="Esmaspäev";}
	if(day==2){day="Teisipäev";}
	if(day==3){day="Kolmapäev";}
	if(day==4){day="Neljapäev";}
	if(day==5){day="Reede";}
	if(day==6){day="Laupäev";}
    return day;
}function myMonths(month){
    if(month==0){month="jaanuar";}
    if(month==1){month="veebruar";}
    if(month==2){month="marts";}
    if(month==3){month="aprill";}
    if(month==4){month="mai";}
    if(month==5){month="juuni";}
    if(month==6){month="juuli";}
    if(month==7){month="august";}
    if(month==8){month="september";}
    if(month==9){month="oktoober";}
    if(month==10){month="november";}
    if(month==11){month="detsember";}
    return month;
}

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }
    
    return dateNumber;
}



function colorFireBrick() {
    document.getElementById('clock').style.color = 'FireBrick';
};
function colorDarkSlateGray() {
    document.getElementById('clock').style.color = 'DarkSlateGray';
};
function colorGoldenRod() {
    document.getElementById('clock').style.color = 'GoldenRod';
};
function colorMidnightBlue() {
    document.getElementById('clock').style.color = 'MidnightBlue';
};
function colorNavajoWhite() {
    document.getElementById('clock').style.color = 'NavajoWhite';
};
function colorBlack() {
    document.getElementById('clock').style.color = 'Black';
};



function fontDefault() {
    document.getElementById("clock").style.fontSize = "2000%";
};

function fontAldrich() {
    document.getElementById("clock").style.fontFamily = "Aldrich, cursive";
};
function fontArbutus() {
    document.getElementById("clock").style.fontFamily = "Arbutus, sans-serif";
};
function fontImpact() {
    document.getElementById("clock").style.fontFamily = "Impact, sans-serif";
};
function fontTahoma() {
    document.getElementById("clock").style.fontFamily = "Tahoma, sans-serif";
};
function fontVerdana() {
    document.getElementById("clock").style.fontFamily = "Verdana, sans-serif";
};
function fontOldenburg(){ 
    document.getElementById("clock").style.fontFamily = "Oldenburg, monospace";
};



function rectangleRed() {
    document.getElementById('clock').style.backgroundColor = 'Maroon';

};
function rectangleBlue() {
    document.getElementById('clock').style.backgroundColor = 'MidnightBlue';

};
function rectangleGreen() {
    document.getElementById('clock').style.backgroundColor = 'DarkSeaGreen';

};
function rectangleBeige() {
    document.getElementById('clock').style.backgroundColor = 'Beige';

};
function rectangleBrown() {
    document.getElementById('clock').style.backgroundColor = 'BurlyWood';

};
function rectangleWhite() {
    document.getElementById('clock').style.backgroundColor = 'White';

};

