var ghostRider , ghostRiderImage;
var tower , towerImage;
var balcony , balconyImage , balconyGroup;
var door , doorImage , doorGroup
var invisible , invisibleGroup
var gameState = "play";

function preload(){
  
 towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  balconyImage = loadImage("climber.png");
  ghostRiderImage = loadImage("ghost-standing.png");
  
  doorGroup = new Group();
  balconyGroup = new Group();
  invisibleGroup = new Group();
  
  
  
}

function setup (){
  createCanvas(600,600);
  
    

  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  
    ghostRider = createSprite(200,200,50,50);
  ghostRider.addImage("host",ghostRiderImage);
  ghostRider.scale = 0.4;
  
  ghostRider.debug = true;
  ghostRider.setCollider("circle",0,0,100);
 
  

  
}



function draw(){
  background (0) ;
  if(gameState === "play"){
    
  
  
  ghostRider.velocityY = 0;
   if (tower.y>300){
  tower.y = 50;
  }
  
  if (keyDown("left")){
    ghostRider.velocityX =- 2;
  }
  
   if (keyDown("right")){
   ghostRider.velocityX = 2;
  }
  
   if (keyDown("space")){
    ghostRider.velocityY =  -15;
  }
  
  ghostRider.y = ghostRider.y + 10;
 tower.velocityY = 2;
  

  console.log(gameState);
 

//  ghostRider.depth = door.depth;
  //ghostRider.depth = ghostRider.depth+1;
  

  
  spawnDoor();
  
  if (balconyGroup.isTouching(ghostRider)){
    ghostRider.velocityY = 0;
    
  } 
  
if(balconyGroup.isTouching(ghostRider)||
  ghostRider.y>600){
  ghostRider.destroy();
  gameState = "gameOver"
}
    
    
  
  drawSprites();
}
  
  if(gameState === "gameOver" ){
    
    stroke("orange");
    textSize(25)
    text("Game Over",240,295)
    
  }
  
  
  
}
function spawnDoor(){
  
  if (frameCount%240===0){
    
    
    door = createSprite(200,-50);
    door.addImage(doorImage);
    door.velocityY = 2;
    door.lifetime = 800;
    doorGroup.add(door);
    door.x = Math.round(random(120,400));
    
//    ghostRider.depth = door.depth;
  //ghostRider.depth = ghostRider.depth+1;

    
   
    
    balcony = createSprite(200,10);
    balcony.addImage(balconyImage);
    balcony.velocityY = 2;
    balcony.lifetime = 700;
    balconyGroup.add(balcony);
   balcony.x = door.x; 
     invisible = createSprite(door.x,15,balcony.width,2);
    
    invisible.velocityY = 2;
    invisible.lifetime = 700;
    invisibleGroup.add(invisible)
    ghostRider.collide(invisibleGroup);
    ghostRider.depth = balcony.depth;
    balcony.depth = balcony.depth + 1
    ghostRider.collide(invisible);
    
  }
    
  
  
  
  
}


  


