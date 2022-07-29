let elTime = document.querySelector(".time");

setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 10) hours = "0" + hours;
    let text = hours <= 12 ? "AM" : "PM"
    console.log(hours);
    if(hours > 23) hours -= 12
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    elTime.textContent = `${hours}:${minutes}:${seconds} ${text}`

})