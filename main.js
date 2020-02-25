function startTime() {

    const selectSize = document.querySelector('.fontSize');
    selectSize.addEventListener('change', (event) => {
        var x = event.target.value;
        document.getElementById('time').style.fontSize = x;
        document.getElementById('date').style.fontSize = x;
        document.getElementById('weekday').style.fontSize = x;


    });
    const selectColor = document.querySelector('.fontColor');

    selectColor.addEventListener('change', (event) => {
        var x = event.target.value;
        document.getElementById('time').style.color = x;
        document.getElementById('date').style.color = x;
        document.getElementById('weekday').style.color = x;

    });

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var day = time.getDate();
    var weeknumber = time.getDay();
    var month = time.getMonth();
    var year = time.getFullYear();
    var weekArr = new Array(7);
    weekArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var weekday = weekArr[weeknumber];

    hours = checkTime(hours);
    seconds = checkTime(seconds);
    minutes = checkTime(minutes);
    month = checkTime(month);
    day = checkTime(day);
    var timeOnly =  hours + ':' + minutes + ':' + seconds;
    var dateOnly = day + ":" + month + ":" + year;
    document.getElementById('time').innerHTML = timeOnly;
    document.getElementById('date').innerHTML = dateOnly;
    document.getElementById('weekday').innerHTML = weekday;

    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  function hideDate(){
    var x = document.getElementById("date");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  function hideWeek(){
    var x = document.getElementById("weekday");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }
  var fullOn = 0;
  var elem = document.documentElement;
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    } fullOn = 1;
    document.getElementById("fullScreen").value = "Exit Full Screen";
}
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    } fullOn = 0;
    document.getElementById("fullScreen").value = "Full Screen";
  }

  function FullScreen(){
      if(fullOn === 0){
        openFullscreen()
      }else{
        closeFullscreen()
      }
  }
