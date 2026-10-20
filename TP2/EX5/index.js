let suivant = document.getElementById("suivant");
let precedent = document.getElementById("precedent");
let image = document.getElementById("image");

let imgs = ["0.jpeg" , "1.jpeg" , "2.jpeg"];
let index = 0;


function afficherImage(){
    image.src = imgs[index];
}
suivant.onclick = function(){
    index++;

     if(index >=imgs.length){
        index = 0;
    }
    image.src = imgs[index];
    
}

precedent.onclick = function(){
    index--;

    if(index < 0){
        index = 2;
    }
    image.src = imgs[index];
}