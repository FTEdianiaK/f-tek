function modalLoad() {
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'w3-modal w3-black';
    modal.setAttribute('onclick', "this.style.display='none'");


    let modalButton = document.createElement('span');
    modalButton.className = 'w3-button w3-large w3-black w3-display-topright';
    modalButton.title = 'Close Modal Image';

    let modalIcon = document.createElement('i')
    modalIcon.className = 'ph ph-x';
    modalButton.appendChild(modalIcon);

    modal.appendChild(modalButton);


    let modalContent = document.createElement('div');
    modalContent.className = 'w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64';

    let modalImage = document.createElement('img');
    modalImage.id = 'img-modal';
    modalImage.className = 'w3-image'
    modalImage.style.maxHeight = '75vh';
    modalImage.src = '';
    modalImage.alt = '';
    modalContent.appendChild(modalImage);

    let modalText = document.createElement('p');
    modalText.id = 'txt-modal';
    modalText.className = 'w3-opacity w3-large';
    modalContent.appendChild(modalText);

    modal.appendChild(modalContent);


    document.body.appendChild(modal);
}

function modalOpen(element) {
    document.getElementById('img-modal').src = element.src;
    document.getElementById('txt-modal').innerHTML = element.alt;
    document.getElementById('modal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', modalLoad());

