var fixedRect, movingRect;
var car,wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(400,200,10,15);
  car.velocityX=2

  wall=createSprite(700,200,10,100);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  collision(movingRect,fixedRect);
  collision(car,wall);
  drawSprites();
}