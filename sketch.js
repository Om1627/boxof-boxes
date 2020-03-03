
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

var boxes = [];
const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;
var gSlider;
 var engine,world;
 var g;
 
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
   
    
    
   
   

    g= new Ground(200,350,400,20);
    
   
    // Create a ground rectangle that would hold all the boxes and add it to the world.
   
}

    function mousePressed (){
      if (mouseY<350)  {
          boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)))
      }
    }
     
        

    


 
function draw() {
    // Draw all the elements including the slider that 

    background(155);
    // This is the value of your gravity. You can optionally show it to the viewer.
    Engine.update(engine);
    var fVal = gSlider.value();
    
   for ( var i=0; i<boxes.length;i++){
    boxes[i].show();
   }
   
    g.display();
    text("Gravity "+fVal,180,382);
  
    
        
    
   
    // Use a for loop to show all the boxes
    
}
function Box(x,y,width,height){
    
        var options={
            restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    
    this.show=function(){

    
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();}
    }


// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
