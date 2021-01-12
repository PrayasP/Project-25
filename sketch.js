//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables
var pBall;
var ground;
var dustBin;
//var paperIMG;

function preload()
{
	//paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 700);

    //Creating the engine
	engine = Engine.create();
	//The world is inside the engine
	world = engine.world;

	//Creating the Bodies
	pBall = new Paper(100,100,22);

	ground = new Ground(width/2,675,width,22);

	dustBin = new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  
  //Display the objects
  pBall.display();
  ground.display();
  dustBin.display();

  
  //Calling function keyPressed
  keyPressed();

  drawSprites();
 
}


function keyPressed(){
	//Crumpled paper jump and fall when the up arrow key is pressed
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(pBall.body,pBall.body.position,{x:70,y:-85});
	}
}



