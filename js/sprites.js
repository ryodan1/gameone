const gravity = 0.2

class Sprite{
    constructor({position, velocity, dimensions}){
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

    }
    draw(){
        can.fillStyle = "white"
        can.fillRect(this.position.x, this.position.y, this.height, this.width)
    }
    update(){
       
        if(this.position.y+this.height > canvas.height){
            this.velocity.y = canvas.height - (this.position.y+this.height)
        }else {
            this.velocity.y += gravity
        }
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.draw()
    }
}
const player = new Sprite({
    position: {
        x: 500,
        y: 20
    },
    velocity: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 50,
        height: 200
    }
})