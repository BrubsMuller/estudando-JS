//Escreva um programa que imprima os números de 1 a 20 usando um loop for.
/*for(let num = 1; num <= 20; num++) {
    console.log(num);
} */

//Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
let p = 0;
let u = 1; 
let i = 0;
while(i < 10) {
    console.log(p);
    let soma = p + u;
    p = u;
    u = soma;
    i++;
}




//Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
/*let num = 62;
for(let i = 1; i <= num; i++) {
    if(!(i % 2 == 0)) {
        i + 
    }
}


//Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
let num = ;
for()

//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.

//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let lado = 9;
let linha = "";
for(let i = 0; i < lado; i++) {
    let linha = "";
    for(let j = 0; j < lado; j++) {
        linha += " *";
    }
    console.log(linha);
}