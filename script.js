let color = document.getElementById('CColor')

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    let color = '#' + h + m + s;
    
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
    document.getElementById("CColor").textContent = color;
    document.body.style.background = color;
    
    setTimeout(showTime, 1000);
} 

function showDate(){
    let date = new Date();
    let m = date.getMonth() + 1
    let d = date.getDate()
    let y = date.getFullYear()

    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;

    let calendar = d + "." + m + "." + y;
   
    document.getElementById("MyCalendar").innerText = calendar;
    document.getElementById("MyCalendar").textContent = calendar;
}

showTime();
showDate();
