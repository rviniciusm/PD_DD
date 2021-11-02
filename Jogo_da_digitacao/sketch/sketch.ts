
class Bolha {
    x: number;
    y: number;
    letter: string;
    speed: number;
    static raio: number = 20;
    alive: boolean = true;
    
    constructor(x: number, y: number, letter: string, speed: number ) {
      this.x = x;
      this.y = y;
      this.letter = letter;
      this.speed = speed;
        
    }
  
    update(): void {
      this.y += this.speed;
      //this.speed = 1;
    }
  
    //metodos  
    draw(): void {
      fill(0, 0, 300);
      stroke(255);
      circle(this.x, this.y, random(2, 2.1)* Bolha.raio);
      fill(255);
      stroke(255);
      textSize(15);
      text(this.letter, this.x - 5, this.y + 5);
    }
  
  }
  
  class Board {
      bolhas: Bolha[];
      timeout: number = 30;
      timer: number = 0;
      hits = 0;
      mistakes = 0;
      acertos = 0
      speed = 1;
      
      constructor() {
          this.bolhas = [new Bolha(100, 100, "a" , 1)];
          this.bolhas.push(new Bolha(200, 100, "b" , 2));
          this.bolhas.push(new Bolha(300, 100, "c" , 3));
      }
  
      update() : void {
        this.chceckBolhastime();
        this.markOutsideBolhas();
  
          for (let bolha of this.bolhas) 
              bolha.update();
          this.removeBolhasMortas();
      }
  
      removeBolhasMortas(): void {
          this.bolhas = this.bolhas.filter(bolha => bolha.alive);
      }
  
     removeByHit(code: number) : void {
         this.update();
          for (let bolha of this.bolhas) {
              if (bolha.letter[0]. toUpperCase().charCodeAt(0) == code) {
                  bolha.alive = false;
                  this.hits ++;
                  this.acertos ++; 
                  break;
              }
          }
          this.NivelUp();
      }
  
      chceckBolhastime(): void {
          this.timer -= 1;
          if (this.timer <= 0) {
             this.addBolha();
              this.timer = this.timeout;
          } 
      }
  
      markOutsideBolhas() : void {
          for (let bolha of this.bolhas) {
              if (bolha.y  + 2 *Bolha.raio >= height) {
                  bolha.alive = false;
                  this.mistakes ++;
              }
          }
      }
  
      addBolha(): void {
          let x = random(0,width - Bolha.raio);
          let y = -2 * Bolha.raio;
          let letter = random([ "a", "b", "c",   "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
          let bolha = new Bolha(x, y, letter, this.speed);
          this.bolhas.push(bolha);

      }
  
      NivelUp() {
          if(this.acertos >= 10){
              this.speed = this.speed + 1;
              this.acertos = 0;
          }
      }
  
      draw(): void {
        stroke("white")
        fill("white")
        textSize(30);
        text("Acertos: " + this.hits + " Erro: " + this.mistakes, 30, 30);
        for (let bolha of this.bolhas) {
            bolha.draw();
      }
  
      }
  
  }
  
  class Game {
      board: Board;
      activeState: () => void;
      constructor() {
          this.board = new Board();
          this.activeState = this.gamePlay;
      }
  
      gamePlay(): void {
          this.board.update();
          background( ' #fae');
          this.board.draw();
  
          if (this.board.mistakes > 5) 
              this.activeState = this.gameOver;
          
      }
  
      gameOver(): void {
          background(255, 0, 0);
          textSize(50);
          text("Game Over",300, 300);
          textSize(20);
          text("(Enter para jogar novamente)" , 350, 350);
          
          if(keyPressed && keyCode == ENTER){
              this.board.mistakes = 0;
              this.board.hits = 0;
              this.board.speed = 1;
              this.activeState = this.gamePlay;
          }
          
      }

  }

  let game: Game;
  
  function setup() {
  
      createCanvas( 800, 600);
      frameRate(30);
      game = new Game();
      
  }
  
  function keyPressed() {

    game.board.removeByHit(keyCode);
  }
  
  function draw() {
    game.activeState();
  
  }