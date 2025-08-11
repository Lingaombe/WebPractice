const mod = document.querySelector(".GIT");
const mode = document.querySelector(".GITE");
let count = 0;

mod.onclick = function(){
    count++;
    if(count % 2 == 1){
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    else{
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}

mode.onclick = function(){
    count++;
    if(count % 2 == 1){
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    else{
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}

const remove = document.querySelector(".side");
const closed = document.getElementById("close");
const opened = document.getElementById("open");

closed.addEventListener('click', () => {
    remove.style.display = 'none';
    console.log("clicked")
})

opened.addEventListener('click', () => {
    remove.style.display = 'flex';
    console.log("clicked")
})

addEventListener('load', () => {
    remove.style.display = 'none';
    console.log("loaded")
})