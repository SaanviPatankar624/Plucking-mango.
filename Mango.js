class Mango{
    constructor(x, y, width, height, angle){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
            scale:0.12,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("images/mango.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("white");
        strokeWeight(3);
        fill("yellow");
        imageMode(CENTER);
        image(0, 0, this.width, this.height);
        pop();
    }
}