class Entity {
    x: number; //atributos
    y: number;
    step: number;
    image: p5.Image;
    alive: boolean; 
    timeToRessurect: number;

                //paramentros
    constructor(x: number, y: number, step: number, image:p5.Image) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.image = image;
    this.alive = true;
} 

   update(): void{
    if(!this.alive) {
       this.timeToRessurect --;
       if (this.timeToRessurect <= 0) {
          this.alive = true;
          this.timeToRessurect = 0;
       }
    }
  }


//metodos 
    draw(): void {
       if(!this.alive){
          return;
       }
         image(this.image, this.x *this.step, this.y *this.step, this.step, this.step);

    }
}

class Board {
    nl: number; 
    nc: number; //atributos
    step: number;
    background: p5.Image;
                
    constructor(nc: number, nl: number, step: number, background: p5.Image) {
    this.nl = nl;
    this.nc = nc;
    this.step = step;
    this.background = background;
} 
//metodos 
    draw(): void{
         image(this.background,0, 0, this.nc *this.step, this.nl* this.step);
        for (let x = 0; x < this.nc; x++) {
            for (let y = 0; y < this.nl; y++) { 
            noFill();
            stroke(0);
            strokeWeight(2);
            rect( x * this.step, y *this.step, this.step, this.step);
        }
    }
}
}

let fox_img: p5.Image;
let prince_img: p5.Image;
let board_img: p5.Image;
let fox2: Entity

let fox: Entity;
let fox2_img: p5.Image;

let prince: Entity;
let board: Board;

function loadImg(path: string): p5.Image {
    return loadImage(
        path,
        () => console.log("Loading" + path + "ok"),
        () => console.log("Loading" + path + "error")
    );
}

function preload() {
    fox_img = loadImg('../sketch/raposa.png');
    fox2_img = loadImg('../sketch/raposa2.png')
    prince_img = loadImg('../sketch/principe_projeto.png');
    board_img = loadImg('../sketch/paisagem_pp.jpg');
}

function keyPressed() {
  let fox_x = fox.x;
  let fox_y = fox.y;
  let prince_x = prince.x;
  let prince_y = prince.y;


    if(keyCode === LEFT_ARROW) {
       fox.x--;
       fox.image = fox2_img;
    }  else if (keyCode === RIGHT_ARROW) {
       fox.x++;
       fox.image = fox_img;
    }  else if(keyCode === UP_ARROW) {
       fox.y--;
    }  else if(keyCode === DOWN_ARROW) {
       fox.y++;
    }
    if(keyCode === "A".charCodeAt(0)) {
       prince.x--;
    }  else if (keyCode === "D".charCodeAt(0)) {
       prince.x++;
    }  else if(keyCode === "W".charCodeAt(0)) {
       prince.y--;
    }  else if(keyCode === "S".charCodeAt(0)) {
       prince.y++;
    }
    if(fox.x == prince.x && fox.y == prince.y) {
       prince.alive = false
       prince.timeToRessurect = 4
       prince.x = 0
       prince.y = 0
    }
}


function setup() {
   frameRate(10)
    let size = 100;
    fox = new Entity(2, 2, size, fox_img);
    prince = new Entity(1, 1, size, prince_img);
    board = new Board(6, 4, size, board_img);
    createCanvas(board.nc * size, board.nc * size);
}

function personagens_andando(){
   if(fox.x === board.nc)
      fox.x = 5;
   if(fox.y === board.nl)
      fox.y= 3;
   if(fox.x === -1)
      fox.x = 0;
   if(fox.y === -1)
      fox.y = 0;
   if(prince.x === board.nc)
      prince.x = 0; 
   if(prince.y ===board.nl)
      prince.y = 0;
   if(prince.x === -1)
      prince.x = board.nc - 1;
   if(prince.y === -1)
      prince.y = board.nl - 1;
   if(prince.x ===3 && prince.y === 0 )
      prince.x = 0;
   if(fox.y === 1)
      fox.y = 3
          
}

function draw() {
    personagens_andando();
    board.draw();
    fox.draw();
    prince.draw();
    prince.update();
}



