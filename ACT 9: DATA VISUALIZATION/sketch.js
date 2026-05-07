// --- MY DATA ---
// I put the month name and the "viewers" (in thousands) here
let monthlyViewers = [
  { month: "Jan", views: 12 },
  { month: "Feb", views: 14 },
  { month: "Mar", views: 15 },
  { month: "Apr", views: 17 },
  { month: "May", views: 18 },
  { month: "Jun", views: 20 },
  { month: "Jul", views: 21 }, //New map :DD
  { month: "Aug", views: 16 },
  { month: "Sep", views: 14 },
  { month: "Oct", views: 16 },
  { month: "Nov", views: 13 },
  { month: "Dec", views: 12 }
];

const margin = 60;
const barWidth = 35; // How chunky the bars are
const gap = 15;      // Space between bars

function setup() {
  createCanvas(700, 500); // set res 700 by 500 pixs
  background(240); // light grey like the image you showed
}

function draw() {
  background(240);
  
  //      TITLES
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(22);
  textStyle(BOLD);
  text("Wuthering Waves Viewership by Month", width / 2, 40);
  
  textSize(16);
  text("Month", width / 2, height - 15);
  
  // Rotating the side text for "Number of Viewers"
  push();
  translate(20, height / 2);
  rotate(-HALF_PI);
  text("Number of Viewers (THOUSANDS)", 0, 0);
  pop();

  //      DRAWING THE CHART AREA
  let chartBottom = height - 80;
  let chartTop = 80;
  let chartHeight = chartBottom - chartTop;
  let startX = margin + 40;

  // Drawing the Y-axis line
  stroke(150);
  line(startX - 5, chartBottom, width - margin, chartBottom); // bottom line
  line(startX - 5, chartTop, startX - 5, chartBottom);       // side line

  //       DRAWING THE BARS
  for (let i = 0; i < monthlyViewers.length; i++) {
    let data = monthlyViewers[i];
    
    // I'm mapping the views (0 to 25) to the actual height of the chart
    let h = map(data.views, 0, 25, 0, chartHeight);
    let x = startX + i * (barWidth + gap);
    let y = chartBottom - h;

    // Draw the bar
    fill(130, 170, 220); 
    stroke(80, 110, 150);
    rect(x, y, barWidth, h);

    // LABELS
    noStroke();
    fill(0);
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(12);
    
    // Month name at the bottom (rotated so they fit)
    push();
    translate(x + barWidth / 2, chartBottom + 15);
    rotate(PI / 4);
    text(data.month, 0, 0);
    pop();

    // Number of viewers on top of the bars
    text(data.views, x + barWidth / 2, y - 5);
  }
}
