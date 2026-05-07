let carPosX;
let carColor;

const carColors = [
  "#FF8424",
  "#03A9F4",
  "#C62E65",
  "#646536",
];

let carSpeed = 2.8;

// this stores building heights so they don't change every frame
let buildingHeights = [];

function setup() {
createCanvas(600, 600); //canvas is set to resolution 600 by 600 pixels

carPosX = width + 300;
carColor = carColors[0];

for (let i = 0; i < width + 100; i += 80) {
buildingHeights.push(random(120, 260)); // different heights each building
}
}

function draw() {
background(135, 206, 235);

drawBuildings();
drawRoad();

drawCar();
moveCar();
}

//          BUILDINGS

function drawBuildings() {
noStroke();

let index = 0;

for (let i = 0; i < width + 100; i += 80) {

let h = buildingHeights[index]; // use stored height instead of random each frame

fill(90, 120, 160);
rect(i, 400 - h, 60, h);

//           WINDOWS
fill(255, 240, 180, 180);

for (let y = 400 - h + 15; y < 400; y += 30) {
rect(i + 10, y, 10, 10);
rect(i + 30, y, 10, 10);
}

index++;
}
}

//           ROAD

function drawRoad() {
noStroke();
fill(80);
rect(0, 400, width, 200);

fill(255, 204, 0);

for (let i = 0; i < width; i += 100) {
rect(i + 25, 490, 50, 10);
}
}

//          CAR MOVEMENT

function moveCar() {
carPosX -= carSpeed;

let carWidth = 400 * 1.1;

if (carPosX < -carWidth - 100) {
carPosX = width + 200;
carColor = random(carColors);
}
}

//          CAR

function drawCar() {
push();

translate(carPosX, 0);
scale(1.1);

let carX = 100;
let carY = 250;

stroke(0);
strokeWeight(2);

fill(carColor);
rect(carX, carY + 80, 400, 120, 10);

fill(180, 210, 255);

quad(
carX + 100, carY + 80,
carX + 250, carY + 80,
carX + 250, carY,
carX + 170, carY
);

quad(
carX + 250, carY + 80,
carX + 400, carY + 80,
carX + 380, carY,
carX + 250, carY
);

line(carX + 250, carY, carX + 250, carY + 200);

fill(20, 50, 100);
rect(carX + 210, carY + 90, 30, 8);
rect(carX + 350, carY + 90, 30, 8);

fill(220, 240, 255);
rect(carX, carY + 90, 30, 20);

fill(255, 0, 0);
rect(carX + 390, carY + 90, 10, 25);

drawWheel(carX + 80, carY + 200);
drawWheel(carX + 320, carY + 200);

pop();
}

//         WHEELS

function drawWheel(x, y) {
push();

translate(x, y);

fill(45);
stroke(0);
strokeWeight(3);
ellipse(0, 0, 110, 110);

fill(150);
ellipse(0, 0, 80, 80);

fill(80);
ellipse(0, 0, 15, 15);

pop();
}
