"use strict";

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies; //const Body = Matter.Body;

var engine;
var world;
var ground;
var tower;
var backgroundIMG;
var towerIMG;
var angle = 20;
var canon;
var cannonBall;

function preload() {
  backgroundIMG = loadImage("./assets/background.gif");
  towerIMG = loadImage("./assets/tower.png");
}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;
  var ground_options = {
    isStatic: true
  };
  ground = Bodies.rectangle(0, height - 1, width * 2, 10, ground_options);
  World.add(world, ground);
  var tower_options = {
    isStatic: true
  };
  tower = Bodies.rectangle(160, 350, 160, 310, tower_options);
  World.add(world, tower);
  canon = new Canon(195, 130, 130, 100, angle);
  cannonBall = new CannonBall(canon.x, canon.y);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  /*background(51);*/
  image(backgroundIMG, 0, 0, 1200, 600);
  Engine.update(engine); //rect(ground.position.x, ground.position.y, width*2, 10);

  push();
  imageMode(CENTER);
  /*rect(tower.position.x, tower.position.y, 160, 310);*/

  image(towerIMG, tower.position.x, tower.position.y, 160, 310);
  pop();
  canon.display();
  cannonBall.display();
}
//# sourceMappingURL=sketch.dev.js.map
