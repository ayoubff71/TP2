let todo = document.getElementById("todo");
let ajout = document.getElementById("ajout");



ajout.onclick = function(){

    let li = document.createElement("li");
    let sup = document.createElement("button");
    let done = document.createElement("button");

    done.innerText = "done";
    sup.innerText = "supprimer";
    
    li.innerHTML = todo.value;
    li.style.listStyleType = "disc";
    li.style.marginBottom = "5px";
    li.style.marginRight = "5px";

    
    sup.style.marginRight = "5px";

    document.body.appendChild(li);
    li.appendChild(sup);
    li.appendChild(done);

    sup.onclick = function(){
        li.remove();
    }
    done.onclick = function(){
        li.style.textDecoration = "line-through";
    }
    todo.value ="";

}


