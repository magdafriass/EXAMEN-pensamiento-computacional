let estado = 0;

let audio1;
let audio2;

let circuloRojo;
let circuloAzul;
let cuadrado;
let triangulo;

let particulas = [];

function preload() {
  audio1 = loadSound("ScreenRecording1.mp3");
  audio2 = loadSound("ScreenRecording2.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 120; i++) {
    particulas.push({
      x: random(width),
      y: random(height),
      t: random(TWO_PI)
    });
  }
  textAlign(CENTER, CENTER);
}

function draw() {

  if (estado == 0) {
    inicio();
  }

  if (estado == 1) {
    composicion();
  }

}

function inicio() {
   background(0);

  fill(255);
  textSize(40);
  text("ESPACIO para empezar", width/2, height/2);

  circuloRojo = createVector(width*0.25, height*0.35);
circuloAzul = createVector(width*0.75, height*0.70);
cuadrado = createVector(width*0.65, height*0.30);
triangulo = createVector(width*0.35, height*0.70);

}
function composicion() {

background(245);

  // Cambia volumen según posición del mouse
  let volumen1 = map(mouseY,0,height,1,0);
  let volumen2 = map(mouseY,0,height,0,1);

  audio1.setVolume(volumen1);
  audio2.setVolume(volumen2);

  let tam = map(mouseX,0,width,60,180);
  let angulo = map(mouseY,0,height,-45,45);

    // Líneas negras
  stroke(0);
  strokeWeight(8);

  line(width*0.15,height*0.2,width*0.85,height*0.2);
  line(width*0.2,height*0.8,width*0.8,height*0.3);

  // Círculo rojo
  noStroke();
  fill(220,40,40);
  circle(circuloRojo.x, circuloRojo.y, tam);

   // Círculo azul
  fill(30,90,220);
  circle(circuloAzul.x, circuloAzul.y,tam*0.8);

  // Cuadrado amarillo
  push();

  translate(cuadrado.x, cuadrado.y);
  rotate(radians(angulo));

  rectMode(CENTER);

  fill(240,200,30);
  rect(0,0,tam,tam);

  pop();

  // Triángulo negro
  fill(0);

  push();

 translate(triangulo.x, triangulo.y);
  rotate(radians(-angulo));

  triangle(
    -40,40,
    40,40,
    0,-40
  );

  pop();

    // Pequeños cuadrados de colores
  noStroke();

  for(let i=0;i<12;i++){

    if(i%3==0){
      fill(220,40,40);
    }

    else if(i%3==1){
      fill(30,90,220);
    }

    else{
      fill(240,200,30);
    }

    rect(
      random(width),
      random(height),
      12,
      12
    );

  }

  // Cursor
  fill(0);
  circle(mouseX,mouseY,18);

}

function keyPressed(){

  if(key == ' ' && estado == 0){

    estado = 1;

    audio1.loop();   
    audio2.loop();   

    audio1.setVolume(1);
    audio2.setVolume(0);
  }

   circuloRojo.set(
    random(120,width-120),
    random(120,height-120)
  );

  circuloAzul.set(
    random(120,width-120),
    random(120,height-120)
  );

  cuadrado.set(
    random(120,width-120),
    random(120,height-120)
  );

  triangulo.set(
    random(120,width-120),
    random(120,height-120)
  );
  // Cambiar de audio
  if(audio1.isPlaying()){
    audio1.stop();
    audio2.play();
  }else{
    audio2.stop();
    audio1.play();
  }
}

function mousePressed(){

  if(estado == 1){

    particulas.push({
      x: mouseX,
      y: mouseY,
      t: random(TWO_PI)
    });

  }

}

function windowResized(){

  resizeCanvas(windowWidth,windowHeight);

}

