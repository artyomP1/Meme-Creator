'use strict';

let gCanvas = document.querySelector('.canvas');
let gCtx = gCanvas.getContext("2d");
let isMouseDown = false;


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


function addTextToCanvas(txtMeme) {
    // gCtx.clearRect(0, 0, c.width, c.height);
    gCtx.restore();
    gCtx.font = `${txtMeme.size}px ${txtMeme.font}`;
    gCtx.fillStyle = txtMeme.color;
    gCtx.textAlign = txtMeme.align;
    gCtx.strokeStyle = txtMeme.colorStroke;
    gCtx.strokeText(txtMeme.line, txtMeme.width, txtMeme.height);
    if (txtMeme.isFill) gCtx.fillText(txtMeme.line, txtMeme.width, txtMeme.height);
    gCtx.save();
}

function chackCanvasHeight() {
    return gCanvas.height
}

function alignText(align) {
    textAlign(align);
}

function unFillText() {
    changeAllTxt('isFill', false)
}

function fillText() {
    changeAllTxt('isFill', true)
}

function changeColor(color) {
    changeAllTxt('color', color)
}

function textFontSize(TextCangeSize) {
    let changeSize = (TextCangeSize === 'increase') ? 2 : -2;
    changeFontSize(changeSize)
}

function textAlign(align) {
    changeAllTxt('align', align)
    let width;
    if (align === 'left') width = 10;
    else if (align === 'right') width = gCanvas.width - 10;
    else width = (gCanvas.width / 2);
    changeAllTxt('width', width)
}


function editTxtOnCanvas(gMeme, imgUrl) {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    onModalMeme(imgUrl, gMeme.selectedImgId)
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
    changeAllTxt('font', fontFamily)
}


function deleteTxt() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    findImgToDell()
}

function backTogallery() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    closeMemeEditor();
    ctrategMene();
    let elTxtLine = document.querySelector('.text-line');
    elTxtLine.value = '';
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

function download() {
    var download = document.getElementById("download");
    var image = gCanvas.toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
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






function mouseDown() {
    isMouseDown = true;
}

function mouseUp() {
    isMouseDown = false;

}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}


function uploadImg(elForm, ev) {
    ev.preventDefault();

    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
       </a>`
        document.querySelector('.share-container').classList.add('sh-dw');
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);

    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text()
        })

    .then(onSuccess)
        .catch(function(error) {
            console.error(error)
        })
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderCanvas)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function(event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));