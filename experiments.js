//function startScreen() {

// background(100, 190, 240);

//Grass
//noStroke();
//fill(0, 230, 100);
// quad(0, 450, 491, 450, 491, 550, 0, 550);

//Cloud
// fill(255);
// noStroke();
// ellipse(260, 200, 400, 50);
// ellipse(170, 180, 100, 60);
// ellipse(350, 180, 100, 60);
// ellipse(200, 170, 80);
//  ellipse(320, 170, 80);
//  ellipse(260, 160, 100);

//  fill(0);
// textSize(40);
// text("Robot landing", 140, 200);
// textSize (20);
// fill (255);
// rect (90,478,332,30,20);
// fill (0);
// text ("Press anywhere to start!", 150,280);
// text ("Rules : Land safly on the pink cirkle", 100,500);
//}

function draw() {
  background(100, 190, 240);

  //Grass
  noStroke();
  fill(0, 230, 100);
  quad(0, 450, 491, 450, 491, 550, 0, 550);

  fill(255);
  rect(175, 180, 250, 100, 20);
  fill(0);
  textSize(50);
  text("You Win!", 200, 250);
}

function loseScreen() {
  background(100, 190, 240);

  noStroke();
  fill(0, 230, 100);
  quad(0, 450, 491, 450, 491, 550, 0, 550);
  fill(255, 50, 50);
  rect(120, 180, 280, 100, 20);
  fill(0);
  textSize(50);
  text("Game Over", 130, 250);
  textSize(30);
  text("Retry", 230, 330);
}
