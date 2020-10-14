var fixedRect;
var movingRect;
var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(250,200,50,50)
  fixedRect.shapeColor = "blue";
  movingRect=createSprite(400,200,50,80);
  movingRect.shapeColor = "blue";
  rect1=createSprite(300,0,50,50);
  rect1.shapeColor = "green";
  rect1.velocityY=4;
  rect2=createSprite(300,400,50,20);
  rect2.shapeColor = "green";
  rect2.velocityY=-4;
}

function draw() {
  background (0)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "aqua";
  fixedRect.shapeColor = "aqua";
 }
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
 }  

 bounceOff(rect1,rect2);
  drawSprites();
}

