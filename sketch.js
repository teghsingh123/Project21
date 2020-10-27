var thickness,wall;
var bullet,speed,weight;
var damage

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor = "grey"
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "grey";
}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

  if(damage>10){
    wall.shapeColor = "red";
  }

  if(damage<10){
    wall.shapeColor = "green";
  }
}

  drawSprites();
}

