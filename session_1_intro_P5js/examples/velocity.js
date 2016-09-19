function setup() {
  createCanvas(640, 360);
  w = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker() {
  // pos == the vector
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);

  
  this.update = function() {
    this.acc = createVector(random(-1, 1), random(-1, 1));
    // velocity
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.pos = this.pos.add(this.vel);
  }

  this.display = function() {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}