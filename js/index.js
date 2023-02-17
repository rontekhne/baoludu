/* language select */

function selectLanguage()
{
    chooseLanguage = document.getElementById("chooseLanguage");
    subtitle = document.getElementById("subtitle");
    language = document.getElementById("languages").value;

    if (language === "pt" ) {
        subtitle.textContent = "Desenvolvimento de Jogos Independentes & Mais...";
    }else if (language === "en") {
        subtitle.textContent = "Indie Game Development & More...";
    }
}
