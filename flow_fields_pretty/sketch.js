
var flowfield = [];
var inc = 0.1;
var scl = 10;
var rows; var cols;
var fr;
var zoff = 0;
var particles = [];
var flowfield;


function setup() {
  createCanvas(400,400);
  pixelDensity(1);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');

  flowfield = new Array(cols*rows);

  for(var i = 0; i < 500; i++){
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;

  randomSeed(10);
  for(var x = 0; x < cols; x++){
    var xoff = 0;
    for(var y = 0; y < rows; y++){

      var angle = map(noise(xoff, yoff, zoff), 0, 1, 0, TWO_PI*4);
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);

      var index = x+y*cols;
      flowfield[index] = v;

      // push();
      //   translate(x*scl, y*scl);
      //   rotate(v.heading());
      //   strokeWeight(1);
      //   line(0, 0, scl, 0);
      // pop();

      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0003;
  }

  for(var i = 0; i < 500; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html(floor(frameRate()));
}
