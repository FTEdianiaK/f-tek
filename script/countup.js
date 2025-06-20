const animation = 2000;
const frames = 1000 / 60;
const total = Math.round(animation / frames);

function easeOutQuad(t) {
    return (t * (2 - t));
}

function countAnimate(elem) {
    let frame = 0;
    const count = parseInt(elem.innerHTML, 10);
    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / total);
        const current = Math.round(count * progress);

        if (parseInt(elem.innerHTML, 10) !== current) {
            elem.innerHTML = current;
        }

        if (frame === total) {
            clearInterval(counter);
        }
    }, frames);
}

function countRun() {
    let i;
    const elems = document.getElementsByClassName('countup');
    
    for (i = 0; i < elems.length; i++) {
        countAnimate(elems[i]);
    }
}

document.addEventListener('DOMContentLoaded', countRun());

