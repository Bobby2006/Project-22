const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage, playerimage, archerImage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");

  archerImage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options =
  {
    isStatic: true
  }

  //create player base body
  playerBase = Bodies.rectangle(250, 555, 180, 150, options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle(250, 400, 50, 180, options);
  World.add(world, player);

  playerArcher = Bodies.rectangle(295, 380, 120, 90, options);
  World.add(world, playerArcher);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  push();
  imageMode(CENTER);
  image(playerimage, player.position.x, player.position.y, 50, 180);
  pop();

  push();
  imageMode(CENTER);
  image(archerImage, playerArcher.position.x, playerArcher.position.y, 120, 90);
  pop();

  //show the playerbase image using image() function
  push();
  imageMode(CENTER);
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  playerArcher.setSize(2);
  pop();

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
