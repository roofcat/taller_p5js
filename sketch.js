// P5 viene del lenguaje Processing
// p5js.org
var diametro = 50;

function setup() {
  createCanvas(400, 300);
  background(0, 100, 200);
}

// esta función se ejecuta despues de setup
// 60 veces por segundo
function draw() {
  var anchoBorde = 10;
  
  background(0, 100, 200);
  //ellipse(posX, posY, width, height);
  //ellipse(100, 50, 30, 40);
  // noFill(); // funcion que no pone relleno de lo que se va a dibujar
  estilo1();
  // crear elipse
  ellipse(mouseX, mouseY, diametro, diametro);
}

function estilo1() {
  // tamaño del borde
  strokeWeight(10);
  // color del borde
  stroke(210, 0, 100);
  fill(255, 222, 0);
}