var rad = 8;
var Y_AXIS = 2;
var X_AXIS = 1;

function setup() {
  createCanvas(800, 800);
  
  //create new forms
  w = new Walker();
  f = new Follower();
}

function draw() {
  //gradiant settings
  var c1 = color(180, 177, 222);
  var c2 = color(255, 112, 133);
  var gr1 = setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  var gr2 = setGradient(0, 0, width, height, c2, c1, Y_AXIS);

  //animate forms
  w.update();
  w.display();
  f.update();
  f.display();
}

function Walker() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
 
  
  this.update = function() {
    this.acc = createVector(random(-1, 1), random(-1, 1));
    this.acc.mult(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    // keep Walker within boundary of canvas
    if (this.pos.x > width - (rad + 15) || this.pos.x < (rad + 15)) {;
      this.vel.x = this.vel.x * -1
    }
    
     if (this.pos.y > height - (rad + 15) || this.pos.y < (rad + 15)) {
      this.vel.y = this.vel.y * -1
    }
  }

  this.display = function() {
    fill(255, 255, 255, 150);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.pos.x, this.pos.y, rad + 15, rad + 15);
  }
  
}

function Follower() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
 
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    // set path to follow Walker
    var orbit = createVector(w.pos.x, w.pos.y)
    this.acc = p5.Vector.sub(orbit, this.pos);
    this.acc.setMag(0.02);
    
    // keep Follower within boundary of canvas
    if (this.pos.x > width - rad || this.pos.x < rad) {;
      this.vel.x = this.vel.x * -1
    }
    
     if (this.pos.y > height - rad || this.pos.y < rad) {
      this.vel.y = this.vel.y * -1
    }
  }

  this.display = function() {
    fill(250, 233, 45);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.pos.x, this.pos.y, rad, rad);
  }
  
}

// set background color
function setGradient(x, y, w, h, c1, c2, axis) {
  if (axis == Y_AXIS) {  
    for (var i = y; i <= y + h; i++) {
			var inter = map(i, y, y + h, 1, 0);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      smooth();
      line(x, i, y + w, i); 
    } 
  } 

}
