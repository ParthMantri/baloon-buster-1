var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var background_m = new Audio('sound.mp3');
background_m.play();




function preload()
{
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}


function setup() 
{
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,2,2);
  scene.addImage(backgroundImage);
  scene.scale = 2
  
  // creating bow to shoot arrow
  bow = createSprite(380,0,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.75;
  
  // creating gobal arrow and ballons
  ga = createSprite(100, 100, 1,1);
  red_Balloon = createSprite(0, 0, 1,1);
  green_Balloon = createSprite(0, 0, 1,1);
  pink_Balloon = createSprite(0, 0,1,1);
  blue_Balloon = createSprite(0, 0, 1,1);

}

arrow = createSprite(0,0,1,1);
arrow.addImage(arrowImage);
arrow.x = 360;   
arrow.scale = 0.3;
ga.lifetime = 100;
ga = arrow

function draw()
 {
  background(0);
  if(ga.x == 360){ ga.y=bow.y;}

  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0)
  {
    scene.x = scene.width/2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
  //release arrow when space key is pressed
  if ((frameCount % 150 == 0 || frameCount == 10) && ga.x != 360)
  {
    createArrow();
  } 
 
 if (keyDown(" "))
 {
  ga.velocityX = -4;
  }
  

  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) 
  {
    if (select_balloon == 1) { redBalloon();}
    if (select_balloon == 2) { greenBalloon();}
    if (select_balloon == 3) { blueBalloon();}
    if (select_balloon == 4) { pinkBalloon();}
  }
  
  if (ga.isTouching(red_Balloon))
   { red_Balloon.destroy();
    var pop = new Audio('pop.mp3');
    pop.play()
  }
  if (ga.isTouching(green_Balloon))
   { green_Balloon.destroy()
    var pop = new Audio('pop.mp3');
    pop.play()
  }
  if (ga.isTouching(blue_Balloon))
  { blue_Balloon.destroy()
    var pop = new Audio('pop.mp3');
    pop.play()
  }
  if (ga.isTouching(pink_Balloon))
  { 
    pink_Balloon.destroy()
    var pop = new Audio('pop.mp3');
    pop.play()
  }
 
  if (keyDown(" ") && arrow.x==360){
  ga.y = bow.y;
  var woosh = new Audio('woosh.mp3');
  woosh.play()  
  }
  drawSprites();
}

// Creating  arrows 
function createArrow() 
{
  arrow = createSprite(0,0,1,1);
  //if(arrow.x != 360){
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y=bow.y;
    arrow.scale = 0.3;
    ga.lifetime = 100;
    ga = arrow
  //}
}

// Creating  ballons 

function redBalloon() 
{
  rb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rb.addImage(red_balloonImage);
  rb.velocityX = 3;
  rb.lifetime = 150;
  rb.scale = 0.075;
  red_Balloon = rb;
}

function blueBalloon() 
{
  bb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bb.addImage(blue_balloonImage);
  bb.velocityX = 3;
  bb.lifetime = 150;
  bb.scale = 0.075;
  blue_Balloon = bb;
}

function greenBalloon() {
  gb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  gb.addImage(green_balloonImage);
  gb.velocityX = 3;
  gb.lifetime = 150;
  gb.scale =0.075;
  green_Balloon = gb
}

function pinkBalloon() {
  pb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pb.addImage(pink_balloonImage);
  pb.velocityX = 3;
  pb.lifetime = 150;
  pb.scale = 1;
  pink_Balloon = pb
}


function destroy(){

}
