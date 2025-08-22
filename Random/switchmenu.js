const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const button1 = document.getElementById("switch1");
const button2 = document.getElementById("switch2");
const submenu1 = document.querySelector(".submenu11");
const pass = document.getElementById("pass");
const pass1 = document.getElementById("pass1");
const result = document.getElementById("result");
let x = pass.value;
let y = pass1.value;

button1.onclick = function(){
    menu1.style.display = "none";
    menu2.style.display = "flex";
}

button2.onclick = function(){
    menu2.style.display = "none";
    menu1.style.display = "flex";
}

addEventListener('load', ()=>{
    menu2.style.display = "none";
})

.menu1.addEventListener('click', () => {
    menu1.style = ".active";
})
    if (x == y){
        result.textContent = "Passwords do not match";
    }
    else {
        result.textContent = "Passwords do match";
    }


