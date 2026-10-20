let light = document.getElementById("light");
let btn = document.getElementById("btn");
let isBlack = false;

if(!isBlack){
    btn.innerText = "activer le theme sombre";
}
else{
    btn.innerText = "activer le theme clair";
}

btn.onclick = function(){
    if(!isBlack){
        light.style.backgroundColor ="black";
        btn.innerText = "Activer le thème clair";
        isBlack = true;
    }
    else{
        light.style.backgroundColor = "white";
        btn.innerText = "activer le theme sombre";
        isBlack = false;
    }
}