var garden
var cat1, cat4, cat,Cat
var mouse1, mouse4, mouse
function preload() {
    //load the images here
    cat1 = loadImage("images/cat1.png")
    cat4 = loadAnimation("images/cat4.png")
    cat = loadAnimation("images/cat2.png","images/cat3.png")

    mouse1 = loadImage("images/mouse1.png")
    mouse4 = loadAnimation("images/mouse4.png")
    mouse = loadAnimation("images/mouse2.png","images/mouse3.png")
    garden = loadImage("images/garden.png");

    }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Cat = createSprite(800,600)
    Cat.addImage(cat1)
    Cat.scale = 0.2
    Mouse = createSprite(200,600)
    Mouse.addImage(mouse1)
    Mouse.scale = 0.2
    Cat.addAnimation("images",cat)
    Mouse.addAnimation("image",mouse)
    Cat.addAnimation("im",cat4)
    Mouse.addAnimation("i",mouse4)
    

}

function draw() {

    background(garden);
    if(Cat.x - Mouse.x <(Cat.width - Mouse.width)/2){
        Cat.velocityX = 0
        Cat.x = 350
        Cat.scale = 0.2
 
        Cat.changeAnimation("im",cat4)
        Mouse.changeAnimation("i",mouse4)
 
 
     }
    //Write condition here to evalute if tom and jerry collide
   
    
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    Cat.velocityX = -3
    Cat.changeAnimation("images",cat)
    Mouse.changeAnimation("image",cat)
}
}




