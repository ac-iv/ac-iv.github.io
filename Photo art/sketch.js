let boat;
let waterTexture;
let bgImage;
let personClicked = false;  
function preload() {
  bgImage = loadImage('image1.jpg'); 
  waterTexture = loadImage('image2.jpg'); 
}
function setup() {
  createCanvas(500, 400);
  boat = new Boat(width / 2, height / 2);
}
function draw() {
  background(bgImage);
  
  image(waterTexture, 0, height / 2, width, height / 2);
  
  fill(255); 
  textSize(20); 
  textAlign(CENTER, TOP); 
  text("Stranger in the Life Boat", width / 2, 30); 
  
  boat.display();
}
class Boat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
    this.person = new Person(this.x, this.y - this.height / 4);
  }

  display() {
    fill(184,92,92);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    this.person.display();
  }
}
class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bodyHeight = 40;
    this.legLength = 20;
    this.armLength = 25;
  }
  display() {
    stroke(0);
    strokeWeight(2);
    line(this.x, this.y - this.bodyHeight / 2, this.x, this.y + this.bodyHeight / 2);
    line(this.x, this.y + this.bodyHeight / 2, this.x - this.legLength, this.y + this.bodyHeight / 2 + this.legLength);
    line(this.x, this.y + this.bodyHeight / 2, this.x + this.legLength, this.y + this.bodyHeight / 2 + this.legLength);
    line(this.x, this.y - this.bodyHeight / 4, this.x - this.armLength, this.y);
    line(this.x, this.y - this.bodyHeight / 4, this.x + this.armLength, this.y);
    ellipse(this.x, this.y - this.bodyHeight / 2, 20, 20); 

    if (personClicked) {
      noFill();
      stroke(255, 204, 0); 
      ellipse(this.x, this.y - this.bodyHeight / 2 - 30, 40, 40); 
    }
  }
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y - this.bodyHeight / 2);
    return d < 20; 
  }
}
function mouseClicked() {
  if (boat.person.clicked(mouseX, mouseY)) {
    personClicked = !personClicked; 
  }
}