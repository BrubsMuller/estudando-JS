// Estruturas de Repetições

/*console.log(1);
console.log(2);
...
console.log(10); */

// incrementa o valor de numero em uma uidade
//atribuição (declaração de 01 variavel), condição, incremento(reatribuição)
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

//incrementa o valor de numero em duas unidades
/*console.log("================");
for(let numero = 0; numero < 10; numero = numero + 2) {
    console.log(numero);
}

// incrementa o valor de numero em três uidades
console.log("================");
for(let numero = 0; numero < 10; numero = numero + 3) {
    console.log(numero);
} 

console.log("================");
for(let numero = 10; numero >= 0; numero--) {
    console.log(numero);
}

console.log("================");
let batata = "fritas"; */

//o while só recebe a (01) condição - enquanto
// esse de baixo, rodaria um loop infinito se ão fosse adicionado o n++
/*let n = 0;
while(n < 17) {
    console.log("SouCode + Porto");
    n++; */ 

//for -> uma quantidade de repetições determinadas
//while -> uma quantidade de repetições ideterminadas


let num = 72;
let ePrimo = true;
for(let i = 2; i < num; i++) {
    if(num % i == 0) {
        ePrimo == false;
    }
} // fez uma repetição e dentro uma verificação.

if(ePrimo) {
    console.log("É primo!!")
}
else {
    console.log("Não é primo!!")
}





