/*$(document).ready(function() {
    let logo = `
        <img 
            src="./img/baoludu-animation.gif" 
            alt="Baoludu Logo"
            style="display:block; margin-left:auto; margin-right:auto"    
        >
    `;

    document.getElementById("logo").innerHTML = logo;
    $("#logo").fadeOut(200);
    $("#mainPage").fadeIn(200);
}); */

function show()
{
    document.getElementById("logo").style.display="block";
    document.querySelector("body").style.backgroundColor = "#000";
    setTimeout("hide()", 6000);
    fadeInPage();
}

function hide()
{
    document.getElementById("logo").style.display="none";
    document.getElementById("content").style.display="block";
    document.querySelector("body").style.backgroundColor = "#FFF";
}

function nocache() {
    var nods = document.getElementsByClassName("NO-CACHE");
    for (var i = 0; i < nods.length; i++) {
        nods[i].attributes['src'].value += "?a=" + Math.random();
    }
}

nocache();