class Pessoa {
    idade: number;
    nome: string;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    toString(): string {
        //return "Pessoa: " + this.idade + ":" + this.nome + ":";
        return `Pessoa ${this.nome} possui ${this.idade} anos`;
    }

} 


class Motoca {
    pessoa: Pessoa | null;
    potencia: number;
    time: number;

    constructor(potencia: number) {
        this.potencia = potencia;
        this.pessoa = null;
        this.time = 0;
    }

    buyTime(qtd: number): void {
        this.time += qtd;
    }

    dirigir(time: number): boolean {
        if (this.pessoa == null) {
            console.log("Não há ninguém para dirigir");
            return false;
        }
        if (this.pessoa.idade > 10) {
             console.log("Não é permitido dirigir");
                return false;
        }
        this.time-= time;
        return true;

    }

    buzinar(): string {
        let saida: string = "P";
        for(let i = 0; i < this.potencia; i++)
            saida += "e";
            return saida + "m";
    }  

    subir_na_moto(pessoa: Pessoa){
        if (this.pessoa === null) {
            this.pessoa = pessoa;   
             return true;
        }
        console.log("Não é possível subir na moto");
        return false; 
    }

    descer_da_moto(): Pessoa | null {
        if (this.pessoa === null) {
            return null;
        }
        const pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa;
        }



    toString(): string {
        let nome = "vazio";
        if(this.pessoa != null)
            nome = this.pessoa.nome;
        return ` [${nome}]`;
    }
}

let moto = new Motoca(5);
console.log(moto.buzinar());
moto.subir_na_moto(new Pessoa("João", 2));
moto.descer_da_moto();

let joao: Pessoa | null = moto.descer_da_moto();
console.log("" + joao);

if(moto.subir_na_moto(new Pessoa("Mari", 18)))
    console.log("Mari subiu na moto");
else 
     console.log("Mari está se sentindo contrariada, visto que foi imcapacitada de subir na moto" + moto);




    






