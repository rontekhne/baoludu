/* navbar */

/* Toggle between adding and removing the "responsive" 
class to navbar when the user clicks on the icon */
function doResponsiveNavbar()
{
    let nav = document.getElementById("mynavbar");

    if (nav.className === "navbar") {
        nav.className += " responsive";
    }else {
        nav.className = "navbar";
    }
}