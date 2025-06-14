class Boat{

    constructor(x, y, width, height, boatPos){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;
        this.img = loadImage("./assets/boat.png");

        var options = {
            restitution:0.8,
            friction:1.0,
            densiti:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    remove(index) {
        //Matter.Body.setVelocity(this.body, {x: 0, y: 0});

        setTimeout(() => {
            Matter.World.remove(world, boats[index].body);
            delete boats[index];
        }, 2000);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, this.boatPosition, this.width, this.height);
        pop();
    }

    

}
