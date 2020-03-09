let d = new Date();

let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

let dayContainer = document.querySelector("#weekday");
let time = document.querySelector("#time");
let yearContainer = document.querySelector("#year");
let monthContainer = document.querySelector("#month");
let dateContainer = document.querySelector("#date");
let days = [
	"Pühapäev",
	"Esmaspäev",
	"Teisipäev",
	"Kolmapäev",
	"Neljapäev",
	"Reede",
	"Laupäev"
];
let months = [
	"Jaanuar",
	"Veebruar",
	"Märts",
	"Aprill",
	"Mai",
	"Juuni",
	"Juuli",
	"August",
	"September",
	"Oktoober",
	"November",
	"Detsember"
];

yearContainer.innerHTML = year;
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + " " + months[month];
updateClock();

window.setInterval(updateClock, 1000);

function updateClock() {
	d = new Date();
	let seconds = d.getSeconds();
	let minutes = d.getMinutes();
	let hours = d.getHours();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById("english").addEventListener("click", english);
function english() {
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	dateContainer.innerHTML = date + " " + months[month];

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	dayContainer.innerHTML = days[day];
}

var git = document.querySelector("#git");
document.addEventListener(
	"click",
	function(event) {
		if (event.target.matches(".show")) {
			git.removeAttribute("hidden");
		}
		if (event.target.matches(".hide")) {
			git.setAttribute("hidden", "true");
		}
	},
	false
);
console.log(year, seconds);
