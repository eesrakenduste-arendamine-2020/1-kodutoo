function updateTime(){

    //Date year - month - day 
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDay();
    var daym = myDate.getDate();
    var dayarray = new Array ('Pühapäev', 'Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev');
    var montharray = new Array ('Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember');
    
    var myTime = new Date();
    var hour = myTime.getHours();
    var minute = myTime.getMinutes();
    var second = myTime.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);    
    
    
    var currentDate = '' + dayarray[day] + ' ' + daym + ' ' + montharray[month] + ' ' + year;
    var currentTime = setTimeout(updateTime, 500);  
    
    
    var myClock = document.getElementById('dateDisplay');
    var myWatch = document.getElementById('timeDisplay').innerHTML = hour + ':' + minute + ':' + second;
    
    
    myClock.innerHTML = currentDate;
    
    
    }
    function checkTime(i){
        if (i < 10) {i = "0" + i};
        return i;
    }
    