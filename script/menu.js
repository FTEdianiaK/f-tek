function menuExpand() {
    const menu = document.getElementById('burger');
    if (menu.className.indexOf('w3-show') == -1) {
        menu.classList.add('w3-show');
    } else {
        menu.classList.remove('w3-show');
    }
}

