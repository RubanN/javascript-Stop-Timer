var min =0;
var sec=0;
var milliSec = 0;
var timer;

function callTimer(){
    milliSec++;
    if(milliSec <100){
        console.log("milliSec---1111------------------------->",milliSec);
        if(milliSec ===99){
            console.log("milliSec---2222------------------------->",milliSec);

            milliSec =0;
            console.log("milliSec---3333------------------------->",milliSec);

            sec++;
            if(sec ===60){
                sec=0;
                min++;
            }
        }
    }
    else{
        milliSec=0;
    }
    document.getElementById("timer").innerHTML=min+ ":"+sec+ ":"+milliSec;
}
function start(){
    document.getElementById('start').disabled=true;
    timer = setInterval(callTimer,10)
    console.log("Start-------------------------->",start);
}
function stop(){
    document.getElementById("start").disabled=false;
    clearInterval(timer);
    console.log("STOP-------------------------->",timer);
}
function reset(){
    stop();
    min=0;
    sec=0;
    milliSec=0;
    document.getElementById('timer').innerHTML=min+":"+sec+":"+milliSec;
    console.log("reset-------------------------->",reset);
}

