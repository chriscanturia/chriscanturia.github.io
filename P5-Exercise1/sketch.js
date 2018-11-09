
var rad = 15; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 5.8; // Speed of the shape
var yspeed = 7.2; // Speed of the shape

var xdirection = 6; // Left or Right
var ydirection = 9; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(150,69,20);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(random(255))
  ellipse(xpos, ypos, rad, rad);

  stroke(100, 200, xpos, ypos);
	strokeWeight(5);
	line(100, 100, xpos, ypos);
}
