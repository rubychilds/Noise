function setup() {
  createCanvas(400,400);
  background(51);
  stroke(255);
  pixelDensity(1); // needed on mac books
}

var inc = 0.7;

function draw() {
  loadPixels();

  var yoff = 0;
  
  for(var x = 0; x < width; x++){
    var xoff = 0;
    for(var y = 0; y < height; y++){
      var index = (x+y*width) * 4;
      var r = map(noise(xoff, yoff),0,1, 0, 255);
      pixels[index] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}