const button = document.getElementById("cart");
const label = document.getElementById("counter");
lab = 0;

button.onclick = function(){
    lab++;
    label.textContent = lab;
}