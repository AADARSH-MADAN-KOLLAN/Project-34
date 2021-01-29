class Hero{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Matter.Bodies.circle(this.x,this.y,(this.r)/3);
    this.image = loadImage("images/Superhero-01.png");
    Matter.Body.setMass(this.body, this.body.mass*5);
    Matter.World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    translate(pos.x, pos.y);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r,this.r);
  }
}
