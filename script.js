// Lihtne viis vormistada kellaeg meile sobivasse formaati: 00:00:00
const timeFormatter = new Intl.DateTimeFormat("et", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

const dateFormatter = new Intl.DateTimeFormat("et", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const dateFormatterRu = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

let tabTitleTimer;
let russianTimer;
let estonianTimer;

const bg = document.getElementById("bg")

bg.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.style.backgroundImage = "url(mount.jpg)";
  } else {
    document.body.style.backgroundImage = "unset";
  }
});

const tabTitle = document.getElementById("tabTitle");

tabTitle.addEventListener("change", (event) => {
  if (event.target.checked) {
    tabTitleTimer = setInterval(timeTitle, 1000);
  } else {
    clearInterval(tabTitleTimer);
    document.title = "Kell";
  }
});

function timeTitle() {
  const date = Date.now();
  const formattedTime = timeFormatter.format(date);
  document.title = formattedTime;
}

const russian = document.getElementById("russian");

russian.addEventListener("change", (event) => {
  if (event.target.checked) {
    clearInterval(estonianTimer);
    date("ru")
    russianTimer = setInterval(() => date("ru"), 1000);
  } else {
    clearInterval(russianTimer);
    date("ee")
    estonianTimer = setInterval(() => date("ee"), 1000);
  }
});

const colorChanger = document.getElementById("colorChanger");

colorChanger.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.addEventListener("mousemove", setHueByMouse);
  } else {
    document.removeEventListener("mousemove", setHueByMouse);
  }
});

function setHueByMouse(event) {
  
  const x = event.screenX - screen.width * 0.5;
  const y = event.screenY - screen.height * 0.5;

  const angle = Math.abs(Math.atan(y / x));

  document.body.style.webkitFilter = `hue-rotate(${angle}rad)`
}

function time() {

  const formattedTime = timeFormatter.format(Date.now());

  let count = 1;
  for (const char of formattedTime) {

    const canvas = document.getElementById(`${count}`);
    count += 1;

    // Kasutame ühte SVG faili, kus on kõik numbrid ja koolon olemas SVG fragmentidena
    canvas.style.mask = `url(combined.svg#${char}) 50% 50% no-repeat`;
    canvas.style.webkitMask = `url(combined.svg#${char}) 50% 50% no-repeat`;
  }
}

function date(lang) {
  const dateElement = document.getElementById("date");
  const date = Date.now();

  // Mugavalt vormistab kuupäeva
  if (lang === "ee") {
    const formattedDate = dateFormatter.format(date);
    dateElement.innerHTML = "Täna on " + formattedDate;
  } else if (lang === "ru") {
    const formattedDate = dateFormatterRu.format(date);
    dateElement.innerHTML = "Сегодня " + formattedDate;
  }
}

// See jookseb async esimesel jooksutamisel
// kuid ma ei ole kindel kas setInterval on async
setTimeout(() => {
  time();
  setInterval(time, 50);
  estonianTimer = setInterval(() => date("ee"), 1000);
});