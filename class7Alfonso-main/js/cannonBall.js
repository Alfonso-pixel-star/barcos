class CannonBall {

  constructor(x, y) {
    var options = {
      isStatic: true,
    };

    this.trajectory = [];

    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.img = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    imageMode(CENTER);
    image(this.img, pos.x, pos.y, this.r, this.r);
    pop();

    if (this.body.velocity.x > 0 && pos.x > 10){
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++){
      image(this.img, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }

  shoot() {
    //convirtiendo el angulo del cañon a radianes
    var newAngle = canon.angle - 28;
    newAngle = newAngle *(3.14 / 180);

    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.4);

    Matter.Body.setStatic(this.body, false);
    //velocidad de la bala se cambia de grados a radianes
    Matter.Body.setVelocity(this.body, {x: velocity.x *(180 / 3.14), y: velocity.y *(180 / 3.14)})
  }

  remove(index) {
    Matter.Body.setVelocity(this.body, {x: 0, y: 0});
    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balls[index];
    }, 1000);
    
  }
}
