const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var ball;
var ground1;
var ground2;
var chain;

function setup(){
 createCanvas(1200,400);
    ball = new Ball(100,100,20,20);
    box1 = new bluebox(900,350,20,20);
    box2 = new bluebox(920,350,20,20);
    box3 = new bluebox(940,350,20,20);
    box4 = new bluebox(960,350,20,20);

    box5 = new greenbox(910,320,20,20);
    box6 = new greenbox(930,320,20,20);
    box7 = new greenbox(950,320,20,20);

    box8 = new yellowbox(920,290,20,20);
    box9 = new yellowbox(940,290,20,20);
    
    box10 = new pinkbox(930,270,20,20);
    ground1 = new ground(800,625,50,50);

    box11 = new bluebox(500,400,20,20);
    box12 = new bluebox(520,400,20,20);
    box13 = new bluebox(540,400,20,20);
    box14 = new bluebox(560,400,20,20);

    box15 =  new greenbox(510,380,20,20);
    box16 =  new greenbox(530,380,20,20);
    box17 =  new greenbox(550,380,20,20);

    box18 = new yellowbox(520,360,20,20);
    box19 = new yellowbox(540,360,20,20);

    box20 = new pinkbox(560,340,20,20);
    
    chain=new sling(ball.body,{x:50,y:200});

    ground2 = new ground(400,400,20,20);

}
    
    

function draw(){
    Engine.update(engine);


    ball.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
box8.display();
 box9.display();
box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 ball.display();
 chain.display();
 ground1.display();
 ground2.display();
}
function mouseReleased(){
    chain.launch()
    gameState = "launched"
   }
   function keyPressed(){
       if(keyCode === 32){
           chain.Attach(ball.body);
       }
   }