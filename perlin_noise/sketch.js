var xoff = 0; //x offset from 0 on axis

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  //var x = random(0, width);
  var x = noise(xoff) * height;
  xoff += 0.005;
  
  fill(255);
  ellipse(x, 180, 48, 48);
}