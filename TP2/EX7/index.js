let timer = document.getElementById("timer");
let seconds = 0;
let minutes = 0;

setInterval(Timer , 1000);

function Timer(){
    seconds++;
     if(seconds == 60){
        minutes +=1;
        seconds = 0;
    }
    timer.textContent ="le temps ecoule : " + minutes+" minutes et " + seconds + " secondes";
   
}

