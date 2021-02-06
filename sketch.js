var bgimg,background
var boy,boyimg
var ground,groundimg,raceimg,race
function preload(){
  bgimg=loadImage("bg.png")
boyimg=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png")
groundimg=loadImage("ground2.png")
raceimg=loadImage("race.png")
obstacle1=loadImage("h1.png");
obstacle2=loadImage("h2.png")
obstacle3=loadImage("h3.png")
obstacle4=loadImage("h4.png");

coinimg=loadImage("coin.png")
}

function setup() {
  createCanvas(600,300);
 background=createSprite(300, 130, 600, 200);
 boy=createSprite(50, 250, 50, 50);

 background.addImage(bgimg)
 
 
 background.scale=4
 boy.scale=0.3
 
ground=createSprite(100,300,1000,30)
ground.addImage(groundimg)

race = createSprite(200,360,400,20);
race.addImage(raceimg)
race.velocityX=-6
race.x = race.width /2;
  

boy=createSprite(50, 235, 50, 50);
boy.addAnimation("running",boyimg)
boy.scale=0.33
ground.velocityX=-6

}

function draw() {
  
  
  if(keyDown("space")&& boy.y >= 130) {
   boy.velocityY = -8;

}

boy.velocityY=boy.velocityY+0.8
if(race.x<0){
 race.x=race.width/2

}

boy.collide(ground)
spawnObstacles()
spawnClouds()
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 50 === 0){
    var obstacle = createSprite(600,250,10,40);
    obstacle.velocityX = -6
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.15;
     obstacle.lifetime = 300;
    //obstacle.debug = true
    obstacle.setCollider("rectangle",0,0,200,400)
    //add each obstacle to the group
    // obstaclesGroup.add(obstacle);
  }
 }

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(40,150));
    cloud.addImage(coinimg);
    cloud.scale = 0.7;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
   // cloud.depth = player.depth;
    //player.depth = player.depth + 1;
    
    //add each cloud to the group
   
  }
}
