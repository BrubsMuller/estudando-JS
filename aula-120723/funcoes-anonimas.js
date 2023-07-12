/*function somar(n1, n2) {
    let soma = n1 + n2;
    return soma;
}

function dividir(num, den) {
    if(den == 0)
        return;
    return(num / den);
}

const num = dividir(22, 0);
console.log(num);

// callback - > função que passado como parâmetro de outra função

function erro() {
    console.log("DEU RUIM!");
}

function requisicaoParaBanco(callbackError) {
    for(let i = 0; i < 1000000000; i++) { // requisição feita para o servbidor.isso vai demorar alguns segundos
        if(i === 100000) { // aqui gerou um erro 
            callbackError();
        }
    } 
}

requisicaoParaBanco(erro);

function requisicaoParaBanco(callbackSuccess, callbackError) {
    for(let i = 0; i < 1000000; i++) { // requisição feita para o servbidor.isso vai demorar alguns segundos
        if(i === -100000) { // aqui gerou um erro 
            callbackError();
        }
    }
    callbackSuccess();
}

function sucesso() {
    console.log("Ta ai o resultado!");
}

function erro() {
    console.log("DEU RUIM!");
}

requisicaoParaBanco(sucesso, erro); 

resultados = 0;
function requisicaoParaBanco(callbackSuccess, callbackError) {
    for(let i = 0; i < 1000000; i++) { // requisição feita para o servbidor.isso vai demorar alguns segundos
        resultados += i;
        if(i === -100000) { // aqui gerou um erro 
            callbackError();
        }
    }
    callbackSuccess(resultados);
}

function sucesso(res) {
    console.log("Ta ai o resultado!");
    console.log(res);
}

function erro() {
    numError++;
    console.log("DEU RUIM!");
}

requisicaoParaBanco(sucesso, erro);*/

// Função Anônima

/*function teste() {
    console.log("Olá, Mundo!");
}

setTimeout(teste, 1000); // esta função(setTimeout) recebe 02 parâmetros -> 01 função callback e o tempo (em milesimos de segundo - ex: 1000 é 10 segundos)que vc quer que ela leve para ser executada

setInterval(teste, 2000); // esta função(setInterval) recebe 02 parâmetros -> 01 função callback e o tempo (em milesimos de segundo - ex: 1000 é 10 segundos) de intervalo que vc quer que ela leve para ser executada/repetida.*/

/*setTimeout(function() { // esta function é anônima e está como parâmetro de setTimeout.
    console.log("Olá, Mundo!");
}, 3000);*/

//Função anônima se usa quando precisa usar uma callback e por uma única vez a função vai ser realizada
/*setInterval(function() {
    console.log("Olá, Mundo com setInterval.");
}, 2000);

let funAno = function() {

}
// é o mesmo que:
function funAno() {

}*/

// Arrow Functions -> Funções de Seta (também são funções anônimas)
/*setTimeout(function() {
    console.log("SetTimeout com Função Anônima");
}, 2000);*/

/*setTimeout(() => {
    console.log("SetTimeout com Função Arrow.");
}, 2000); */

// parâmetros => escopo/isntrução
(resultado, requisicao) => {
    console.log(resultado, requisicao)
    return 0;
}



