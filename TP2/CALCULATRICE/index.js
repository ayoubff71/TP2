let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let screen = document.getElementById("screen");
let plus = document.getElementById("plus");
let equal =document.getElementById("equal");
let minus =document.getElementById("minus");
let division =document.getElementById("division");
let multiple =document.getElementById("multiple");
let virgul =document.getElementById("virgul");

let firstV;
let secV;
let result;
let operator;

let clear = document.getElementById("clear");
let effacer = document.getElementById("effacer");


one.onclick = function(){
    screen.value += one.value;
}

two.onclick = function(){
    screen.value += two.value;
}
three.onclick = function(){
    screen.value += three.value;
}

four.onclick = function(){
    screen.value += four.value;
}
five.onclick = function(){
    screen.value += five.value;
}
six.onclick = function(){
    screen.value += six.value;
}

seven.onclick = function(){
    screen.value += seven.value;
}
eight.onclick = function(){
    screen.value += eight.value;
}
nine.onclick = function(){
    screen.value += nine.value;
}
zero.onclick = function(){
    screen.value += zero.value;
}

plus.onclick = function(){
    firstV = Number(screen.value) ;
    screen.value=""; 
    operator = "+"
   
}
virgul.onclick = function(){
    if(screen.value.includes(".")){
        return 0;
    }
    else if(screen.value === ""){
        screen.value ="0.";
    }
    else{
        screen.value += "." ;
    }
    
    
}

minus.onclick = function(){
    firstV = Number(screen.value) ;
    screen.value=""; 
    operator = "-";
}
division.onclick = function(){
    firstV = Number(screen.value) ;
    screen.value=""; 
    operator = "/";
}
multiple.onclick = function(){
    firstV = Number(screen.value) ;
    screen.value=""; 
    operator = "*";
}


equal.onclick = function(){
    switch(operator){
        case "+":
            secV = Number(screen.value);
            result = firstV + secV;
            screen.value = result;
            break;
        case "-":
            secV = Number(screen.value);
            result = firstV - secV;
            screen.value = result;
            break;   
           
        case ".":
            secV = Number(screen.value);  
            screen.value = firstV.secV;
        case "*":
            secV = Number(screen.value);
            result = firstV * secV;
            screen.value = result;
            break;
        case "/":
            secV = Number(screen.value);
            if(secV === 0){
                result = "erreur";
                window.alert("you cant divide by 0");
            }
            else{
                result = firstV / secV;
                screen.value = result;
            }
            break;
        
        default:
            return 0;        
    }
}


clear.onclick = function(){
    screen.value = "";
}
effacer.onclick = function(){
screen.value = screen.value.substr(0 , screen.value.length-1);
}



