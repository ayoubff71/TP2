let search = document.getElementById("search");

let listes = document.querySelectorAll("li");

search.oninput = function(){
    listes.forEach(function(element){
    if(element.textContent.includes(search.value)){
        element.style.display = "";
    }
    else{
        element.style.display = "none";
    }
});
}



