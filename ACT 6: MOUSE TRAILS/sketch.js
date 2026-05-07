// size for the circle that changes based on speed
let mySize = 10;
// color variable for the rainbow effect
let myHue = 0;
// a list (array) to keep track of the circles for the trail
let trailList = [];

function setup() {
createCanvas(600, 600);
// using HSL because it is easier to cycle through rainbow colors
colorMode(HSL);
background(0);
}

function draw() {

// MAKING THE FADE
// instead of background(), we draw a see-through rectangle 
// this makes the old circles look like they are disappearing
noStroke();
fill(0, 0, 0, 0.1); 
rect(0, 0, width, height);

// FIGURING OUT THE SIZE
// dist() calculates the distance between where the mouse is now 
// and where it was in the last frame (speed)
mySize = dist(mouseX, mouseY, pmouseX, pmouseY) * 2;
mySize = constrain(mySize, 5, 70); // stops it from being too tiny or too huge

// THE RAINBOW EFFECT
// keep adding to the hue to change the color
myHue = myHue + 2;
if (myHue > 360) {
    myHue = 0;
}

// SAVING THE MOUSE POSITION
// we save the current mouse stuff into a little packet (object)
let currentCircle = {
x: mouseX,
y: mouseY,
s: mySize,
h: myHue
};

// put that packet into our big list
trailList.push(currentCircle);

// DRAWING EVERYTHING IN THE LIST
// go through the list and draw all the circles we saved
for (let i = 0; i < trailList.length; i++) {
let circleData = trailList[i];
    
fill(circleData.h, 100, 50);
noStroke();
ellipse(circleData.x, circleData.y, circleData.s);
    
// make the circles in the list get smaller every frame
circleData.s = circleData.s * 0.9;
}

// CLEANING UP
// if we have more than 50 circles, remove the oldest one 
// so the computer doesn't lag
if (trailList.length > 50) {
trailList.shift();
 }
}
