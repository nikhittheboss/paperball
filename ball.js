class Ball {
    constructor(x,y){
        this.image= loadImage("paper.png")
        var options ={
            isstatic:false,
            density : 1.2,
            friction : 0.5,
            restitution : 0.3
          }
          
          this.ball = Bodies.circle(x, y, 23 ,options)
          World.add(world,this.ball)
    }
    display(){
      var angle = this.ball.angle;
    push()
    translate(this.ball.position.x,this.ball.position.y)
  
    //imageMode()
    ellipseMode(RADIANS)
      ellipse(0,0,70,70)
    pop()
    }
    }