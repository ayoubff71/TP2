let ouvrir = document.getElementById("ouvrir");
let isOuvert = false;
ouvrir.onclick = function(){
    if(isOuvert){
        return;
    }
    let div = document.createElement("div");
    let fermer = document.createElement("button");
    let para = document.createElement("p");

    document.body.appendChild(div);
    div.appendChild(para);
    div.appendChild(fermer);

    div.style.width = "300px";
    div.style.height = "300px";
    div.style.border = "2px solid black";

    para.textContent = "Warning!,you have no access to this page!!";

    fermer.innerText = "Fermer";
    isOuvert = true;
    fermer.onclick= function(){
        div.remove();
        isOuvert = false;
    }
}