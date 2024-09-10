const timeVar = document.getElementById('time');

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let format = 'AM';
    if (hours > 12) {
        hours = hours - 12;
        format = 'PM';
    }
    if (hours == 0) {
        hours = 12;
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let finalTime = `${hours}:${minutes}:${seconds} ${format}`;
    timeVar.textContent = finalTime;
    setTimeout(clock, 1000);
}
timeVar = clock();

