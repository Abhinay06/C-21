var fixedRect, movingRect;
var gameobj1,gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobj1 = createSprite(200, 50, 50, 80);
  gameobj1.shapeColor = "red";

  gameobj2 = createSprite(220, 100, 50, 80);
  gameobj2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  
  gameobj1.x=World.mouseX;
  gameobj1.y=World.mouseY;

  if(isTouching(gameobj1,gameobj2)){
     gameobj1.shapeColor="blue";
     gameobj2.shapeColor="blue";

  }
  else{
    gameobj1.shapeColor="red";
    gameobj2.shapeColor="red";  
  }
  
  BounceOff(movingRect,fixedRect);
  drawSprites();
}

