let size = 35;

// i tried making a few palettes so it changes colors every run
let palettes = [
  ["#ffb5a7", "#fcd5ce", "#f8edeb", "#bde0fe", "#a2d2ff"], // colr pal 1
  ["#d8f3dc", "#95d5b2", "#52b788", "#2d6a4f", "#1b4332"], // colr pal 2
  ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"], // colr pal 3
];

let currentPalette;

function setup() {

createCanvas(600, 600);

rectMode(CENTER);

noStroke();

currentPalette = random(palettes); // randomly picks one palette

background(random(currentPalette)); // background also comes from the same palette

for (let x = 0; x < width; x += size) { // loops through the canvas like a grid

for (let y = 0; y < height; y += size) {

// chooses random color from chosen palette
fill(random(currentPalette));

// rectangle width and height changes randomly
let w = size * random(1, 5);
let h = size * random(1, 5);

push();

translate(x, y); // moves each rectangle into position

rotate(random([-45, 0, 45])); // i thought rotating it slightly looked nicer

// last number is border roundness i think
rect(0, 0, w, h, 6);

pop();
}
}
}
