const seconds = document.querySelector('.second-handle');
const minutes = document.querySelector('.minute-handle');
const hours = document.querySelector('.hour-handle');

function updateTime() {
    seconds.style.transform = `translateX(-50%) rotate(${new Date().getSeconds() * 6 + 180}deg)`;
    minutes.style.transform = `translateX(-50%) rotate(${new Date().getMinutes() * 6 + 180}deg)`;
    hours.style.transform = `translateX(-50%) rotate(${new Date().getHours() * 30 + 180}deg)`;
}

updateTime();

setInterval(updateTime, 1000);