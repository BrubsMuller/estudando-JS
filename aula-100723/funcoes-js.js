//Função ou Function -> Rotina

let num1 = 4;
let num2 = 5;
function multiplicar() {
    console.log("O primeiro número é " + num1);
    console.log("O úmero é " + num2);
    console.log("O produto é " + (num1 * num2));
}

multiplicar(); 

console.log("Hello");


 Funções Numéricas:
Biblioteca de números (number)

let result = isNaN(NaN); // true / false
console.log(result); 

result = isFinite(Infinity); // true / false (se é um numero finito)
console.log(result);

result = parseInt(12.4); // coversão do float para int
console.log(result);

result =  parseFloat(12); // conversão de int para float
console.log(result);

result = Number.isInteger(13.4); // inteiro
console.log(result);

let num = 22.548;
console.log(num.toFixed(2));
console.log(num.toFixed(1));

console.log(num.toPrecision(4));

console.log(num.toString());

num = num.toString(); 

// Funções de Texto
// Biblioteca de textos (string)

const texto = "Java Script";

console.log(texto.charAt(9)); // pega um  caractere específico do texto.

console.log(texto.concat(" é muito bacana.", " Java é chato."));

console.log(texto.charAt(texto.length-1)); // imprime o último caractere.

console.log(texto.trim()); // remove espaços do fim e do ipicio do texto.

console.log(texto.replace(" ", "")); // substitui o que você desejar, precisa ter 02 parâmetros, o que você quer substituir e pelo oquê.

console.log(texto.includes("Java")); // retorna um booleano, se possui a palavra Java ou não.

console.log(texto.toLowerCase());

console.log(texto.toUpperCase());

let busca = "Java";
console.log(texto.toLowerCase().includes(busca.toLowerCase()));

console.log(texto.replace("J", "A").replace("S", "T").replace("H", "A"));

console.log(texto.indexOf("J"));

console.log(texto.substring(0, 5));

// Math ->  Biblioteca Matemática
/*console.log(Math.ceil(2.3789)); // arredonda para o mais próximo de cima
console.log(Math.floor(2.3789)); // arredonda para o mais próximo de baixo
console.log(Math.round(2.3789)); // arredonda para o mais próximo
console.log(Math.sqrt(121)); // raiz quadrada
console.log(Math.abs(8)); // valor abosulto do número
console.log(Math.random() * 100 + 1); // gera número aleatório  [o, 1 [
console.log(Math.floor(Math.random() * 100 + 1)); // [1, 100]*/





