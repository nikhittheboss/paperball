
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,495,150,15);
	pball1 = new Ball(200,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  groundObject.display();
  dustbinObj.display();
  pball1.display();
  

}

function keyPressed(){

	if (keyCode === 38) {

		Matter.Body.applyForce(pball1.body,pball1.body.position,{x:70,y:-70});
	  }
}
