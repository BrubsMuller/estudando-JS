// program que verifique se um num é positivo, negativo ou zero e exiba mensagem no terminal
let num1 = 0;
let num = -7;

if(num == num1) {
    console.log("O número é zero." );
}
else if(num < num1) {
    console.log(" O número é negativo.");
}
else {
    console.log("O número é positivo");
} 

// program que receba a idade e verifique se ela á maior de idade ou menor.

let idade = 21;
if(idade < 0 || idade > 150) {
    console.log("Valor de idade iválido,");
}
else if(idade >= 18) {
    console.log("Você já é maior de idade.");
}
else{
    console.log("Você ainda é uma criança!");
} 

// receba 3 nums e determine qual deles é o maior

let a = 50;
let b = 87;
let c = 12;
if(a > b && a > c) {
    console.log("Maior úmero é: " + a);
}
else if(b > a && b > c) {
    console.log("Maior número é: " + b);
}
else if(c > a && c > b) {
    console.log("Maior número é: " + c);
}
else {
    console.log("O maior número está duplicado");
} 

//receba 02 numeros e verifique se o produto é par ou impar

let num1 = 3;
let num2 = 7;
let calc = num1 * num2;
if(calc % 2 == 0) {
    console.log("O produto desta multiplicação é um número par.")
}
else {
    console.log("O produto desta multiplicação é um número ímpar.")
} 

// receba o nome e um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia1 = "sabado";
let dia2 = "domingo";
let dia = "terça-feira";
if(dia == dia1 || dia == dia2) {
    console.log( dia + ". Hoje é final de semana.");
}
else {
    console.log( dia + ". Hoje é dia útil.");
}


// receba de 1 a 7 exiba o dia da semana correspondente (doming, segunda...)
let dia = 3;
switch(dia) {
    case 1:
        console.log("Hoje é domingo.");
    break;
    case 2:
        console.log("Hoje é segunda-feira.");
    break;
    case 3:
        console.log("Hoje é terça-feira.");
    break;
    case 4:
        console.log("Hoje é quarta-feira.");
    break;
    case 5:
        console.log("Hoje é quinta-feira.");
    break;
    case 6:
        console.log("Hoje é sexta-feira.");
    break;
    case 7:
        console.log("Hoje é sábado!");
} 