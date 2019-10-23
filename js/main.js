'use strict';

let elCanvas = document.querySelector('.canvas');
let gCtx = elCanvas.getContext("2d");

function renderImgMemes(imgs) {
    let imagesHTMLs = '';
    imagesHTMLs = imgs.map(function(img) {
        return `<div
             onclick="onModalmeme('${img.url}')" class="img " data-id="${img.id}" >
                <img class="img-fluid" src="${img.url}" alt="">
                </div>
        </div>`;
    });

    let elImgsContainer = document.querySelector('.img-container');
    elImgsContainer.innerHTML = imagesHTMLs.join('');

}


function toggleMenu() {
    document.body.classList.toggle('open-menu');
}

function onModalmeme(imgUrl) {

    let elImgContainer = document.querySelector('.img-container');
    elImgContainer.style.display = 'none';
    // let img = findCurrImg(imgId);
    // console.log(img)
    let background = new Image();
    background.src = imgUrl;
    // console.log(img)
    background.onload = () => {
        gCtx.drawImage(background, 0, 0);
    };

    let elModal = document.querySelector('.modal');
    elModal.style.display = 'initial';
}


function closeMemeEditor() {
    let elModal = document.querySelector('.modal')
    elModal.style.display = 'none';
}