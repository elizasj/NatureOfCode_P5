var xoff = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  // var x = (random(0, width);
  
  var x = noise(xoff) * width // what goes in here? units of time, on the x axis...
  // && noise() always gives you a numebr bertween 0 and 1
  // to get movement, must increment through time - use xoff (offset)
  
  xoff += 0.05; 
  
  fill(255);
  ellipse(x, 180, 48, 48);
  
}

// can assign perlin noise to acc, color, size, pos...