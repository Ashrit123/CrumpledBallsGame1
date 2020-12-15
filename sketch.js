const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject	
var world;
var dustbin1,dustbin2,dustbin3


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1= new Dustbin(1100,650,150,20);
	dustbin2= new Dustbin(1020,600,20,100);
	dustbin3= new Dustbin(1180,600,20,100);
	paperObject= new PaperBall(200,450,40);
	groundObject= new Ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}



