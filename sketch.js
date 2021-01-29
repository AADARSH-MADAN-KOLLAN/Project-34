var superman;
var bgIm;
var ground;
var blocks;
var fly;

function preload() {
  bgIm = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2000, 800);

  engine = Matter.Engine.create();
  world = engine.world;

  superman = new Hero(400, height/2, 400);
  ground = new Ground(width, height/2+100);
  fly = new Fly(superman, {x: 400, y: 0});

}

function draw() {
  background(bgIm);

  Matter.Engine.update(engine);

  superman.display();
}
