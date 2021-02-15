
var a,b;


function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50); 
  b = createSprite(200,100,30,20);
  
  a.shapeColor = "purple";
  b.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  
  a.x = World.mouseX;
  a.y = World.mouseY;
  
if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 + b.width/2 && a.y - b.y < a.height/2 + b.height/2 && a.y + b.y < a.height/2 + b.height/2){
  a.shapeColor = "orange";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "purple";
  b.shapeColor = "green";
}


  drawSprites();
}