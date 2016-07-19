void setup(){
  size(600,600, P3D);
  background(0);
  stroke(255);
  noFill();
  rows = h/inc;
  cols = w/inc;
  terrain = new float[width][height];
}


int inc = 15;
int rows, cols;
int w = 1200;
int h = 900;
float xoff = 0.01;

float[][] terrain;
float flying = 0.0;


void draw(){
  background(0);
  
  flying -= 0.05;
  float yoff = flying;
  for(int y = 0; y < rows; y++){
    float xoff =0;
    for(int x = 0; x < cols; x++){
      terrain[x][y] = map(noise(xoff,yoff), 0, 1, -100, 100); 
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  
  translate(width/2, height/2);
  rotateX(PI/3);
  translate(-w/2, -h/2);
  
  for(int y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(int x = 0; x < cols; x++){
      vertex(inc*x, inc*y, terrain[x][y]);
      vertex(inc*x, inc*(y+1), terrain[x][y+1]);
    }
    endShape();
  }
}