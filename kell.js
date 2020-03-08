function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
 }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function showDate(){
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "PÜHAPÄEV";
    weekday[1] = "ESMASPÄEV";
    weekday[2] = "TEISIPÄEV";
    weekday[3] = "KOLMAPÄEV";
    weekday[4] = "NELJAPÄEV";
    weekday[5] = "REEDE";
    weekday[6] = "LAUPÄEV";
    

    var weekday = weekday[date.getDay()];
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if(day < 10){
        day= "0" + day;}
    if(month < 10){
        month= "0" + month;}
        

    var dateTime = weekday + " " + day + ":" + month + ":" + year;
    
    document.getElementById("date").innerHTML = dateTime;
}

function timeFunction(){
    var t = new Date().getHours();
    if ( 6 < t < 11) {
        document.body.style.backgroundOrigin="URL('sunrise3.jpg')";
    } if ( 11 < t < 18){
        document.body.style.backgroundImage= "URL('day1.jpg')";
    } else if ( 18 < 20) {
        document.body.style.backgroundImage= "URL('sunset3.jpg')";
    } else {
        document.body.style.backgroundImage= "URL('night1.jpg')";
    }
}

function asio(){
    location.replace("https://www.tlu.ee/asio/kalenterit2/index.php?kt=lk&yks=&cluokka=IFIFB&av=190902190908190903&guest=intranet%2Ftu&lang=est&jagu=4");
}

function facebook(){
    location.replace("https://www.facebook.com");
}

function gmail(){
    location.replace("https://www.gmail.com");
}

function drive(){
    location.replace("https://www.drive.com");
}

function ois(){
    location.replace("https://ois2.tlu.ee/tluois/uus_ois2.tud_leht");
}

document.getElementById("needIT").addEventListener("click", function() {
    alert("KUIDAS SA JULGED!");
  });


startTime();
showDate();
timeFunction();

