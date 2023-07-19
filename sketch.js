 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//1 Crear variables de mi personaje
var Orangutan, OrangutanImg;
var Simio, SimioImg;
var background, backgroundImg;
function preload()
{
	//precargar iamgen de los primates
	OrangutanImg = loadImage("Le Monke.jpeg")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	// Crea nuevos cuerpos aquí.
   Orangutan=createSprite(80,600,60,60);
   Orangutan.addImage("LeMonke",OrangutanImg);
   Orangutan.scale= 0.9;
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



