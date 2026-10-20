let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
isDisplay = false;
menuBtn.onclick = function(){
    if(!isDisplay){
        menu.style.display = "block";
        isDisplay = true;
    }
    else{
        menu.style.display = "none";
        isDisplay = false;
    }
}