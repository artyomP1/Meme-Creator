'use strict'

let gImgs;
let gIdxId = 0;

function init() {
    gImgs = ctrateImgs();
    renderImgMemes(gImgs)
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