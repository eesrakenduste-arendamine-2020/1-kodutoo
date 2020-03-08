var menu_timeout_ID;
clearTimeout(menu_timeout_ID);

var menu_is_active = false;
make_the_menu_visible();


var seconds_are_visible = true;


function on_mouse_over_the_menu()
{
    menu_is_active = true;
}
function on_mouse_out()
{
    menu_is_active = false;    
    clearTimeout(menu_timeout_ID);
    menu_timeout_ID = setTimeout("close_the_menu();", 3000);
}

function close_the_menu()
{
    if (menu_is_active === false)
    {
        document.getElementById("menu").style.display=" none";
    }
}

function make_the_menu_visible() 
{
    var element = document.getElementById("menu");

    if (element.style.display === "none")
    {
        element.style.display = "block";
    }

    clearTimeout(menu_timeout_ID);
    menu_timeout_ID = setTimeout("close_the_menu();", 3000);
}


var clock_numbers_color = "#ffffff";
document.getElementById("clock_numbers_color").value = clock_numbers_color; 

function change_clock_numbers_color(into_color)
{
    document.getElementById("clock_numbers").style.color = into_color;
}


function toggle_date_section_visibility() 
{
    var element = document.getElementById("date_section");

    if (element.style.display === "none")
    {
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
}


function toggle_seconds_visibility() 
{
    if (seconds_are_visible === true)
    {
        seconds_are_visible = false;
    }
    else
    {
        seconds_are_visible = true;
    }
}


function scroll_to_new_size(event, section) 
{
    var delta = event.deltaY > 0 ? 1 : event.deltaY < 0 ? -1 : 0 ;

    var font_size_and_measure = window.
            getComputedStyle(document.getElementById("date_section"), null).
                getPropertyValue('font-size');
    
    font_size_in_px = parseInt(font_size_and_measure.replace("px","")) + delta;

    font_size_and_measure = font_size_in_px + "px";

    document.getElementById("date_section").style.fontSize
        = font_size_and_measure;
}


function set_date()
{
    var date_object     = new Date();    
    var seconds         = date_object.getSeconds();
    var minutes         = date_object.getMinutes();
    var hours           = date_object.getHours();
    var day             = date_object.getDate();
    var month           = date_object.getMonth();
    var year            = date_object.getFullYear();
    
    var day_name_number = date_object.getDay();
    var day_name        = names_of_days [day_name_number];
    
    if (seconds_are_visible === true)
    {
        document.getElementById("clock_numbers").innerHTML =
        hours + ":" + minutes + ":" + seconds;
    }
    else
    {
        document.getElementById("clock_numbers").innerHTML =
        hours + ":" + minutes;
    }

    document.getElementById("date_section").innerHTML =
    names_of_days [day_name_number] + ", " + day 
    + ". " + names_of_months [month] + ", " + "AD " + year;


    time_loop();
}

function time_loop()
{
    setTimeout("set_date();", 500);
}

function page_onload()
{
    time_loop();
    
    document.getElementById("date_section")
        .addEventListener("wheel", scroll_to_new_size);
}