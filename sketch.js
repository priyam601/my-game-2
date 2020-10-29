 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,obsatcle1; 
 var ground2;

 function preload(){
   back = loadImage("bg.jpeg");
 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(1900,400);

ground = new Ground(200,380,3500,10)
ground2 = new Ground(440,370,200,20);
obsatcle1 = new Obstacle(400,315,30,30); 

pc = new Player(200,300,20,20,{x:0,y:5});
console.log(pc);


}

function draw() {

  background("green");  
  drawSprites();
  ground.display();
  obsatcle1.display();
  pc.display();
  ground2.display();

/*   
if(keyCod=UP_ARROW){
  Matter.Body.setVelocity(pc, velocity)

}
 
 */



}




 

