var spaceCraft1
var spaceCraft2
var spaceCraft3
var spaceCraft4
var spaceBg
var iss
var ISS , spacecraft, hasDocked = false;


function preload(){

  spaceBg = loadImage("spacebg.jpg");
   spacecraft1=loadImage("spacecraft1.png")
    spacecraft2=loadImage("spaceCraft2.png")
 spacecraft3=loadImage("spacecraft3.png")
 spacecraft4=loadImage("spacecraft4.png")
 iss=loadImage("iss.png")

}

function setup(){
   createCanvas(600,350)
  ISS = createSprite(330,130)
  ISS.addImage(iss)
  ISS.scale=0.5
  spacecraft=createSprite(285,240)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale=0.2
}

function draw(){
  background(spaceBg)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-2
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y=spacecraft.y+2
      spacecraft.addImage(spacecraft2)
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.x=spacecraft.x+2
      spacecraft.addImage(spacecraft3)
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x=spacecraft.x-2
      spacecraft.addImage(spacecraft4)
    }
  }

if(spacecraft.y<=(ISS.y+70)&& spacecraft.x<=(ISS.x-10)){
  hasDocked=true
  text("DOCKING SUCCESFULL",200,300)
}
  drawSprites();
}