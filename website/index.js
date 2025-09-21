const music = new Audio('Sondae.mp3');
music.loop = true;

music.volume = 0.5;

document.addEventListener('DOMContentLoaded', function() {
    music.play();
});