var myDots = [];
var totalPoints = 800; // how many lines are moving at once
var wavyScale = 0.01; // how zoomed in the wavy pattern is

function setup() {
createCanvas(600, 600);
background(20); // starting with a simple dark background
}

function draw() {
// we dont use background() here so the lines leave a trail
  
for (var i = 0; i < totalPoints; i++) {
    
// if the list isnt full yet add a new point to the screen
if (myDots.length < totalPoints) {
myDots.push(createVector(random(width), random(height)));
}
    
var p = myDots[i];

//         MOUSE STUFF 
// check how close the point is to the cursor
var d = dist(p.x, p.y, mouseX, mouseY);
var myAngle;

if (d < 100) {
// if the mouse is close make the points follow the cursor
myAngle = atan2(mouseY - p.y, mouseX - p.x);
} else {
// otherwize follow the wavy noise pattern
myAngle = noise(p.x * wavyScale, p.y * wavyScale) * TWO_PI * 4;
}

//    COLOR STUFF
// mostly grey lines but 5% are bright white
if (random(1) > 0.95) {
stroke(255, 100); 
} else {
stroke(150, 40); // semi transparent grey
}

//    DRAWING    
strokeWeight(1.5);
    
// draw a short line based on the direction its moving
line(p.x, p.y, p.x + cos(myAngle) * 5, p.y + sin(myAngle) * 5);

// move the point forward
p.x = p.x + cos(myAngle) * 2;
p.y = p.y + sin(myAngle) * 2;

// if it goes off the screen, put it back in a random spot
if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
p.x = random(width);
p.y = random(height);
}
}
}

function keyPressed() {
  background(20);
}
