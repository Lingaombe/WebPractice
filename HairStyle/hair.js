const ht = document.getElementById("ht");
const hl = document.getElementById("hl");
const sf = document.getElementById("sf");
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const l1 = document.getElementById("l1");
const stylebtn = document.getElementById("style");
let random = Math.floor(Math.random() * 6);


btn.onclick = function(){
    if(h1.checked){
        ht.textContent = "you have chosen 4a";
    }
    else if(h2.checked){
        ht.textContent = "you have chosen 4b";
    }
    else if(h3.checked){
        ht.textContent = "you have chosen 4c";
    }
    else{
        ht.textContent = "you need to select a hair type";
    }
    if(l1.checked){
        hl.textContent = "you have chosen twa";
    }
    else if(l2.checked){
        hl.textContent = "you have chosen shoulder length";
    }
    else if(l3.checked){
        hl.textContent = "you have chosen midback length";
    }
    else if(l4.checked){
        hl.textContent = "you have chosen waist length";
    }
    else{
        hl.textContent = "you need to select hair length";
    }
    if(f1.checked){
        sf.textContent = "you have chosen biweekly styling";
    }
    else if(f2.checked){
        sf.textContent = "you have chosen weekly styling";
    }
    else if(f3.checked){
        sf.textContent = "you have chosen bimonthly styling";
    }
    else if(f4.checked){
        sf.textContent = "you have chosen monthly styling";
    }
    else{
        sf.textContent = "you need to select styling frequency";
    }
}
function change(){
    var img = document.getElementById("pic");
    if(random == 1){
        img.src = "Hairstles/1.jpg";
    }
    else if(random == 2){
        img.src = "Hairstles/2.jpg";
    }
    else if(random == 3){
        img.src = "Hairstles/3.jpg";
    }
    else if(random == 4){
        img.src = "Hairstles/4.jpg";
    }
    else if(random == 5){
        img.src = "Hairstles/5.jpg";
    }
    else if(random == 6){
        img.src = "Hairstles/6.jpg";
    }
    else if(random == 7){
        img.src = "Hairstles/7.jpg";
    }
    else if(random == 8){
        img.src = "Hairstles/8.jpg";
    }
    else if(random == 9){
        img.src = "Hairstles/9.jpg";
    }
    else if(random == 10){
        img.src = "Hairstles/10.jpg";
    }
    else if(random == 11){
        img.src = "Hairstles/11.jpg";
    }
    else{
        img.src = "Hairstles/12.jpg";
    }
}
