
function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let years = document.getElementById('years');
    let months = document.getElementById('months');

    let days = document.getElementById('days');
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;


    let day = new Date().getDate();
    hours.innerHTML = checkTime(hour);
    minutes.innerHTML = checkTime(minute);
    seconds.innerHTML = checkTime(second);
    months.innerHTML = checkTime(month);
    years.innerHTML = year;
    days.innerHTML = checkTime(day);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
let interval = setInterval(clock, 1000);


let color = ["#222f3e",  "#f368e0", "lightblue"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
});

document.querySelector("h2").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("h2").style.background = color[i]
});

document.getElementById("h3").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.getElementById("h3").style.background = color[i]
});
document.getElementById("hour").addEventListener("mouseover",function () {
    i = i < color.length ? ++i : 0;
    document.getElementById("hour").style.background = color[i]
});






