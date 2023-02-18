/* my video */

let video = document.getElementById("myVideo");
let pause = document.getElementById("pauseVideo");

function doPauseVideo()
{
    if (video.paused) {
        video.play();
        pause.innerHTML = "Parar vídeo";
    }else {
        video.pause();
        pause.innerHTML = "Continuar vídeo";
    }
}