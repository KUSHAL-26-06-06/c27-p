var ground;
var rope,bob;;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
   rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
   rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
   rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
   rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObject1.dispaly();
bobObject2.dispaly();
bobObject3.dispaly();
bobObject4.dispaly();
bobObject5.dispaly();

if(keyPressed(UP_ARROW)){
	bobObject1.velocityX=
}

  drawSprites();
 
}



