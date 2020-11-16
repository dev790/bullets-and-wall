var bullet,wall
var thicknes,speed,weight

function setup() {
  createCanvas(1600,400);
  thicknes=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thicknes,height/2)
  wall.shapeColor=color(80,80,80)
  bullet.velocityX=speed
}

function draw() {
  background(255,255,255);  


if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed/22509
  if(damage>10)
  {
    wall.shapeColor="red"
  }
  if(damage<10){
    wall.shapeColor="green"
  }
  
}


  drawSprites();
}

