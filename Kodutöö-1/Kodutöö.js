console.log('kell');


let d = new Date();
//Let´id js
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let Päev = d.getDay();
let Kuupäev = d.getDate();
let Kuu = d.getMonth();
let Aasta = d.getFullYear();;
let Päevad = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
let Kuud = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'];

//Let containerid koos HTML
let time = document.querySelector('#kell');
let dayContainer = document.querySelector('#Nädalapäev');
let dateContainer = document.querySelector('#Kuupäev');
let monthContainer = document.querySelector('#Kuu');
let yearContainer = document.querySelector('#Aasta');
let kalenderContainer = document.querySelector('#Kalender');

//JS let´id koos let containerid
dayContainer.innerHTML = Päevad[Päev];
dateContainer.innerHTML = Kuupäev;
monthContainer.innerHTML = Kuud[Kuu];
yearContainer.innerHTML = Aasta;


//Let font-size kohta
let buttonFontSize = document.querySelector('#FontSize');

//Let´id tausta kohta
let buttonTaustRand = document.querySelector('#TaustVärv');
let buttonTaustRed = document.querySelector('#PunaneTaust');
let buttonTaustGreen = document.querySelector('#RohelineTaust');
let buttonTaustBlue = document.querySelector('#SinineTaust');
let buttonTaustWhite = document.querySelector('#ValgeTaust');

//Let´id numbrite kohta
let buttonNumbRed = document.querySelector('#PunaneNumber');
let buttonNumbGreen = document.querySelector('#RohelineNumber');
let buttonNumbBlue = document.querySelector('#SinineNumber');
let buttonNumbBlack = document.querySelector('#MustNumber')
let buttonNumbRand = document.querySelector('#JuhuslikNumber');


//Font Size muutmine
buttonFontSize.addEventListener('click',fontSizeChange);


//Tausta värvi muutumiseks nuppud
buttonTaustRand.addEventListener('click', changeColorTaustRand);
buttonTaustRed.addEventListener('click', changeColorTaustRed);
buttonTaustGreen.addEventListener('click', changeColorTaustGreen);
buttonTaustBlue.addEventListener('click', changeColorTaustBlue);
buttonTaustWhite.addEventListener('click', changeColorTaustWhite);


//Numbrite värvi muutumiseks nuppud
buttonNumbRand.addEventListener('click', changeColorNumbRand);
buttonNumbRed.addEventListener('click', changeColorNumbRed);
buttonNumbGreen.addEventListener('click', changeColorNumbGreen);
buttonNumbBlue.addEventListener('click', changeColorNumbBlue);
buttonNumbBlack.addEventListener('click', changeColorNumbBlack);



Kell();

window.setInterval(Kell, 1000);

function Kell(){

d = new Date(); 
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
if(seconds < 10){
    seconds = "0" + seconds;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(hours < 10){
    hours = "0" + hours;
}
time.innerHTML = hours + ':' + minutes + ':' + seconds;
}




//Funktsioon random numri genereerimiseks

function generateColor() {
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}


// Funktsioonid tausta vahetamiseks
function changeColorTaustRand(){
    generateColor();
    dayContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    dateContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    monthContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    yearContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    time.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}

function changeColorTaustRed(){
    
    dayContainer.style.backgroundColor = 'rgb(255, 0, 0)';
    dateContainer.style.backgroundColor = 'rgb(255, 0, 0)';
    monthContainer.style.backgroundColor = 'rgb(255, 0, 0)';
    yearContainer.style.backgroundColor = 'rgb(255, 0, 0)';
    time.style.backgroundColor = 'rgb(255, 0, 0)';
}

function changeColorTaustGreen(){
    
    dayContainer.style.backgroundColor = 'rgb(0, 255, 0)';
    dateContainer.style.backgroundColor = 'rgb(0, 255, 0)';
    monthContainer.style.backgroundColor = 'rgb(0, 255, 0)';
    yearContainer.style.backgroundColor = 'rgb(0, 255, 0)';
    time.style.backgroundColor = 'rgb(0, 255, 0)';
}

function changeColorTaustBlue(){
    
    dayContainer.style.backgroundColor = 'rgb(0, 0, 255)';
    dateContainer.style.backgroundColor = 'rgb(0, 0, 255)';
    monthContainer.style.backgroundColor = 'rgb(0, 0, 255)';
    yearContainer.style.backgroundColor = 'rgb(0, 0, 255)';
    time.style.backgroundColor = 'rgb(0, 0, 255)';
}

function changeColorTaustWhite(){
    
    dayContainer.style.backgroundColor = 'rgb(255, 255, 255)';
    dateContainer.style.backgroundColor = 'rgb(255, 255, 255)';
    monthContainer.style.backgroundColor = 'rgb(255, 255, 255)';
    yearContainer.style.backgroundColor = 'rgb(255, 255, 255)';
    time.style.backgroundColor = 'rgb(255, 255, 255)';
}



// Funktsioonid numbrite muutmiseks
function changeColorNumbRand(){
    generateColor();
    dayContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    dateContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    monthContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    yearContainer.style.color = 'rgb('+ r +','+ g +','+ b +')';
    generateColor();
    time.style.color = 'rgb('+ r +','+ g +','+ b +')';
}

function changeColorNumbRed(){
    
    dayContainer.style.color = 'rgb(255, 0, 0)';
    dateContainer.style.color = 'rgb(255, 0, 0)';
    monthContainer.style.color = 'rgb(255, 0, 0)';
    yearContainer.style.color = 'rgb(255, 0, 0)';
    time.style.color = 'rgb(255, 0, 0)';
}

function changeColorNumbGreen(){
    
    dayContainer.style.color = 'rgb(0, 255, 0)';
    dateContainer.style.color = 'rgb(0, 255, 0)';
    monthContainer.style.color = 'rgb(0, 255, 0)';
    yearContainer.style.color = 'rgb(0, 255, 0)';
    time.style.color = 'rgb(0, 255, 0)';
}

function changeColorNumbBlue(){
    
    dayContainer.style.color = 'rgb(0, 0, 255)';
    dateContainer.style.color = 'rgb(0, 0, 255)';
    monthContainer.style.color = 'rgb(0, 0, 255)';
    yearContainer.style.color = 'rgb(0, 0, 255)';
    time.style.color = 'rgb(0, 0, 255)';
}

function changeColorNumbBlack(){
    
    dayContainer.style.color = 'rgb(0, 0, 0)';
    dateContainer.style.color = 'rgb(0, 0, 0)';
    monthContainer.style.color = 'rgb(0, 0, 0)';
    yearContainer.style.color = 'rgb(0, 0, 0)';
    time.style.color = 'rgb(0, 0, 0)';
}


//Funktsioon fontsize muutmine 

let punkt = 0;
function fontSizeChange(){
    punkt++;
    if (punkt == 1){
        kalenderContainer.style.fontSize = '100%';
    }
    else if (punkt == 2){
        kalenderContainer.style.fontSize = '150%';
    }
    else if (punkt == 3){
        kalenderContainer.style.fontSize = '200%';
    }
    else if(punkt == 4){
        kalenderContainer.style.fontSize = '250%';
    }
    else if(punkt == 5){
        punkt = 0;
    }
    
}




