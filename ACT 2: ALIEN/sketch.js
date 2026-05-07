let isHappy = true; 

function setup() {
createCanvas(600, 600); //canvas is set to resolution 600 by 600 pixels
}

function draw() {
background(10, 10, 40);

// STARS
fill(255);
noStroke();
ellipse(50, 50, 2, 2);
ellipse(550, 100, 3, 3);
ellipse(100, 500, 2, 2);
ellipse(500, 550, 3, 3);
ellipse(300, 50, 2, 2);
ellipse(50, 250, 2, 2);

//         PLANETS
  
// Saturn like Planet
push();
noFill();
stroke(200, 180, 150);
strokeWeight(4);
arc(500, 120, 100, 30, PI, TWO_PI); // Back ring
noStroke();
fill(139, 121, 94);
ellipse(500, 120, 60, 60); // Planet
noFill();
stroke(200, 180, 150);
strokeWeight(4);
arc(500, 120, 100, 30, 0, PI); // Front ring
pop();

// Big Glowing Red Planet
fill(255, 69, 0, 150); //
ellipse(100, 100, 85, 85);
fill(180, 40, 0); //
ellipse(100, 100, 75, 75);

// Large Blue Planet
fill(0, 100, 200);
ellipse(520, 500, 90, 90);
fill(0, 150, 255, 100); // 
ellipse(510, 490, 50, 50);

//              ALIEN
stroke(0);
strokeWeight(3);
  
fill(255, 204, 0);
ellipse(300, 130, 15, 15);

fill(150, 255, 50);
ellipse(300, 320, 50, 70); 
ellipse(275, 315, 15, 35); 
ellipse(325, 315, 15, 35); 

ellipse(285, 350, 18, 30); 
ellipse(315, 350, 18, 30);

//              Head
ellipse(300, 230, 190, 170);

//              Eye Sockets
fill(15, 15, 35); 
ellipse(260, 245, 65, 75); 
ellipse(340, 245, 65, 75);
  
//              Eyes follow mouse
push(); 
translate(map(mouseX, 0, width, -20, 20), map(mouseY, 0, height, -20, 20));
fill(255);
noStroke();
ellipse(250, 230, 15, 15);
ellipse(330, 230, 15, 15);
pop(); 

//              Click for Happy/Sad face
stroke(0);
noFill();
if (isHappy) {
arc(300, 280, 40, 20, 0.2, PI - 0.2); // Happy
} else {
arc(300, 300, 40, 20, PI + 0.2, TWO_PI - 0.2); // Sad
}
  
// Glass Dome
fill(200, 240, 255, 120);
stroke(0);
arc(300, 360, 320, 450, PI, TWO_PI);

// Spaceship Base
fill(180);
ellipse(300, 360, 500, 110);
fill(140);
ellipse(300, 390, 300, 40);

// Lights
fill(255, 255, 0);
ellipse(150, 365, 20, 10);
ellipse(300, 400, 20, 10);
ellipse(450, 365, 20, 10);
}

function mousePressed() {
isHappy = !isHappy; 
}
