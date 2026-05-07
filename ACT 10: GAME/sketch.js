let lanes = 4;
let laneWidth;

let notes = [];

let hitLineY = 800;

let score = 0;
let combo = 0;

let gameState = "menu";

// timing stuff (still kind of experimenting with this)
let bpm = 110;
let songLengthBeats = 44;

let songStartTime = 0;

let beatIndex = 0;

// this is important for stopping notes before audio feels off
let spawnOffset = 1200;
let songDurationMs = 0;
let stopSpawning = false;
let songFinished = false;

let synths = [];

function setup() {
  createCanvas(600, 1000); //canvas is set to resolution 600 by 1000 pixels

  laneWidth = width / lanes;
  textAlign(CENTER, CENTER);

  // just setting up 4 sound channels, not 100% sure if this is the best way but it works for now
  for (let i = 0; i < lanes; i++) {
    let osc = new p5.Oscillator("sine");
    osc.start();
    osc.amp(0);
    synths.push(osc);
  }

  generateChart();
}

function draw() {
  background(10);

  if (gameState === "menu") {
    drawMenu();
  } 
  else if (gameState === "playing") {
    drawGame();
    playSong();
  } 
  else if (gameState === "end") {
    drawEndScreen();
  }
}

//               Menu

function drawMenu() {
  background(15, 15, 30);

  fill(255);

  textSize(60);
  text("The Melodist", width / 2, 200);

  textSize(22);
  fill(180);
  text("Keybinds: Q W O P", width / 2, 270);

  fill(255, 70, 120);
  rect(width / 2 - 120, 420, 240, 80, 20);

  fill(255);
  textSize(36);
  text("PLAY", width / 2, 460);
}

function mousePressed() {
  if (
    gameState === "menu" &&
    mouseX > width / 2 - 120 &&
    mouseX < width / 2 + 120 &&
    mouseY > 420 &&
    mouseY < 500
  ) {
    userStartAudio();
    startGame();
  }

  if (gameState === "end") {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > 600 &&
      mouseY < 670
    ) {
      startGame();
    }
  }
}

//                   StartGame

function startGame() {
  score = 0;
  combo = 0;
  notes = [];
  beatIndex = 0;

  // resetting everything so old notes dont mess up new run
  stopSpawning = false;
  songFinished = false;

  songStartTime = millis();

  let interval = 60000 / bpm;

  // I think this is basically the full song duration in ms but Im not 100% sure
  songDurationMs = songLengthBeats * interval;

  gameState = "playing";
}

//                   GAMELOOP

function drawGame() {
  drawLanes();
  drawHitLine();
  updateNotes();
  drawUI();
}

//                   LANES

function drawLanes() {
  for (let i = 0; i < lanes; i++) {
    fill(20);
    rect(i * laneWidth, 0, laneWidth, height);

    stroke(60);
    line(i * laneWidth, 0, i * laneWidth, height);
  }

  noStroke();

  fill(255);
  textSize(26);

  text("Q", laneWidth * 0.5, hitLineY + 60);
  text("W", laneWidth * 1.5, hitLineY + 60);
  text("O", laneWidth * 2.5, hitLineY + 60);
  text("P", laneWidth * 3.5, hitLineY + 60);
}

function drawHitLine() {
  fill(255, 200, 0);
  rect(0, hitLineY, width, 6);
}

//                    NOTES

function updateNotes() {
  for (let i = notes.length - 1; i >= 0; i--) {
    let n = notes[i];

    n.y += 7;

    let x = n.lane * laneWidth;

    fill(0, 200, 255);
    rect(x + 10, n.y, laneWidth - 20, 20, 6);

    if (n.y > height + 100) {
      combo = 0;
      notes.splice(i, 1);
    }
  }
}

//                      INPUT
function keyPressed() {
  let lane = -1;

  if (key === 'q' || key === 'Q') lane = 0;
  if (key === 'w' || key === 'W') lane = 1;
  if (key === 'o' || key === 'O') lane = 2;
  if (key === 'p' || key === 'P') lane = 3;

  if (lane !== -1) hitNote(lane);
}

function hitNote(lane) {
  for (let i = 0; i < notes.length; i++) {
    let n = notes[i];

    if (n.lane === lane) {
      let d = abs(n.y - hitLineY);

      // this part feels a bit sensitive, maybe tuning this later if it feels unfair
      if (d < 60) {
        score += 300;
        combo++;
        notes.splice(i, 1);
        return;
      }

      if (d < 100) {
        score += 120;
        combo++;
        notes.splice(i, 1);
        return;
      }
    }
  }

  combo = 0;
}

//                             CHART

function generateChart() {
  chart = [];

  let pattern = [
    0,1,2,3,
    1,2,0,3,
    2,2,1,0,
    3,1,0,2,
    0,1,2,3,
    3,2,1,0,
    1,1,2,2,
    0,3,1,2
  ];

  for (let i = 0; i < songLengthBeats; i++) {
    chart.push(pattern[i % pattern.length]);
  }
}

//                  SONG ENGINE

function playSong() {
  let interval = 60000 / bpm;

  let elapsed = millis() - songStartTime;

  // I kind of added this so the game stops spawning notes slightly before song ends
  let earlyStopTime = songDurationMs - (spawnOffset + 200);

  if (elapsed >= earlyStopTime) {
    stopSpawning = true;
  }

  // only spawn notes while song is still "safe"
  if (!stopSpawning) {

    while (beatIndex < chart.length) {

      let noteTime = beatIndex * interval;

      // this timing condition was confusing at first but I think it aligns notes to music
      if (elapsed + spawnOffset < noteTime) break;

      spawnNote(chart[beatIndex]);
      playLaneSound(chart[beatIndex]);

      beatIndex++;
    }
  }

  if (beatIndex >= chart.length) {
    songFinished = true;
  }

  // game ends only when everything is actually cleared (this part was tricky to get right)
  if ((songFinished || stopSpawning) && notes.length === 0) {
    gameState = "end";
  }
}

//                    SOUND/MELODY

function playLaneSound(lane) {
  let freqs = [261, 329, 392, 523];

  let osc = synths[lane];

  osc.freq(freqs[lane]);
  osc.amp(0.4, 0.01);
  osc.amp(0, 0.15);
}

//                   SPAWN 4 NOTES

function spawnNote(lane) {
  notes.push({
    lane: lane,
    y: -50
  });
}

//                  UI

function drawUI() {
  fill(255);

  textSize(28);
  text("Score: " + score, width / 2, 40);

  textSize(20);
  text("Combo: " + combo, width / 2, 75);
}

//             ENDSCREEN

function getRank() {
  let maxScore = songLengthBeats * 220;
  let percent = score / maxScore;

  if (percent >= 0.95) return "S";
  if (percent >= 0.8) return "A";
  if (percent >= 0.4) return "B";
  return "C";
}

function drawEndScreen() {
  background(0);

  fill(255);
  textSize(60);
  text("Song Complete", width / 2, 220);

  textSize(40);
  text("Score: " + score, width / 2, 320);

  textSize(90);
  fill(255, 200, 0);
  text("Rank " + getRank(), width / 2, 430);

  fill(255, 70, 120);
  rect(width / 2 - 100, 600, 200, 70, 20);

  fill(255);
  textSize(28);
  text("RETRY", width / 2, 635);
}
