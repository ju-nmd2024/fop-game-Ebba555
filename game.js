/*
This is my little robot 
*/
let state = "start";
let gameTimer = 0;

//

function setup() {
  createCanvas(490, 550);
}

function startScreen() {
  background(0, 200, 255);
  fill(255);
  rect(160, 185, 200, 100, 20);
  strokeWeight(3);
  stroke(230, 230, 230);
  noStroke();
  fill(0);
  textSize(50);
  text("Start", 200, 250);
}

function gameScreen() {
  background(100, 190, 240);
  //Clouds
  fill(255);
  noStroke();
  ellipse(150, 100, 200, 30);
  ellipse(100, 90, 50, 30);
  ellipse(200, 90, 50, 30);
  ellipse(170, 80, 50);
  ellipse(130, 80, 50);
  ellipse(150, 60, 30);

  ellipse(370, 200, 200, 30);
  ellipse(320, 190, 50, 30);
  ellipse(410, 190, 50, 30);
  ellipse(350, 180, 50);
  ellipse(380, 180, 50);
  ellipse(365, 160, 30);

  push();
  scale(0.5);
  ellipse(250, 600, 200, 30);
  ellipse(200, 590, 50, 30);
  ellipse(300, 590, 50, 30);
  ellipse(270, 580, 50);
  ellipse(230, 580, 50);
  ellipse(250, 560, 30);
  pop();

  //Grass
  noStroke();
  fill(0, 230, 100);
  quad(0, 450, 491, 450, 491, 550, 0, 550);

  //Landing circle
  fill(230, 90, 180);
  ellipse(250, 500, 130, 45);
}

function resultScreen() {
  background(50, 200, 250);
  fill(255);
  textSize(40);
  text("Result", 200, 100);
}

function winScreen() {
  background(0, 255, 200);
  fill(0);
  textsize(50);
  text("You Win!", 200, 250);
}

function loseScreen() {
  background(255, 50, 50);
  fill(0);
  textSize(50);
  text("Game Over", 200, 250);
}
//

const speed = 5;

let robotX = 100;
let robotY = 100;

let x = 200;
let y = 200;

// game logic variable
let velocityY = 0.2;
let acceleration = 0.3;

function robot(x, y, flameIsOn) {
  push();
  translate(200 - 70, 200 - 180);
  scale(0.5);

  //Head
  fill(200, 55, 55);
  strokeWeight(3);
  stroke(130, 20, 20);
  rect(x, y, 100, 70);

  //Body
  rect(x + 15, y + 70, 70, 60);

  //Body buttons
  fill(200, 230, 40);
  rect(x + 30, y + 80, 40);

  fill(250, 160, 40);
  rect(x + 30, y + 80, 13);
  rect(x + 57, y + 80, 13);
  rect(x + 57, y + 107, 13);
  rect(x + 30, y + 107, 13);
  rect(x + 43, y + 94, 13);

  //Mouth
  fill(240, 240, 100);
  beginShape();
  vertex(x + 30, y + 50);
  bezierVertex(x + 30, y + 50, x + 50, y + 80, x + 70, y + 50);
  bezierVertex(x + 70, y + 50, x + 50, y + 50, x + 30, y + 50);
  endShape();

  //Eyes
  fill(200, 230, 40);
  ellipse(x + 20, y + 35, 35);
  ellipse(x + 80, y + 35, 35);

  noStroke();
  fill(0);
  ellipse(x + 20, y + 35, 15);
  ellipse(x + 80, y + 35, 15);

  //Rocket
  fill(80, 80, 80);
  quad(x + 30, y + 131, x + 45, y + 150, x + 55, y + 150, x + 70, y + 131);

  //Flame
  if (keyIsDown(32)) {
    //When the up key is pressed, the flame will turn on
    fill(255, 100, 0);
    ellipse(x + 50, y + 175, 30, 50);
    triangle(x + 50, y + 230, x + 35, y + 180, x + 65, y + 180);
    fill(250, 250, 60);
    ellipse(x + 50, y + 170, 17, 30);
    triangle(x + 50, y + 210, x + 42, y + 170, x + 58, y + 170);
  } else {
  }

  //Left arm
  fill(0);
  push();
  translate(x - 320, y - 50);
  angleMode(DEGREES);
  rotate(330);
  rect(200 - 40, 200 + 95, 60, 10, 30);
  rect(200 - 45, 200 + 85, 10, 30);
  rect(200 - 65, 200 + 85, 20, 10);
  rect(200 - 65, 200 + 105, 20, 10);

  pop();
  //Right arm
  push();
  translate(x - 15, y - 300);
  angleMode(DEGREES);
  rotate(30);

  rect(280, 200 + 95, 60, 10, 30);
  rect(200 + 135, 200 + 85, 10, 30);
  rect(200 + 145, 200 + 85, 20, 10, 2);
  rect(200 + 145, 200 + 105, 20, 10);
  pop();

  //Left antenna
  stroke(0);
  line(x + 15, y - 20, x + 15, y - 2);

  stroke(180, 210, 20);
  fill(200, 230, 40);
  ellipse(x + 15, y - 20, 10, 10);

  //Right antenna
  stroke(0);
  line(x + 85, y - 20, x + 85, y - 2);

  stroke(180, 210, 20);
  fill(200, 230, 40);
  ellipse(x + 85, y - 20, 10, 10);

  pop();
}

function draw() {
  clear();

  //
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    // gameTimer = gameTimer + 1;
    //if (gameTimer >= 100) {
    //  gameTimer = 0;
    //state = "result";
    // }

    //Gravitation of the robot
    robot(robotX, robotY);

    robotY = robotY + velocityY;
    velocityY = velocityY + acceleration;

    if (keyIsDown(32)) {
      velocityY = velocityY - 0.7;
    }

    if (keyIsDown(37)) {
      robotX = robotX - speed;
    } else if (keyIsDown(39)) {
      robotX = robotX + speed;
    }
    if (keyIsDown(32)) {
      robotY = robotY - speed;
    } else if (keyIsDown(40)) {
      robotY = robotY + speed;
    }

    //Stops robot when reaching the ground
    if (robotY <= 800) {
    } else {
      state = "result";
      velocityY = 0;
    }
  } else if (state === "result") {
    resultScreen();
    robotY = 100;
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    state = "game";
  }
}
