class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1
        }
        this.body = Constraint.create(options);
        this.pointB = pointB; 
        World.add(world,this.body);

    }
    display(){
        push();
        stroke("black");
        strokeWeight(12);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }
}