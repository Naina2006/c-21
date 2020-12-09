var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);

  o1 = createSprite (200,130,50,80);
  o2 = createSprite(200,200,40,60);
  o1.shapeColor = "blue";
  o2.shapeColor = "blue";
  //o1.velocityX = -4;
  //o2.velocityX = 4;
  o1.velocityY = -4;
  o2.velocityY = 4;


  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}


function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 /*if(isTouching(movingRect,o2)){
    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    o2.shapeColor = "green";
  }*/

  bounceOff(o1,o2);
  drawSprites();
}