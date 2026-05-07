// Rain droplet effect

let img;
let buffer;

function preload() {
  img = loadImage("stonks.png"); // image set that is being drawn with triangle droplets
}

function setup() {
  createCanvas(600, 600); //canvas is set to resolution 600 by 600 pixels

  buffer = createGraphics(600, 600);
  buffer.image(img, 0, 0, width, height);

  background(255);
}

function draw() {

// this is what makes triangle droplets "stay" (because i had an issue where the droplets are not permanent)

if (buffer) {

for (let i = 0; i < 20; i++) {

let x = random(width);
let y = random(height);

let c = buffer.get(x, y);

fill(c[0], c[1], c[2], 120);
      
let size = random(8, 40); // draw droplet varying in size

triangle(
x, y,
x - size / 2, y + size,
x + size / 2, y + size
);
}
}
}
