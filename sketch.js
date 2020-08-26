const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

polygon_img=loadImage("polygon_img.png");

}

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

  // polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  ground = new Ground(200,200,10,10)

  //level two
Box8 = new Box(330,235,30,40);
Box9 = new Box(360,235,30,40);
Box10 = new Box(390,235,30,40);
Box11 = new Box(420,235,30,40);
Box12 = new Box(450,235,30,40);



//level three
Box13 = new Box(360,195,30,40);
Box14 = new Box(390,195,30,40);
Box15 = new Box(420,195,30,40);

//top
Box16 = new Box(390,155,30,40);

fill("red")
stand1=new Ground(300,200);

}

function draw() {

  background(255,255,255);  
  drawSprites();

imageMode(CENTER)

image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  ground.display();
  
  fill("red");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();

fill("green");
  Box13.display();
  Box14.display();
  Box15.display(); 

fill("blue");
  Box16.display();

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
SlingShot.fly();
  gameState = "launched";
 }
}
