
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, paper1,dustbin1;

function prelaod(){
	paperImg = loadImage("sprites/paper.png");
	dustbinImg =loadImage("sprites/dustbingreen.png");
}





function setup() {
	createCanvas(800, 700);
	ground1 = new ground (0,770,800,30);
	paper1 = new paper (30,760);
	dustbin1 = new dustbin(450,700,80,80);
	
	body=Body.create();
	world = body.world;

	engine = Engine.create();
	



	world = engine.world;

	Engine.run(engine);
    Body.run(body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();

  if (paper1.isTouching(dustbin1)){
	  paper1.visible = false;
  }
  
  drawSprites();
  ground1.display();
  paper1.display();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
	}



