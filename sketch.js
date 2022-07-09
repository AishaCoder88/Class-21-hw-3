
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	ground = new Ground(20,500,2000,20);
    

	engine = Engine.create();
	world = engine.world;
	leftSide = new Ground(850,500,20,250);
	rightSide = new Ground(660,500,20,250);
	
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
    ball = Bodies.circle(500,10,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
   ellipseMode (RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 ellipse (ball.position.x , ball.position.y , 20);

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

