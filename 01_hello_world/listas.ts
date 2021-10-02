//Javascript
let l= [1,2,3];
console.log(l);

// TypeScript - tipagem 
let l1:number[] = [2,3,4];
console.log(l1);


let l2:string[] = ["victor", "Maria", "João"];
console.log(l2);

// Interação - Javascript
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i])
}

for(let i in l1){
    console.log(i, l1[i]);
}


// for...of - para quando a gente só precisa dos valores de l1 e não a ordem 
for(let elemento of l1){
    console.log(elemento);

}

//operação sobre lista
let lista:number[]= [10,20,20,40];
// Inserir elementos
lista.push(50);
console.log(lista);

//Remover elementos
lista.splice(2,1);
console.log(lista);
