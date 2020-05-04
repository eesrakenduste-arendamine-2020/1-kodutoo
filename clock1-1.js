/*jshint esversion: 6 */
let date;
let hours;
let minutes;
let seconds;
let monthDay;
let weekDays;

window.onload = function(){
  init();

  document.querySelector('body').style.backgroundColor = "white";
  document.querySelector('body').style.backgroundImage = 'url("pictures/DSC_0005.jpg")';
  document.querySelector('.container').style.fontSize = 80 + "px";
  document.querySelector('.container').style.fontFamily = "Consolas";
  document.querySelector('.container').style.color = "black";


  window.setInterval(function(){init();},1000);
};

function init(){
  date = new Date();

  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  weekDays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
  months = ["Jaanuar", "Veebruar", "Märts", "Aprill", ",Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

  weekday = date.getDay();
  monthDay = date.getDate();

  if (monthDay < 10){
    monthDay = "0" + monthDay;
  }

  month = date.getMonth();
  year = date.getFullYear();

  document.querySelector('#hours').innerHTML = hours + ":";
  document.querySelector('#minutes').innerHTML = minutes + ":";
  document.querySelector('#seconds').innerHTML = seconds;
  document.querySelector('#day').innerHTML = weekDays[weekday];
  document.querySelector('#date').innerHTML = monthDay + ". " + months[month] + " " + year;

}

function changeSize(clicked, shift){

let oldStyle = parseInt(document.querySelector('.container').style.fontSize);
if (10 <= oldStyle && oldStyle < 100){
  oldStyle = oldStyle + shift;
  console.log('Jõudsin if-i sisse.');
  console.log(oldStyle);

  document.querySelector('.container').style.fontSize = oldStyle.toString() + "px";
}else{
  document.querySelector('.container').style.fontSize = 10 + "px";
  console.log('Jõudsin else-i sisse.');
}

}

function changeFont(){
let fonts = ["Arial", "Consolas", "Oswald", "Tahoma", "Impact", "Arvo", "Webdings", "Symbol", "Digital"];
let font = document.querySelector('.container').style.fontFamily;

for (let i = 0; i < fonts.length; i++){
  console.log("for tsükklis");
  if(fonts[i] == font){
    if(i == fonts.length - 1){
      document.querySelector('.container').style.fontFamily = fonts[0];
      break;
    }else{
      document.querySelector('.container').style.fontFamily = fonts[i+1];
      console.log(font);
      break;
    }
   }
  }
}

function changeFontColor(){
let colors = ["black", "white", "grey", "palevioletred", "crimson", "orangered", "peachpuff", "rosybrown", "lime", "mediumaquamarine", "aqua", "teal"];
let color = document.querySelector('.container').style.color;

for (let i = 0; i < colors.length; i++){
  console.log("for tsükklis");
  if(colors[i] == color){
    if(i == colors.length - 1){
      document.querySelector('.container').style.color = colors[0];
      break;
    }else{
      document.querySelector('.container').style.color = colors[i+1];
      console.log(color);
      break;
    }
   }
  }
}

function backgroundColor(){
  document.querySelector('body').style.backgroundImage = "none";
  let colors = ["black", "white", "grey", "palevioletred", "crimson", "orangered", "peachpuff", "rosybrown", "lime", "mediumaquamarine", "aqua", "teal"];
  console.log('toimib');
  let object = document.querySelector('click');
  let body = document.querySelector('body');
  

  for (let i = 0; i < colors.length; i++){
    console.log("for tsükklis");
    if(colors[i] == body.style.backgroundColor){
      if(i == colors.length - 1){
        body.style.backgroundColor = colors[0];
        console.log("ifis");
        break;
      }else{
        body.style.backgroundColor = colors[i+1];
        console.log("else-is");
        break;
      }
    }
  }
}

function backgroundImage(){
  let images = 'url("abstract-blue-geometric-shapes-background_1035-17545.jpg")';
  console.log('toimib');
  let object = document.querySelector('click');
  let body = document.querySelector('body');

  if(body.style.backgroundImage == "none"){
    document.querySelector('body').style.backgroundImage = 'url("abstract-blue-geometric-shapes-background_1035-17545.jpg")';
  }
  for (let i = 0; i < images.length; i++){
    console.log("for tsükklis");
    if(images[i] == body.style.backgroundImage){
      if(i == images.length - 1){
        body.style.backgroundImage = images[0];
        console.log("ifis");
        break;
      }else{
        body.style.backgroundImage = images[i+1];
        console.log("else-is");
        break;
      }
    }
  }
}