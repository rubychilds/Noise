function setup() {
  createCanvas(400,400);
}

var xoff = 0;
var yoff = 10000;

function draw() {
  background(51);
  
  var x = map(noise(xoff), 0,1, 0, width);
  xoff += 0.02;
  
  var y = map(noise(yoff), 0,1, 0, height);
  yoff += 0.01;
  
  fill('#ffffff');
  ellipse(x, y, 24,24);
  
  
}