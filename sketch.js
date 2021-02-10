const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine,world;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;


function setup() {
  
  var canvas = createCanvas(500,750);
  

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,740,480,30);

  for (var k=0; k <=width; k= k+80){

		division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
	}
	for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,75,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,175,10));
	}
	for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,275,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,375,10));
	}

    Engine.run(engine);
  }

function draw() {
  rectMode(CENTER);
  background(0,0,0);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    //particles.push(particle);
  }
  
  
  
  for(var y = 0; y<division.length;y++){
    division[y].display();
  }

  for(var x = 0; x < particles.length; x++){
    particles[x].display();
  }

  for(var z = 0; z<plinkos.length;z++){
    plinkos[z].display();
  }
  ground.display();
  drawSprites();
}