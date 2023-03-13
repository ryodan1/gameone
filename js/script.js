const canvas = document.querySelector('canvas')
const can = canvas.getContext('2d');

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight



function animation(){
    window.requestAnimationFrame(animation);
    can.fillRect(0,0, canvasWidth, canvasHeight)
    let delta = (performance.now() - prevTime) / 1000
    let fps = 1 / delta
    prevTime = performance.now()
}