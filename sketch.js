const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,ground2,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(200,350,400,20);
    ground2 = new Ground(200,300,400,20);
    box1= new Box(30,50,20,20);
    box2 = new Box(240,100,50,100);
    // var ball_options ={
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200,100,20, ball_options);
    // World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
    // ellipseMode(RADIUS);
    // ellipse(ball.position.x, ball.position.y, 20, 20);
}