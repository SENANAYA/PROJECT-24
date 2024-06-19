const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bplane = new Plane(600,height,1200,40)
    lplane = new Plane(0,300,40,600)
    rplane = new Plane(1200,300,40,600)
    tplane = new Plane(600,0,1200,40)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
  
    bouncyBall=new BouncyBall(900,450,70);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();

    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    bplane.display();
    rplane.display();
    lplane.display();
    tplane.display();


    bouncyBall.display();
    iron.display()  
    hammer.display();

 
}
