'use strict';

let gCanvas = document.querySelector('.canvas');
let gCtx = gCanvas.getContext("2d");

function renderImgMemes(imgs) {
    let imagesHTMLs = '';
    imagesHTMLs = imgs.map(function(img) {
        return `<div
              class="img " data-id="${img.id}" >
                <img onclick="onModalMeme('${img.url}','${img.id}')" class="img-fluid" src="${img.url}" alt="">
                </div>
        </div>`;
    });
    let elImgsContainer = document.querySelector('.img-container');
    elImgsContainer.innerHTML = imagesHTMLs.join('');
}

function onModalMeme(imgUrl, imgId) {
    addImageId(imgId)
    openEditorCloseGallery();
    let elModalCanvas = document.querySelector('.modal-container');
    let image = new Image();
    image.width = elModalCanvas.offsetWidth;
    image.height = elModalCanvas.offsetHeight;
    gCanvas.width = elModalCanvas.offsetWidth;

    image.src = imgUrl;
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, image.width, image.height);
    };
}

function addTextToCanvas(txtMeme, selectedTxtIdx) {
    let textx;
    let texty;
    gCtx.font = `${txtMeme.size}px ${txtMeme.font}`;
    gCtx.fillStyle = txtMeme.color;
    gCtx.textAlign = txtMeme.align;
    gCtx.strokeStyle = txtMeme.colorStroke;
    if (gCtx.textAlign === 'left') textx = 10;
    else if (gCtx.textAlign === 'right') textx = gCanvas.width - 10;
    else textx = (gCanvas.width / 2);
    if (selectedTxtIdx === 0) texty = 50;
    else texty = ((gCanvas.height - 20) / selectedTxtIdx);
    gCtx.strokeText(txtMeme.line, textx, texty);
    if (txtMeme.isFill) gCtx.fillText(txtMeme.line, textx, texty);

}


function alignText(align) {
    textAlign(align);
}

function unFillText() {
    changeAllTxt('isFill', false)
}

function changeColor(color) {
    changeAllTxt('color', color)
}

function textFontSize(TextCangeSize) {
    let changeSize = (TextCangeSize === 'increase') ? 2 : -2;
    changeFontSize(changeSize)
}


function editTxtOnCanvas(gMeme, ImgUrl) {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    onModalMeme(ImgUrl, gMeme.selectedImgId)
    setTimeout(function() {
        let txts = gMeme.txts;
        let idx = 0;
        txts.forEach(txt => {
            addTextToCanvas(txt, idx)
            idx++
        })

    }, 10);
}

function onSwitchTextLines() {
    switchTextLines()
}

function closeMemeEditor() {
    let elModal = document.querySelector('.modal')
    elModal.style.display = 'none';
}

function changeFont(fontFamily) {
    console.log(fontFamily);

    changeAllTxt('font', fontFamily)
}


function deleteTxt() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    findImgToDell()
}

function backTogallery() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    closeMemeEditor()
    let elImgContainer = document.querySelector('.img-container');
    elImgContainer.style.display = 'grid';
}

function openEditorCloseGallery() {
    let elModal = document.querySelector('.modal');
    elModal.style.display = 'flex';
    let elImgContainer = document.querySelector('.img-container');
    elImgContainer.style.display = 'none';

}

function toggleMenu() {
    document.body.classList.toggle('open-menu');
}

function inputPlaceholderLine(txtIdx) {
    let lineNum;
    switch (txtIdx) {
        case 0:
            lineNum = 'first';
            break;
        case 1:
            lineNum = 'second';
            break;
        case 2:
            lineNum = 'third';
            break;
    };
    document.querySelector('.text-line').placeholder = lineNum + ' text line';
}