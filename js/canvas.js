// var canvas;
// var ctx;

// // function init() {
// //     canvas = document.getElementById('myCanvas');
// //     ctx = canvas.getContext('2d');
// // }

// function renderCanvas(img) {
//     canvas = document.getElementById('myCanvas');
//     ctx = canvas.getContext('2d');
//     canvas.width = img.width;
//     canvas.height = img.height;
//     ctx.drawImage(img, 0, 0);
//     // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// }

// // function downloadImg(elLink) {
// //     var imgContent = canvas.toDataURL('image/jpeg');
// //     elLink.href = imgContent
// // }

// // The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
// function onImgInput(ev) {
//     loadImageFromInput(ev, renderCanvas)
// }

// function loadImageFromInput(ev, onImageReady) {
//     // document.querySelector('.share-container').innerHTML = ''
//     var reader = new FileReader();

//     reader.onload = function(event) {
//         var img = new Image();
//         img.onload = onImageReady.bind(null, img)
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(ev.target.files[0]);
// }


// function renderImg() {
//     let img = new Image();
//     img.onload = function() {
//         gImgWidth = img.width;
//         gImgHeight = img.height;
//         gCanvas.width = gImgWidth;
//         gCanvas.height = gImgHeight;
//         gCtx.drawImage(img, 0, 0);
//         renderImgTxts();
//     }
//     img.src = getCurrImg().url;
// }



function test(url) {
    document.onload = function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var image = new Image(60, 45); // Using optional size for image
        image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

        image.onload = function() {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;

            // Will draw the image as 300x227, ignoring the custom size of 60x45
            // given in the constructor
            ctx.drawImage(image, 0, 0);

        }; // Draw when image has loaded

        // Load an image of intrinsic size 300x227 in CSS pixels
        // Use the intrinsic size of image in CSS pixels for the canvas element
        // let elContainerCanvas = document.querySelector('.canvas-container');


        // To use the custom size we'll have to specify the scale parameters 
        // using the element's width and height properties - lets draw one 
        // on top in the corner:
        // ctx.drawImage(this, 0, 0, this.width, this.height);
    }
}
// const gCanvas = document.getElementById('myCanvas');
// const gCtx = canvas.getContext('2d');
// init()

// function init(imgURL) {
//     gCanvas = document.getElementById('myCanvas');
//     console.log(imgURL);

//     gCtx = canvas.getContext('2d');
//     renderImg(imgURL)
// }

// function renderImg(imgURL) {
//     let img = new Image();
//     img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
//     drawImage(img)
//     console.log(img);

// }

// function drawImage(img) {
//     console.log(img)
//     let elContainerCanvas = document.querySelector('.canvas-container');
//     let gImgWidth = elContainerCanvas.width;
//     let gImgHeight = elContainerCanvas.height;
//     gCanvas.width = gImgWidth;
//     gCanvas.height = gImgHeight
//     gCtx.drawImage(this, 0, 0);
// }