var player;
var npc;
var playerJump;
var npcJump;
var ground,groundImg;
var playerImg;
var npc,npcImg;
var leftGoal,leftGoalImg;
var rightGoal,rightGoalImg;
var invisGround;
function preload(){
playerImg = loadImage("Player.png")
playerJump = loadImage("Jump.png")
npcImg = loadImage("NPC.png")
leftGoalImg = loadImage("LeftGoal.png")
rightGoalImg = loadImage("RightGoal.png")
groundImg = loadImage("Grass.png")
}

function setup() {
  createCanvas(800,400);
 
  player = createSprite(250, 360)
  player.addImage("main", playerImg)
  player.addImage("jump", playerJump)
  player.scale = 3
  npc = createSprite(550, 360)
  npc.addImage("bot", npcImg)
  npc.scale = 3
  leftGoal = createSprite(50, 310)
  leftGoal.addImage("goal1", leftGoalImg)
  leftGoal.scale = 0.02
  ground = createSprite(400,520)
  ground.addImage("grass", groundImg)
  ground.scale = 1.5
  invisGround = createSprite(400,550,800,10)
  invisGround.visible = false;


}

function draw() {
  background(255,255,255); 
  text(mouseX+","+mouseY,mouseX,mouseY) 
  if(keyIsDown(LEFT_ARROW)){
    player.velocity.x = -5
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.velocity.x = 5
  }
  if(keyIsDown(UP_ARROW)){
    player.velocity.y = -5
    player.changeImage("jump",playerJump)
  }else{
    player.changeImage("main", playerImg)
  }
  player.velocity.y += 0.5
 player.collide(ground)
  drawSprites();
  
}
