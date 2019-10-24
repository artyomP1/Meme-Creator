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
    selectedTxtIdx: null,
    txts: [{
        line: null,
        size: 30,
        align: 'left',
        color: 'red',
        isFill: true
    }, {
        line: null,
        size: 30,
        align: 'left',
        color: 'red',
        isFill: true
    }]
}


function ctrateImgs() {
    return [
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(1 + gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),

    ]

}

function ctrateImg(id, url, keywords) {
    return {
        id,
        url,
        keywords,
    }
}

function findCurrImg(imgId) {
    console.log(gImgs)
    let img = gImgs.find(function(img) {
        return imgId === img.id;
    });
    console.log(img)
    return img;
}

function addImageId(imgId) {
    gMeme.selectedImgId = +imgId;
}

function addTxtLine(elTxtLine) {
    if (gMeme.selectedTxtIdx === null) {
        gMeme.selectedTxtIdx = 0;
        gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    } else if (gMeme.selectedTxtIdx === 0) {
        gMeme.selectedTxtIdx = 1;
        gMeme.txts[gMeme.selectedTxtIdx].line = elTxtLine;
    }
    console.log(gMeme.txts[gMeme.selectedTxtIdx]);

    addTextToCanvas(gMeme.txts[gMeme.selectedTxtIdx], gMeme.selectedTxtIdx, gMeme.txts[gMeme.selectedTxtIdx].size)
}

function switchTextLines() {

    [gMeme.txts[0], gMeme.txts[1]] = [gMeme.txts[1], gMeme.txts[0]];
    console.log(gMeme.selectedImgId);

    let image = findCurrImg(gMeme.selectedImgId)
    console.log(image);
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

// function decreaseFont() {
//     gMeme.txts[0].size -= 2;
//     gMeme.txts[1].size -= 2;
//     let image = findCurrImg(gMeme.selectedImgId)
//     editTxtOnCanvas(gMeme, image[0].url);
// }

// function unFillText() {
//     gMeme.txts[0].isFill = false;
//     gMeme.txts[1].isFill = false;
//     let image = findCurrImg(gMeme.selectedImgId)
//     editTxtOnCanvas(gMeme, image[0].url);
// }

function findCurrImg(image) {
    return gImgs.filter(function(img) {
        return img.id === image;
    });
}