let root = document.querySelector(':root');
let interval = setInterval(() => {
    let angle = +getComputedStyle(root).getPropertyValue('--angle').match(/\d+/)[0];
    angle = (angle + 2) % 360;
    root.style.setProperty('--angle', `-${angle}deg`);
}, 25);
