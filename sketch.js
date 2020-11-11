const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
function setup() {
	createCanvas(800, 400);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
   Engine.run(engine);
	//Create the Bodies Here.
	
	dustbin2 = new dustbin(670,390,200,50);
	dustbin3 = new dustbin(430,390,200,50);
	dustbin1 = new dustbin(600,500,480,10);
	paper1 = new paper(100,300,10);
	ground1 = Bodies.rectangle(width/2,400,width,10,
 {
	  isStatic : true		
 });
 
 World.add(world,ground1);

}

function draw(){
	background("black")
	rectMode(CENTER);
  
	dustbin1.display();
	paper1.display();
	dustbin2.display();
	dustbin3.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x: 12,
			y: -13
		});
	}
}