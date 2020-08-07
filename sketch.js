var car, wall;
var speed, weight;
var de;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90)
  weight = random(400, 1500)
  car = createSprite(50, 10, 100, 350)
  wall = createSprite(200, 650, 400, 600)
  wall.shapeColor("#666666")
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if(wall.x - car.x < wall.width/2 + car.x/2){
    de = (weight*speed*speed*0.5)/22500
    if(de<100){
      car.shapeColor = "green"
    } else if(de>100 && de<180){
      car.shapeColor = "yellow"
    } else if(de>180){
      car.shapeColor = "red"
    }
  }

  drawSprites();
}