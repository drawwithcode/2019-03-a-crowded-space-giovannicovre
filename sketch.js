// SPACE BETWEEN EYES
var space = 100;

// DIAMETER
var l = 40;

// EYES
var eye = [];
var eyeCount;

// COORDINATES
var x;
var y;
var a;

// TEXT
var textMarginV;
var textMarginH;
var textBoxV;
var textBoxH;

var txtA = 'BIG BROTHER IS WATCHING YOU';
var actionE = '[ MOVE THE MOUSE - PRESS ENTER ]';
var txtB = ' ';
var txtC = ' ';
var txtD = ' ';
var actionB = ' ';

function setup() {
  createCanvas(windowWidth, windowHeight);

  textMarginV = windowWidth/4;
  textMarginH =  3*windowHeight/8;
  textBoxV = windowWidth/2;
  textBoxH = windowHeight/4;

  var verticalCount = width/space;
  var horizontalCount = height/space;

  eyeCount = 0;

  for (var xc = 0; xc < verticalCount/2; xc++) {
    for (var yc = 0; yc < horizontalCount/2; yc++) {
      //TOP LEFT
      eye[eyeCount] = new Eye(-xc*space + width/2, -yc*space + height/2);
      eyeCount++;
      //TOP RIGHT
      eye[eyeCount] = new Eye(xc*space + width/2, -yc*space + height/2);
      eyeCount++;
      //BOTTOM LEFT
      eye[eyeCount] = new Eye(-xc*space + width/2, yc*space + height/2);
      eyeCount++;
      //BOTTOM RIGHT
      eye[eyeCount] = new Eye(xc*space + width/2, yc*space + height/2);
      eyeCount++;
    }
  }
}

function draw() {
  var titleSize = width/40;
  var subSize = width/100;

  background('black');

  push();
  for (var i = 0; i < eyeCount; i++) {
    eye[i].update();
    eye[i].drawsclera();
    eye[i].drawpupil();
  }
  pop();

  // EXT TEXT BOX
  fill(245,35,35);
  stroke(color('black'));
  strokeWeight(5);
  rect(textMarginV, textMarginH, textBoxV, textBoxH);

  // INT TEXT BOX
  fill(0);
  stroke(color('black'));
  rect(textMarginV+20, textMarginH+20, textBoxV-40, textBoxH-40);

  textAlign(CENTER,CENTER);
  textStyle(BOLD);
  textSize(titleSize);
  fill('white');
  noStroke();

  // BIG BROTHER IS WATCHING YOU
  text(txtA, textMarginV+20, textMarginH+10, textBoxV-40, textBoxH-40);

  // WAR IS PEACE
  text(txtB, textMarginV+20, textMarginH+10 - 1.5*titleSize, textBoxV-40, textBoxH-40);
  // FREEDON IS SLAVERY
  text(txtC, textMarginV+20, textMarginH+10, textBoxV-40, textBoxH-40);
  // IGNORANCE IS STRENGTH
  text(txtD, textMarginV+20, textMarginH+10 + 1.5*titleSize, textBoxV-40, textBoxH-40);

  textStyle(NORMAL);
  textSize(subSize);

  // PRESS ENTER
  text(actionE, textMarginV+20, textMarginH+10 + titleSize, textBoxV-40, textBoxH-40);

  // PRESS BACKSPACE
  text(actionB, textMarginV+20, textMarginH+10 + 2.6*titleSize, textBoxV-40, textBoxH-40);
}

function Eye(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;

  this.update = function() {
      this.a = atan2(mouseY-this.y, mouseX-this.x);
  }

  this.drawsclera = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    noStroke();
    arc(0, -10, l, l, 0.5, PI-0.5);
    arc(0, 10, l, l, PI+0.5, -0.5);
    pop();
  }

  this.drawpupil = function() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    fill(0);
    noStroke();
    ellipse(8, 0, l/2, l/2);
    pop();
  }
}

function windowResized() {
  setup();
  draw();
}

function keyPressed() {
  if (keyCode === ENTER) {
    textMarginV = 0;
    textMarginH = 0;
    textBoxV = width;
    textBoxH = height;
    txtA = ' ';
    actionE = ' ';
    txtB = 'WAR IS PEACE';
    txtC = 'FREEDOM IS SLAVERY';
    txtD = 'IGNORANCE IS STRENGTH';
    actionB = '[ PRESS BACKSPACE ]';
  }
  if (keyCode === BACKSPACE) {
    textMarginV = windowWidth/4;
    textMarginH =  3*windowHeight/8;
    textBoxV = windowWidth/2;
    textBoxH = windowHeight/4;
    txtA = 'BIG BROTHER IS WATCHING YOU';
    actionE = '[ MOVE THE MOUSE - PRESS ENTER ]';
    txtB = ' ';
    txtC = ' ';
    txtD = ' ';
    actionB = ' ';
  }
}
