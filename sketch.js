
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,570,width,20);
paper=new Paper(200,400,20);
dustbin1=new Dustbin(1100,550,230,20);
dustbin2=new Dustbin(980,490,20,100);
dustbin3=new Dustbin(1220,490,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-95})
	}
}


