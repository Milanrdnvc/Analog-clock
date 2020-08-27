const test = document.querySelector('.second-handle');
let secDeg = 6;

setInterval(() => {
    test.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    secDeg += 6;
}, 1000);