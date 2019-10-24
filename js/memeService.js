'use strict'

let gImgs;
let gMeme;
let gIdxId = 0;

function init() {
    gImgs = ctrateImgs();
    renderImgMemes(gImgs)
}


gMeme = {
    selectedImgId: null,
    selectedTxtIdx: -1,
    txts: [{
        line: '',
        size: 30,
        align: 'left',
        color: 'black',
        isFill: true
    }, {
        line: '',
        size: 30,
        align: 'left',
        color: 'black',
        isFill: true
    }]
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
    if (gMeme.selectedTxtIdx === -1) {
        gMeme.selectedTxtIdx = 0;
        gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    } else if (gMeme.selectedTxtIdx === 0) {
        gMeme.selectedTxtIdx = 1;
        gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    } else return;
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[gMeme.selectedTxtIdx].size)
}


function findCurrImg(image) {
    return gImgs.filter(function(img) {
        return img.id === image;
    });
}

function switchTextLines() {
    [gMeme.txts[0], gMeme.txts[1]] = [gMeme.txts[1], gMeme.txts[0]];
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
    addTextToCanvas(gMeme.txts[0], gMeme.selectedTxtIdx, Meme.txts[0].size)
    addTextToCanvas(gMeme.txts[1], gMeme.selectedTxtIdx, Meme.txts[0].size)
}

function alignToLeft() {
    gMeme.txts[0].align = 'left';
    gMeme.txts[1].align = 'left';
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);

}

function alignToRight() {
    gMeme.txts[0].align = 'right';
    gMeme.txts[1].align = 'right';
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}


function alignToCenter() {
    gMeme.txts[0].align = 'center';
    gMeme.txts[1].align = 'center';
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);

}

function increaseFont() {
    gMeme.txts[0].size += 2;
    gMeme.txts[1].size += 2;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}

function decreaseFont() {
    gMeme.txts[0].size -= 2;
    gMeme.txts[1].size -= 2;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}

function unFillText() {
    gMeme.txts[0].isFill = false;
    gMeme.txts[1].isFill = false;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);
}

function changeColor(color) {
    gMeme.txts[0].color = color;
    gMeme.txts[1].color = color;
    let image = findCurrImg(gMeme.selectedImgId)
    editTxtOnCanvas(gMeme, image[0].url);

}

function findImgToDell() {
    let img = findCurrImage(gMeme.selectedImgId)
    gMeme.txts[0].line = '';
    gMeme.txts[0].line = '';
    gMeme.selectedTxtIdx = -1;
    onModalMeme(img.url, img.id)
}

function findCurrImage(imgId) {
    let img = gImgs.find(function(img) {
        return imgId === img.id;
    });
    return img;
}