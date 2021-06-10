const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    //layer1
    block1 = new Block(400,700,100,100);
    block2 = new Block(500,700,100,100);
    block3 = new Block(600,700,100,100);
    block4 = new Block(700,700,100,100);
    block5 = new Block(800,700,100,100);

    //layer2
    block6 = new Block(400,600,100,100);
    block7 = new Block(500,600,100,100);
    block8 = new Block(600,600,100,100);
    block9 = new Block(700,600,100,100);
    block10 = new Block(800,600,100,100);

    //layer3
    block11 = new Block(400,500,100,100);
    block12 = new Block(500,500,100,100);
    block13 = new Block(600,500,100,100);
    block14 = new Block(700,500,100,100);
    block15 = new Block(800,500,100,100);

    //layer4
    block16 = new Block(400,400,100,100);
    block17 = new Block(500,400,100,100);
    block18 = new Block(600,400,100,100);
    block19 = new Block(700,400,100,100);
    block20 = new Block(800,400,100,100);

    ball = new Ball(250,500,50,50);

    chain = new Chain(ball.body,{x:250,y:300});

}

function draw(){
    background(255);
    Engine.update(engine);
   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    ball.display();

    chain.display();

    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
