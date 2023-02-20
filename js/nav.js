/* navbar */

/* Toggle between adding and removing the "responsive" 
class to navbar when the user clicks on the icon */
function doResponsiveNavbar()
{
    let nav = document.getElementById("mynavbar");
    let icon = document.getElementById("icon");

    if (nav.className === "navbar") {
        nav.className += " responsive";
        icon.classList.remove("fas", "fa-hamburger");
        icon.classList.add("fas", "fa-times-circle");

    }else {
        nav.className = "navbar";
        icon.classList.remove("fas", "fa-times-circle");
        icon.classList.add("fas", "fa-hamburger");
    }
}