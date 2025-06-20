function randomIn(min, max) {
    const res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
}

function neonMixup(elem) {
    const ms = randomIn(2000, 4000);
    elem.style.setProperty('--interval', `${ms}ms`);
}

function neonPrepare() {
    let color1, color2, color3, color4;
    const signs = document.getElementsByClassName('neon');
    for (let sign of signs) {
        if (sign.className.indexOf('neon-invert') == -1) {
            sign.style.setProperty('--animation', 'flicker');
        } else {
            sign.style.setProperty('--animation', 'flicker-invert');

            computed = window.getComputedStyle(sign);
            color4 = computed.getPropertyValue('--color1');
            color3 = computed.getPropertyValue('--color2');
            color2 = computed.getPropertyValue('--color3');
            color1 = computed.getPropertyValue('--color4');

            sign.style.setProperty('--color1', color1);
            sign.style.setProperty('--color2', color2);
            sign.style.setProperty('--color3', color3);
            sign.style.setProperty('--color4', color4);
        }

        neonMixup(sign);
        sign.addEventListener('webkitAnimationIteration', () => {neonMixup(sign)});
    }
}

document.addEventListener("DOMContentLoaded", neonPrepare());
