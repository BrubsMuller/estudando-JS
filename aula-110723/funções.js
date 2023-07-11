// Função
//Parâmetros (o que fica dentro dos parênteses)
// Argumentos (os valores inseridos nos parâmetros) ->  Parâmetros 
// o 10 em n2 define que se não for atribuido valor em ns na função, por padrão erá o valor 10.
function somar(n1, n2 = 10) { // este é o parâmetro
        console.log("Numero 1 é " + n1);
        console.log("Numero 2 é " + n2);
        console.log(n1 + n2);
}  // a chave é onde termina esta função.
somar(30); // -> este é o argumento.
let result = somar(30, 17);
console.log(result); 

// Funções que recebem parâmetros
// Funções que não recebem parâmetro
// Funções que retornam valores
// Funções que não retornam valores
function somar(n1, n2 = 10) {
    let soma = n1 + n2;
    return soma; // o return é última instrução e não deixa a execução chegar na chaves, portanto ela pede retornp de valor.
} // o return deve ser utilizado se vc que retorno de valor na função.
    
let soma = somar(30, 17);
console.log(soma);
//mas posso usar tbm a saída: 
//console.log(somar(30,17)); 

function calc(n1, n2, op = "+") {
    switch(op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 -n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return NaN
}

console.log(calc(80, 6));
console.log(calc(-56, 9, "-"));
console.log(calc(-56, 0, "*"));
console.log(calc(18, 2, "somar"));

//Funções tem:
// Entrada -> parâmetros/argumentos
// Processamento - > o código que será esxecutado naquela função (esocopo)
// Saida - > return (valor retornado ao final)

function desenhaTriangulo(altura) {
    for(let i = 1; i <= altura; i++) {
        let linha = "";
        for(let j = 0; j < (altura-i); j++ ) {
            linha += " ";
        }
        for(let j = 0; j < i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

desenhaTriangulo(10);





