class Ball{
    constructor(x,y,r){
        var options = {
            density:1,
            friction:1,
            restitution:0.6
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("blue");
        stroke("brown");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}