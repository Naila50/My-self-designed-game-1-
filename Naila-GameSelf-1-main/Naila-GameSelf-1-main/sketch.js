var form;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  fill("lightblue");
  createCanvas(1860,850);
  game = new Game();
  game.start();
  
}

function draw() {
  background();
  
}

