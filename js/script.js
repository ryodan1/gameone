const canvas = document.querySelector('canvas')
const can = canvas.getContext('2d');

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight

can.fillRect(0,0, canvasWidth, canvasHeight)