class PaperBall{
    constructor(x, y, width, height){
        var options={
            isStatic:false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.3
        }

        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        pop()
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("purple");
        ellipse(pos.x, pos.y, 40);
        push()
    }
}
