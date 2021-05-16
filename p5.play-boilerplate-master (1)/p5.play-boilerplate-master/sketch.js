const Bodies= Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine

var engine , world , box , ground

function setup() {
  createCanvas(800,400);
  

  engine=Engine.create()
  world=engine.world
  var options={
    restitution:1
  }
  box=Bodies.rectangle(200,200,50,50,options)

  World.add(world,box)
var options={
  isStatic:true
}
  ground=Bodies.rectangle(400,350,800,10,options)
  World.add(world,ground)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)

  rectMode(CENTER)
  rect(box.position.x,box.position.y, 50,50)
  rect(ground.position.x,ground.position.y, 800,10)
  
  drawSprites();
}