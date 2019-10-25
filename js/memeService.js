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
    console.log(elTxtLine);

    // if (gMeme.selectedTxtIdx === -1) {
    //     gMeme.selectedTxtIdx = 0;
    gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    // } else if (gMeme.selectedTxtIdx === 0) {
    //     gMeme.selectedTxtIdx = 1;
    //     gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    // } else return;
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[gMeme.selectedTxtIdx].size)
}



function addNewLine() {
    if (gMeme.txts.length > 2) return;
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
    let newTxt = gMeme.txts[0];
    gMeme.selectedTxtIdx++;
    gMeme.txts.push(newTxt)
    inputPlaceholderLine(gMeme.selectedTxtIdx)
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
    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, Meme.txts[0].size)
}


function textAlign(align) {
    changeAllTxt('align', align)
}

function txtIdxDown() {
    if (gMeme.selectedTxtIdx === gMeme.txts.length - 1) return;
    gMeme.selectedTxtIdx++
}

function txtIdxUp() {
    if (gMeme.selectedTxtIdx === 0) return;
    gMeme.selectedTxtIdx--
        console.log(gMeme.selectedTxtIdx);
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
    gMeme.txts[0].line = '';
    gMeme.txts[0].line = '';
    gMeme.selectedTxtIdx = -1;
    onModalMeme(img.url, img.id)
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