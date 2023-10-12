function showDigitalClock() {
    var clock = new Date();
    var time = document.getElementById("clock");
    time.style.color = "Blue";

    time.innerHTML = clock.toLocaleTimeString().toLocaleUpperCase();
}


var pause = setInterval(showDigitalClock);
//var pause = setInterval(showDigitalClock, 1000);

function stopDigitalClock() {
    clearInterval(pause);
}

setInterval(showDefaultTime);



let seconds = 0;
let minute = 0;
let hour = 0;
var time;
var day = 1;

function showDefaultTime() {
    time = document.getElementById("count");
    time.innerHTML = hour + " : " + minute + " : " + seconds + " : " + day;
    time.style.color = "RED";
}

function start() {

    time = document.getElementById("count");

    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minute++;
        if (minute == 60) {
            hour++;
            if (hour == 24) {
                hour = 0;
                day++;
            }
        }


    }
    time.innerHTML = hour + " : " + minute + " : " + seconds + " Day " + day;

}



var startTime;

function startTime() {

    startTime = setInterval(start, 1000);
}

function stop() {
    clearInterval(startTime);
}

function reset() {

    seconds = 0;
    minute = 0;
    hour = 0;
    day = 1;
    time = document.getElementById("count");
    time.innerHTML = hour + ":" + minute + ":" + seconds;

    location.reload(true);
}