const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var tower;

var backgroundIMG;

var towerIMG;

var angle = 20;

var canon;

var boat;

//var cannonBall;

var balls = [];

var boats = [];

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
    isStatic: true,
  }
  ground = Bodies.rectangle(0, height - 1, width * 2, 10, ground_options);
  World.add(world, ground);

  var tower_options = {
    isStatic: true,
  }
  tower = Bodies.rectangle(160, 350, 160, 310, tower_options);
  World.add(world, tower);

  canon = new Canon(195, 130, 130, 100, angle);

  cannonBall = new CannonBall(canon.x, canon.y);

  //boat = new Boat(width - 60, height - 30, 170, 170, -50);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  /*background(51);*/
  image(backgroundIMG, 0, 0, 1200, 600);

  Engine.update(engine);

  //rect(ground.position.x, ground.position.y, width*2, 10);

  push();
  imageMode(CENTER);
  /*rect(tower.position.x, tower.position.y, 160, 310);*/
  image(towerIMG, tower.position.x, tower.position.y, 160, 310);
  pop();

  showBoats();

  for (var i = 0; i < balls.length; i++){
    showCanonBalls(balls[i], i);

    collisionWithBoat(i);
  }


  canon.display();

  //cannonBall.display();
  //cannonBall.shoot();

  //Matter.Body.setVelocity(boat.body, {x: -0.7, y: 0});
  //boat.display();                                             
}

function collisionWithBoat(index){
  for (var i = 0; i < boats.length; i++){
    if (balls[index]!== undefined && boats[i]!== undefined){
      var collision = Matter.SAT.collides(balls[index].body, boats[i].body);

      if (collision.collided){ 
        boats[i].remove(i);

        Matter.World.remove(world, balls[index].body);
        delete balls[index];
      }
      
      
    }
  }
}

function keyReleased(){
  if (keyCode === DOWN_ARROW){
    balls[balls.length - 1].shoot();
  }
}

function showCanonBalls(ball, index) {
  if (ball) {
    ball.display();

    if (ball.body.position.x >= width || ball.body.position.y >= height -50){
      ball.remove(index);
    }
  }
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(canon.x, canon.y);
    balls.push(cannonBall);
  }
}

function showBoats(){
  if (boats.length > 0){
    if (boats[boats.length - 1].body.position.x < width - 300 || boats[boats.length - 1] === undefined){
      var positions = [-40, -60, -70, -20];
      var position = random(positions);

      var boat = new Boat(width, height - 100, 170, 170, -50);
      boats.push(boat);
    }
  }else {
    var boat = new Boat(width, height - 60, 170, 170, -60);
    boats.push(boat);
  }

  for (var i = 0; i < boats.length; i++){
    if (boats[i]){
      Matter.Body.setVelocity(boats[i].body, {x:-0.7, y:0});
    }

    boats[i].display();
  }
}

