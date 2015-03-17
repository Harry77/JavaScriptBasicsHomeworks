function showTime() {
    var currTime = new Date();
    var hours = currTime.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    var min = currTime.getMinutes();
    if (min < 10) {
        min = '0' + min;
    }
    var sec = currTime.getSeconds();
    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById("clock").innerHTML = hours + ":" + min + ":" + sec;
}

var timer;
timer = setInterval(showTime, 1000);