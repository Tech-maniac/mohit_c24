const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup()
{
    var canvas = createCanvas(1000,450);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,400,70,70);
    box2 = new Box(900,400,70,70);
    box3 = new Box(700,340,70,70);
    box4 = new Box(900,340,70,70);
    box5 = new Box(800,225,70,70);



    ground = new Ground(500,height,1000,20);

    pig1 = new Pig (800,400,50,50)
    pig2 = new Pig (800,315,50,50)


    log1 = new Log(800,350,300,PI/2);
    log2 = new Log(800,250,300,PI/2);
    log3 = new Log(705,200,150,PI/7)
    log4 = new Log(900,200,150,-PI/7)


}

function draw()
{
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()

    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

pig1.display()
pig2.display()

    textSize(30);
    text(" x : "+mouseX+" y : "+mouseY,mouseX,mouseY);
}