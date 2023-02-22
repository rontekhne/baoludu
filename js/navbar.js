/* when added a new post, update Artigos list */

function navbar()
{
    navbar = 
    `
    <nav class="navbar" id="mynavbar">
        <a href="./main.html" class="active"><img src="./img/baoludu-logo.png" alt="Baoludu Logo" height="13"></a>
        <a href="./articles.html">Artigos</a>
        <a href="./contact.html">Contato</a>
        <a href="./about.html">Sobre</a>
        <a href="javascript:void(0);" class="icon" onclick="doResponsiveNavbar()"><i  id="icon" class="fas fa-hamburger"></i></a>
    </nav>
    `;

    document.write(navbar);
}

navbar();