// Desenhando um quadrado
  // Criando a matriz
  // movimento do teclado
  // Desenhando a matriz 
  // Desenhando a tela
  // Movimento do teclado
  
  // dado a volta
 
  // mostrnado framerate
  // entendendo um timer 
  // andando soznho 
  // andando com o teclado 
  // som na hora de comer o alimento
  const NL = 8;
  const NC = 8;
  const LADO = 50;
  let cobra_x = 2;
  let cobra_y = 0
  let cobra_vx = 0;
  let cobra_vy = 0;
  let cobra_color;
  let cell_color;
  let timer = 0
  
  let comida_x = 0;
  let comida_y = 0;
  let comida_collor;
  let contador_comida = 0;
  
  let som_colisao
 
  function gerar_comida(){
    comida_x = parseInt(random(0, NC));
    comida_y = parseInt(random(0, NL));
    
  }
  
  function setup() {
    frameRate(30);
    createCanvas(NC * LADO, NL * LADO);
    snake_color = color("green");
    cell_color = color("gray");
    comida_color = color(random(255), random(255), random(255));
    gerar_comida();
  }
  function draw_cell(x,y, color){
    noStroke();
    fill(color)
    square(x * LADO + 1, y * LADO + 1, LADO - 1); 
}

function draw_mat(){
  fill(155);
  for(let c = 0; c < NC; c++)
      for(let l = 0; l < NL; l++ )
          draw_cell(c, l, cell_color);
}

function cobra_loop(){
    if(cobra_x == NC)
     cobra_x = 0;
  if(cobra_y == NL)
     cobra_y = 0;
  if(cobra_x == -1)
     cobra_x = NC -1;
  if(cobra_y == -1)
     cobra_y = NL - 1;
}

function cobra_andando(){
    if(frameCount - timer > 10){
      timer = frameCount;
      cobra_x += cobra_vx;
      cobra_y += cobra_vy;
  }
  
}
function draw(x, y) {
  cobra_andando();
  cobra_loop();
  
  if(cobra_x == comida_x && cobra_y == comida_y){
    cobra_color = comida_color
    gerar_comida()
    contador_comida += 1 
    
  }
  
  background(255);
  draw_mat();
  draw_cell(comida_x, comida_y, comida_color);
  draw_cell(cobra_x, cobra_y, snake_color);
  fill(0);
  textSize(40);
  text(contador_comida, 10, 400);  
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cobra_vx = -1;
    cobra_vy = 0;
  } else if(keyCode === RIGHT_ARROW){
     cobra_vx = 1;
     cobra_vy = 0; 
  } else if(keyCode === UP_ARROW){
     cobra_vx =  0;
     cobra_vy = -1;
  }else if(keyCode === DOWN_ARROW){
     cobra_vx = 0; 
     cobra_vy = 1;
  }
}
