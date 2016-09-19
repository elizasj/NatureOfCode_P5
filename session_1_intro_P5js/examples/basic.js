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
  this.acc = createVector(0, 0.1);
  
  this.update = function() {
    // velocity
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    if (this.pos.x >= width || this.pos.y >= height){
      console.log("REACHED CANVAS BORDER");
      this.acc = createVector(0, -0.1);
    }
  }

  this.display = function() {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }
}
