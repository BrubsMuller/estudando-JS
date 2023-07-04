
// "Verificar se um úmero é par ou ímpar"

let num = 12
let condicao = (num % 2 == 0);
let mensagem = condicao ? "Este npumero é Par" : "Este número é Ímpar";
console.log(mensagem);


//"Calcule a média aritmética de 03 números"

let n1 = 11;
let n2 = 5;
let n3 = 13;
let media = (n1 + n2 + n3) / 3;
console.log("A média é igual a:");
console.log(media);


// Verificar se um úmero é divisível por 3 e por 5 ao mesmo tempo.

let num1  = 15;
let cond1 = (num1 % 3) == 0; 
let cond2 = (num1 % 5) == 0;
result = cond1 && cond2;
console.log(result)

// Faça um programa que calcule a área de um triângulo com base e altura.

let base = 7;
let alt = 4;
let area = (base * alt) / 2;
console.log(area);

// converta uma temperatura de graus Celsius para Fahrenheit.

let cls = 36;
let fah = cls * 1.8 + 32;
console.log("Celsius");
console.log(cls);
console.log("Fahrenheit");
console.log(fah);

// calcule o delta das funções de segundo grau.

let a = 3;
let b = 2;
let c = 1;
let delta = b**2 - 4 * a * c;
console.log("O valor de delta é:")
console.log(delta)

// retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 15;
mensagem = (idade >= 18) ? "Pode tirar carteira de motorista" : "Não pode tirar carteira de motorista";
console.log(mensagem);



