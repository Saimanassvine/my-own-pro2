var skating; 
var tornado;
var tree;
var background; 
var gameOver;
var car;
var cash;

//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload(){

    skating = loadAnimation("skating.png");
    tornado= loadAnimation("tornado.png");
    tree = loadAnimation("tree.jpeg");
    background = loadImage("background.jpg");
    endImg =loadAnimation("gameOver.png");
}

function setup() {
    createCanvas(1200,600);

    background=createSprite(1200,600);
    background.addImage(background);
    background.velocityX = -4;

    skating=createSprite(70,150);
    skating.addAnimation(skating);
    skating.scale=0,07;

    tree=new Group();
    car=new  Group();

    if(treeGroup.isTouching(skating)) {
        gameState=END;
    } else if(carGroup.isTouching(skating)) {
        gameState=END;
    }
}

function draw() {
 
if (gameState===PLAY);{
    background(0);
  
    if(keyDown("space")&& skating.y >= 100) {
        skating .velocityY = 12;
       
    }
}

treeGroup();
carGroup();

if(treeGroup.isTouching(skating)) {
    gameState=END;
} else if(carGroup.isTouching(skating)) {
    gameState=END;
}

    drawSprites();
} 
