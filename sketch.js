var a,b



function setup() {
  createCanvas(800,400);
 a = createSprite(400, 400, 50, 50);
 a.shapeColor="green";
 b = createSprite(200, 200, 80, 85);
 b.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  console.log(a.x-b.x);
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.width/2+b.width/2 && b.y-a.y<a.width/2+b.width/2){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}