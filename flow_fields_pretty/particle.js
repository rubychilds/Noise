function Particle(){

  this.pos = createVector(random(width),random(height));
  this.vel = createVector(0,0);;
  this.acc = createVector(0,0);
  this.maxspeed = 3;

  this.prevPos = this.pos.copy();

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.follow = function(flowvectors){
    var x = floor(this.pos.x/scl);
    var y = floor(this.pos.y/scl);
    var index = x+y*cols;
    var force = flowvectors[index];
    this.applyForce(force);
  }

  this.show = function(){
    strokeWeight(1);
    stroke(0,5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePos();
  }

  this.updatePos = function(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePos();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePos();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePos();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePos();
    }
  }
}
