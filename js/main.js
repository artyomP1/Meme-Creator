'use strict';

let gCanvas = document.querySelector('.canvas');
let gCtx = gCanvas.getContext("2d");

function renderImgMemes(imgs) {
    let imagesHTMLs = '';
    imagesHTMLs = imgs.map(function(img) {
        return `<div
              class="img " data-id="${img.id}" >
                <img onclick="onModalmeme('${img.url}','${img.id}')" class="img-fluid" src="${img.url}" alt="">
                </div>
        </div>`;
    });

    let elImgsContainer = document.querySelector('.img-container');
    elImgsContainer.innerHTML = imagesHTMLs.join('');

}


function toggleMenu() {
    document.body.classList.toggle('open-menu');
}

function onModalmeme(imgUrl, imgId) {
    addImageId(imgId)
    let elModal = document.querySelector('.modal');
    elModal.style.display = 'flex';
    // elModal.classList.toggle('flex-modal');
    let elImgContainer = document.querySelector('.img-container');
    elImgContainer.style.display = 'none';
    // let elAboutMe = document.querySelector('.mx-auto');
    // elAboutMe.style.display = 'none';

    let elModalCanvas = document.querySelector('.modal-container');
    // let img = findCurrImg(imgId);
    // console.log(img)

    let image = new Image();
    image.width = elModalCanvas.offsetWidth;
    image.height = elModalCanvas.offsetHeight;
    gCanvas.width = elModalCanvas.offsetWidth;
    // gCanvas.height = elModalCanvas.offsetHeight;
    image.src = imgUrl;
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, image.width, image.height);
        return;
    };

}

function addTextToCanvas(txtMeme, selectedTxtIdx, fontSize) {
    let textx;
    gCtx.font = `${fontSize}px Comic Sans MS`;
    gCtx.fillStyle = txtMeme.color;
    gCtx.textAlign = txtMeme.align;
    if (gCtx.textAlign === 'left') textx = 10;
    else if (gCtx.textAlign === 'right') textx = gCanvas.width - 10;
    else textx = (gCanvas.width / 2) - 50;
    let texty = (selectedTxtIdx === 0) ? 50 : 300;
    if (txtMeme.isFill) gCtx.fillText(txtMeme.line, textx, texty);
    else gCtx.strokeText(txtMeme.line, textx, texty);

}

function editTxtOnCanvas(gMeme, ImgUrl) {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    onModalmeme(ImgUrl, gMeme.selectedImgId)
    console.log(gMeme.txts[0]);
    setTimeout(function() {
        addTextToCanvas(gMeme.txts[0], 0, gMeme.txts[0].size)
        addTextToCanvas(gMeme.txts[1], 1, gMeme.txts[0].size)
    }, 100);


}

function onSwitchTextLines() {
    switchTextLines()
}

function closeMemeEditor() {
    let elModal = document.querySelector('.modal')
    elModal.style.display = 'none';
}

function addTextInput() {
    let elTxtLine = document.querySelector('.text-line');
    console.log(elTxtLine);
    addTxtLine(elTxtLine.value);
    elTxtLine.value = '';

}

// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }