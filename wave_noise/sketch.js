function setup() {
  createCanvas(400,400);
  frameRate(5);
}

var xoff = 0.01;

function draw() {
  background(51, 90);
  stroke(255);
  noFill();
  
  beginShape();
  for(var x = 0; x < width; x++){
    var y = map(noise(xoff),0,1,0,height);
    vertex(x,y);
    xoff += 0.01;
    
  }
  endShape();
  

}