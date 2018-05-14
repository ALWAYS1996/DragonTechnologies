canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
var img = new Image()
var num = 0

window.requestAnimationFrame = (function () {
    return function (callback) {
        window.setTimeout(callback, 500);
    }
}())

function paint(ctx){
	img.src = 'img/logo'+ (num++ % 4) + '.png'
	canvas.width = 930;
    canvas.height = 436;
	ctx.drawImage(img, 0, 0)
}

function run(){
    window.requestAnimationFrame(run)
    paint(ctx)
}

function init(){
    run()
}

window.addEventListener('load',init, false)