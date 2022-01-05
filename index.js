const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


const countDown = "11 Aug 2022";

function countdown() {
    const eventDay = new Date(countDown);
    const currentDate = new Date();
    
    const seconds = (eventDay - currentDate) / 1000;
    
    const days = Math.floor((seconds / 3600 / 24));
    const hours = Math.floor(seconds / 3600 % 24);
    const minutes = Math.floor(seconds / 60 % 24);
    const secs = Math.floor(seconds) % 60;
    
    
    daysEl.textContent = days
    hoursEl.textContent = timeFormat(hours)
    minutesEl.textContent = timeFormat(minutes)
    secondsEl.textContent = timeFormat(secs)
    
    
    console.log(days, hours, secs, minutes);
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000 )
