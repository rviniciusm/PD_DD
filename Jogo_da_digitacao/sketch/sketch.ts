class Bubble {
  x: number;
  y: number;
  letter: string;
  speed: number;
  static radius: number = 20;
  alive: boolean = true;
  constructor(x: number, y: number, letter: string, speed: number ) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.speed = speed;
  }

  update(): void {
    this.y += this.speed;
  }

  //metodos 
  draw(): void {
    fill(255);
    stroke(255);
    circle(this.x, this.y, 2* Bubble.radius);
    fill(0);
    stroke(0);
    textSize(15);
    text(this.letter, this.x - 5, this.y + 5);
  }

}

class Board {
    bubbles: Bubble[] = [];

    constructor() {
        this.bubbles = [new Bubble(100, 100, "a" , 1)];
        this.bubbles.push(new Bubble(200, 100, "b" , 2));
        this.bubbles.push(new Bubble(300, 100, "c" , 3));
    }

    update() : void {
        for (let bubble of this.bubbles) {
            bubble.update();
        }
    }

    draw(): void {
      for (let bubble of this.bubbles) {
        bubble.draw();
    }

    }


}

let board: Board;

function setup() {
    createCanvas(800, 600);
    board = new Board();
 
    
}

function draw() {
  background(50, 50, 50);
   
  board.update();
  board.draw();

}