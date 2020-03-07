window.onload = function() {
    $('p').css('color', '#FFD7EF');
    updateTime();
    intervalId = setInterval(function(){
        updateTime();
    }, 1000);
}

function updateTime() {
    var timeStamp = moment().format('HH:mm:ss');
    var dateStamp = moment().format('DD.MM.YY');
    var dayOfTheWeek = moment().locale('et').format('dddd');
    $('#time').text(timeStamp);
    $('#date').text(dateStamp);
    $('#dof').text(dayOfTheWeek);
}

$(document).on('click', '.pinkButton', function() {
    $('p').css('color', '#FFD7EF');
    $('.blueButton').removeClass('blueSelected');
    $('.pinkButton').addClass('pinkSelected');
});

$(document).on('click', '.blueButton', function() {
    $('p').css('color', '#ADE4FF');
    $('.pinkButton').removeClass('pinkSelected');
    $('.blueButton').addClass('blueSelected');
});

$(document).on('click', '.minus', function() {
    var currentSize = $('.minus').data('size');
    var newSize = currentSize-=1;
    $('.minus').data('size', newSize);
    $('p').css('font-size', newSize + "px");
});

$(document).on('click', '.plus', function() {
    var currentSize = $('.minus').data('size');
    var newSize = currentSize+=1;
    $('.minus').data('size', newSize);
    $('p').css('font-size', newSize + "px");
});

$(document).on('click', '.box', function() {
   var that = $(this);
    $(this).removeClass('fadein');
    $(this).addClass('fadeout');
    setTimeout(function() { 
        $(that).addClass('fadein');
        $(that).removeClass('fadeout');
    }, 1500);
});