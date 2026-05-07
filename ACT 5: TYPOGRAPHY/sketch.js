let myText = "";
let xPos;
let isReady = false;

let myMainFont;

function preload() {
// loading the custom font for the title
myMainFont = loadFont("Lugoj Demo 400.otf");
}

function setup() {
createCanvas(600, 600); // canvas set res to 600 by 600 pixs
// start the text way off the left side
xPos = -600;
}

function draw() {
background(20); // background

if (isReady == false) {

fill(255);//  THIS IS THE TYPING SCREEN
textAlign(LEFT, TOP);
    
// making the instructions bold
textFont("Arial");
textStyle(BOLD);
textSize(24);
text("Type your text.", 30, 30);

// showing what the user is typing in the custom font
textStyle(NORMAL);
textFont(myMainFont);
textSize(50);
text(myText, 30, 80);

// tiny instructions at the bottom
fill(150);
textFont("Arial");
textStyle(BOLD);
textSize(14);
text("Hit 'Enter' when you're done.", 30, 560);
    
} else {
//     THIS IS THE ANIMATION SCREEN 
    
// basic easing: move a percentage of the distance to the center
let center = width / 2;
let distance = center - xPos;
xPos = xPos + (distance * 0.08); 
  
textAlign(CENTER, CENTER);
textFont(myMainFont);
textStyle(NORMAL);
textSize(60);
fill(255); 
    
// draw the user's text at the moving x position
text(myText, xPos, height / 2);
}
}

function keyPressed() {
// if they hit enter, start the animation
if (keyCode === ENTER) {
isReady = true;
} 
// let them delete letters
else if (keyCode === BACKSPACE) {
myText = myText.slice(0, -1);
} 
// i added this because i encountered a problem where, when you click SHIFT or CAPS it will type it
else if (isReady == false) {
if (key.length === 1) {
myText = myText + key;
  }
 }
}
