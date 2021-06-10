class Block{
    constructor(x,y,width,height){
        var options = {
            density:0.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        stroke("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}