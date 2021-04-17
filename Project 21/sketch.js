var bullet
var wall
var speed
var weight
var thickness
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50,200,50,50)
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet.velocityX = speed
  bullet.shapeColor = "White"
  wall =createSprite(1500,200,thickness,200)
  wall.shapeColor="blue"

}


function draw() {
  background(10,10,10);  
  
  if(hasColided(bullet,wall)){
    bullet.velocityX= 0
    var deformation = 0.5*speed*speed*weight/(thickness*thickness*thickness)
    if(deformation > 10){
      bullet.shapeColor="red"
    }
    if(deformation<10 ){
      bullet.shapeColor="green"
    }
  }
  
  drawSprites();
}

function hasColided(lBullet,lwall) {
  if(lBullet.x+lBullet.width >= lwall.x){
    return true
  }
  else{
    return false
  }
}