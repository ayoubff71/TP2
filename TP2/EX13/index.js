let barre = document.getElementById("barre");
let btn = document.getElementById("btn");

let timer;

btn.onclick = function(){
    timer = setInterval(progression , 2000);
}


function progression() {
    if (barre.offsetWidth + 30 >= 800) {
        barre.style.width = "800px";
        clearInterval(timer);
    } 
    else {
        barre.style.width = (barre.offsetWidth + 30) + "px";
    }
}


