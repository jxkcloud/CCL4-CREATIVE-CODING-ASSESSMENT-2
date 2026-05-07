let mic;
let waveMove = 0; 

function setup() {
  createCanvas(600, 400);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(15, 15, 25); 

  let vol = mic.getLevel();

  // 1. MY MAIN WAVE (WITH MORE SPIKES)
  noFill();
  strokeWeight(2); // I made the line a bit thinner so the spikes look sharper
  stroke(0, 255, 200); 
  
  beginShape();
  // I changed "x += 20" to "x += 5" so there are way more points to make spikes
  for (let x = 0; x <= width; x += 5) {
    
    let quietSize = 20;
    let loudSize = map(vol, 0, 0.5, 0, 400); // this is the ceiling of the spikes
    
    // This makes the wave look much more jagged and spiky
    let y = height / 2 + (noise(x * 0.05, waveMove) - 0.5) * (quietSize + loudSize);
    
    vertex(x, y);
  }
  endShape();

  //      FLOATING SQUARES
  for (let i = 0; i < 5; i++) {
    let starX = random(width);
    let starY = random(height);
    let starSize = map(vol, 0, 0.3, 1, 8);
    
    fill(255, 255, 255, 150);
    noStroke();
    rect(starX, starY, starSize, starSize);
  }

  //       FLASH EFFECT
  fill(0, 255, 200, vol * 100);
  rect(0, 0, width, height);

  //       EACTIVE LINE
  let floorHeight = map(vol, 0, 0.3, 5, 50);
  fill(0, 150, 255);
  rect(0, height - floorHeight, width, floorHeight);

  // this is to increase wave speed
  waveMove += 0.08;

  fill(255);
  textAlign(CENTER);
  textFont("Arial");
  textStyle(BOLD);
  text("MAKE SOME NOISE", width / 2, 40);
}
