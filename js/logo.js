function show()
{
    document.getElementById("logo").style.display="block";
    setTimeout("hide()", 6000);
}

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

function hide()
{
    logo = document.getElementById("logo");
    //logo.classList.add("hide");
    //logo.style.display = "none";
    removeFadeOut(logo, 2000);
    setTimeout("showMainPage()", 2000);
}

function showMainPage() 
{
    document.getElementById("content").style.display="block";
}

function nocache() {
    var nods = document.getElementsByClassName("NO-CACHE");
    for (var i = 0; i < nods.length; i++) {
        nods[i].attributes['src'].value += "?a=" + Math.random();
    }
}
nocache();