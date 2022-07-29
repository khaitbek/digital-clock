let elTime = document.querySelector(".time");

setInterval(()=>{
    let date = new Date();
    let hours = date.getHours() + 7;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours > 12) hours -= 12;
    if(hours < 10) hours = hours;
    let text = hours <= 12 ? "AM" : "PM";
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    elTime.textContent = `${hours < 10 ? "0" + hours : hours }:${minutes}:${seconds} ${text}`

})