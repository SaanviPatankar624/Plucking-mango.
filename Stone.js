class Stone{
    constructor(x, y, width, height, angle){
        var options ={
            'isStatic':false,
            'density':1.2,
            'friction':1

        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("images/stone.png");
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}