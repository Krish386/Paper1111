
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

        ground=new Ground(600,600,1200,20)
        dustbin=new Dustbin(580,580,100,20)
    paper=new Paper(20,20,10,10)
    dustbin1=new Dustbin(520,580,20,50)
    dustbin2=new Dustbin(650,580,20,50)

		
    


	//Create the Bodies Here.


	Engine.run(engine);
  
}





function draw() {
 

  background("black")
  Engine.update(engine)
  ground.display();
  dustbin.display();
  paper.display();
dustbin1.display();
dustbin2.display();


 
}

function keyPressed()
{
  if(keyCode === UP_Arrow)
  (paper.body,paper.body.position,{x:85,y:85});
  }
  



