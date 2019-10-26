'use strict'

let gImgs;
let gMeme;

function init() {
    gImgs = ctrateImgs();
    renderImgMemes(gImgs)
    ctrategMene()
}


function ctrategMene() {
    gMeme = {
        selectedImgId: null,
        selectedTxtIdx: 0,
        txts: [{
            line: '',
            size: 30,
            align: 'left',
            color: 'black',
            colorStroke: 'white',
            font: 'impact',
            isFill: true,
            width: 10,
            height: 30,
        }]
    }
}

function returnGMeme() {
    return gMeme;
}


function ctrateImgs() {
    let images = [];
    for (let i = 1; i < 26; i++) {
        let img = ctrateImg(i, `img/imgmeme/${i}.jpg`, 'happy')
        images.push(img);
    }
    return images;
}

function ctrateImg(id, url, keywords) {
    return {
        id,
        url,
        keywords,
    }
}


function addImageId(imgId) {
    gMeme.selectedImgId = +imgId;
}

function addTxtLine(elTxtLine) {
    gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[gMeme.selectedTxtIdx].size)
}



function addNewLine() {
    if (gMeme.txts.length > 2) return;
    let canvasHeight = chackCanvasHeight();
    gMeme.selectedTxtIdx++;
    canvasHeight = ((canvasHeight - 20) / gMeme.selectedTxtIdx);
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
    let newTxt = {
        line: '',
        size: 30,
        align: 'left',
        color: 'black',
        isFill: true,
        colorStroke: 'white',
        font: 'impact',
        height: canvasHeight,
        width: 10
    };

    gMeme.txts.push(newTxt);
    inputPlaceholderLine(gMeme.selectedTxtIdx);
}


function findCurrImg(image) {
    return gImgs.filter(function(img) {
        return img.id === image;
    });
}

function switchTextLines() {
    console.log(gMeme.txts);
    if (gMeme.txts.length === 1) return;
    else {
        let temp = gMeme.txts[1].line;
        gMeme.txts[1].line = gMeme.txts[0].line;
        gMeme.txts[0].line = temp;
    }
    if (gMeme.txts.length === 3) {
        let temp = gMeme.txts[0].line;
        gMeme.txts[0].line = gMeme.txts[2].line;
        gMeme.txts[2].line = temp;
    }
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}



function txtIdxDown() {
    gMeme.txts[gMeme.selectedTxtIdx].height += 5;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url)
    inputPlaceholderLine(gMeme.selectedTxtIdx);
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
}

function txtIdxUp() {
    gMeme.txts[gMeme.selectedTxtIdx].height -= 5;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url)
    inputPlaceholderLine(gMeme.selectedTxtIdx);
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
}

function changeFontSize(sizeChange) {
    let txts = gMeme.txts;
    txts.forEach(txt => {
        txt.size = txt.size + sizeChange;
    })
    gMeme.txts = txts;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}

function moveTextTo(height, width) {
    gMeme.txts[gMeme.selectedTxtIdx].height = height
    gMeme.txts[gMeme.selectedTxtIdx].width = width
}

function onMoveText(ev) {
    ev.preventDefault()
    if (!isMouseDown || gMeme.txts[0].line.length === 0) {
        return
    }
    moveTextTo(ev.offsetY, ev.offsetX)
    let img = findCurrImage(gMeme.selectedImgId)
        // addTextToCanvas(gMeme)
        // onModalMeme(img.url, gMeme.selectedTxtIdx)
    editTxtOnCanvas(gMeme, img.url)
}


function findImgToDell() {
    let img = findCurrImage(gMeme.selectedImgId)
    gMeme.txts[gMeme.selectedTxtIdx].line = '';
    editTxtOnCanvas(gMeme, img.url)
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
}

function changeAllTxt(whatToCange, toWhatChange) {
    let txts = gMeme.txts;
    txts.forEach(txt => {
        txt[whatToCange] = toWhatChange;
    })
    gMeme.txts = txts;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(image[0].txts);

}

function findCurrImage(imgId) {
    let img = gImgs.find(function(img) {
        return imgId === img.id;
    });
    return img;
}