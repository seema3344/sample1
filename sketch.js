//declaring variables
var bgImg;
var heart,heartImg;
var police,policeImg;
var bullet,bulletImg;
var zombie,zombieImg1,zombieImg2,zombieImg4;
var bgsound, gunshoot;
var zombieGroup,bulletGroup;  
var score;


//loading Images to the game
function preload() {
  bgImg = loadImage("download.png");
  heartImg = loadImage("image.webp");
  policeImg = loadImage("police.png");
  zombieImg1 = loadImage("zombie1.png");
  zombieImg2 = loadImage("zombie2.png");
  zombieImg4 = loadImage("zombie4.png");
  bulletImg = loadImage("bullet.png");
  gunshoot = loadSound("gun_shoot_msg_tone.mp3");
  bgsound = loadSound("bass.mp3");
}
//creating sprites
function setup() {
  createCanvas(1536,720);


bg = createSprite(768,360);
bg.addImage(bgImg);

  

  police = createSprite(200,329,0.1,0.1)
  police.addImage(policeImg);
  police.scale = 0.5;

  heart = createSprite(200,329,0.1,0.1)
  heart.addImage(heartImg);
  heart.scale = 0.02;

  heart1 = createSprite(200,100);
  heart1.addImage(heartImg);
  heart1.scale = 0.02;

  heart = createSprite(200,600);
heart.addImage(heartImg);
heart.scale = 0.02;

//creating function group
  zombieGroup = new Group();
  bulletGroup = new Group();
  
  score = 0;

}


//creating background,function,score
function draw() {
background("yellow");

textSize(30);
text("Score: "+ score, 768,360);

if(zombieGroup.isTouching(bullet)){
  zombieGroup.destroyEach();
  bulletGroup.destroyEach();

  score = score+10;
}


//shoot when the space key is pressed
if(keyDown("space")){
  Bullet();

}
police.y = World.mouseY;
police.x = World.mouseX;
//calling Zombie function ;
Zombie();
  drawSprites();
}  
//creating function for Zombies
  function Zombie() {
       if(frameCount %60 ===0){
    zombie = createSprite(1536,313,10,10);
    zombie.velocityX = -6;
    zombie.y = Math.round(random(10,656))

    var rand = Math.round(random(1,3));{
      switch (rand) {
        case 1:zombie.addImage(zombieImg1);
          break;
        case 2:zombie.addImage(zombieImg2);
          break;     
        case 3:zombie.addImage(zombieImg4);
          break;   
        default:break;
      }
    }
     //assign scale
    zombie.scale = 0.5;

   //add each zombie to the group
    zombieGroup.add(zombie);

  }

  } 
  //creating function for Bullet
  function Bullet() {
bullet = createSprite(272,0);
//assign velocity to the bullet
bullet.velocityX = 20;
//adding imageto bullet
bullet.addImage(bulletImg);
//assign scale
bullet.scale = 0.1;
/*attaching bullet's y position too the police y position 
& 
adding depth to bullet*/
bullet.y = police.y ;
bullet.x = police.x ;
police.depth = bullet.depth+1;
//attaching bullet to bulletGroup 
bulletGroup.add(bullet);
}
