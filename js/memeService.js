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
    selectedTxtIdx: 0,
    txts: [{
        line: '',
        size: 30,
        align: 'left',
        color: 'black',
        colorStroke: 'white',
        font: 'impact',
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
    gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[gMeme.selectedTxtIdx].size)
}



function addNewLine() {
    if (gMeme.txts.length > 2) return;
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
    let newTxt = {
        line: '',
        size: 30,
        align: 'left',
        color: 'black',
        isFill: true
    };
    gMeme.selectedTxtIdx++;
    gMeme.txts.push(newTxt);
    inputPlaceholderLine(gMeme.selectedTxtIdx);
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
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[0].size)
}


function textAlign(align) {
    changeAllTxt('align', align)
}

function txtIdxDown() {
    if (gMeme.selectedTxtIdx === gMeme.txts.length - 1) return;
    gMeme.selectedTxtIdx++;
    inputPlaceholderLine(gMeme.selectedTxtIdx);
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
}

function txtIdxUp() {
    if (gMeme.selectedTxtIdx === 0) return;
    gMeme.selectedTxtIdx--;
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
    editTxtOnCanvas(gMeme, image[0].url);
}

function findCurrImage(imgId) {
    let img = gImgs.find(function(img) {
        return imgId === img.id;
    });
    return img;
}