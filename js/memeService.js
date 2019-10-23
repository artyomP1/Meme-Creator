'use strict'

let gImgs;
let gIdxId = 0;

function init() {
    gImgs = ctrateImgs();
    renderImgMemes(gImgs)
}


function ctrateImgs() {
    return [
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy'),
        ctrateImg(gIdxId++, `img/imgmeme/${gIdxId}.jpg`, 'happy')

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
    let img = gImgs.find(function(img) {
        return image.id === imgId;
    });
    return img;
}