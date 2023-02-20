/* when added a new post, update Artigos list */

function navbar()
{
    navbar = 
    `
    <nav class="navbar" id="mynavbar">
        <a href="#" class="active"><img src="./img/baoludu-logo.png" alt="Baoludu Logo" height="13"></a>
        <a href="./posts/post_template.html">Artigos</a>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
        <a href="javascript:void(0);" class="icon" onclick="doResponsiveNavbar()"><i  id="icon" class="fas fa-hamburger"></i></a>
    </nav>
    `;

    document.write(navbar);
}

navbar();