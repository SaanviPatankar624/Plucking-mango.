
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, sling;
var boyimg, boy;
var treeimg, tree;
var stoneimg, stone;
var mangoimg, mango1, mango2, mango3, mango4, mango5,
mango6, mango7, mango8, mango9, mango10;

function preload()
{
  boyimg = loadImage("images/boy.png");
  treeimg = loadImage("images/tree.png");
  mangoimg = loadImage("images/mango.png");
  stoneimg = loadImage("images/stone.png");
}

function setup() {
	createCanvas(1280, 570);


	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground(641, 570, 1280, 30);
  
  stone = new Stone(200, 250, 50, 50);

  sling = new Sling(stone.body, {x: 180, y: 160});

	boy = createSprite(250, 480, 40, 40);
  boy.addImage(boyimg);
  boy.scale = 0.12;

  tree = createSprite(960, 290, 500, 500);
  tree.addImage(treeimg);
  tree.scale = 0.45;

  mango1 = createSprite(770, 196, 10, 10);
  mango1.addImage(mangoimg);
  mango1.scale = 0.12;

  mango2 = createSprite(850, 150, 10, 10);
  mango2.addImage(mangoimg);
  mango2.scale = 0.12;

  mango3 = createSprite(840, 250, 10, 10);
  mango3.addImage(mangoimg);
  mango3.scale = 0.12;
 
  mango4 = createSprite(920, 225, 10, 10);
  mango4.addImage(mangoimg);
  mango4.scale = 0.12;
 
  mango5 = createSprite(930, 100, 10, 10);
  mango5.addImage(mangoimg);
  mango5.scale = 0.12;
 
  mango6 = createSprite(990, 175, 10, 10);
  mango6.addImage(mangoimg);
  mango6.scale = 0.12;
 
  mango7 = createSprite(1025, 90, 10, 10);
  mango7.addImage(mangoimg);
  mango7.scale = 0.12;

  mango8 = createSprite(1055, 225, 10, 10);
  mango8.addImage(mangoimg);
  mango8.scale = 0.12;
  
  mango9 = createSprite(1100, 160, 10, 10);
  mango9.addImage(mangoimg);
  mango9.scale = 0.12;
 
  mango10 = createSprite(1140, 225, 10, 10);
  mango10.addImage(mangoimg);
  mango10.scale = 0.12;
  
  attach = new Sling(stone.body, {x:180, y:160})

}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  

  ground.display();
  boy.display();
  stone.display();
  sling.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

 
  
  drawSprites();
 
}

function detectcollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<-lmango.r + lstone.r)
  {
    Matter.Body.setStatic(lmango.body, false);
  }

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  stone.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x: 180, y: 260})
    attach.launch(stone.body)
  }
}


