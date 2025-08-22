const music = new Audio('Sondae.mp3');
music.loop = true;

//music.volume;

function toggleMode(){
    document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded', function() {
    music.play();
});