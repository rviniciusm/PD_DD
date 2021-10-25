class Pessoa {
    idade: number;
    nome: string;

    constructor(nome: string, idade: number){
        this.idade = idade;
        this.nome = nome;
    }
    toString(): string {
        //return "Pessoa: " + this.idade + ":" + this.nome + ":";
        return `Pessoa ${this.idade} ${this.nome}`;
    }

} 

//Agregação 
class Motoca {
    potencia: number;
    private pessoa: Pessoa | null;
    time: number;

    constructor(potencia: number, time: number){
        this.potencia = potencia
        this.pessoa = null;
        this.time = time; 
    }

    setPessoa(pessoa: Pessoa): boolean {
        if(this.pessoa != null) {
           console.log( "Desculpe amigo, mas já tem crinça brincando na moto");
           return false;
        }
        if(pessoa.idade != this.potencia) {
           console.log("Desculpe, mas a crinça é muito grande para a moto");
           return false
        }
        this.pessoa = pessoa;
         return true;
    }

    removerPessoa(): Pessoa | null {
        if(this.pessoa == null){
            console.log("A motoca está livre!");
            return null; 
        }
        let pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa;
    }
    

}

//let pessoa = new Pessoa("Laura",7);
//console.log("" + pessoa);
let motinha = new Motoca(8, 3 );
console.log(motinha);
let pessoa = new Pessoa("laura", 8);  
motinha.setPessoa(pessoa);
console.log(motinha);
motinha.time -= 1;
console.log(motinha);
 motinha.removerPessoa();
console.log(motinha);


