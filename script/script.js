let elTime = document.querySelector(".time");

setInterval(()=>{
    let date = new Date();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let day_night = "AM"
    if(hours > 12){
        day_night = "PM"
        hours = hours - 12
    }
    if(hours < 10) hours = hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
    elTime.textContent = `${hours < 10 ? "0" + hours : hours }:${minutes}:${seconds} ${day_night}`
})
