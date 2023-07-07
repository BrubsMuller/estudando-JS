/*
// Uma quatidade determinada de repetições
for (inicialização; condição; incrementação) {
    //repetição ...
}

// while tem uma quantidade indeterminada de repetições
while(condição) {
    // repetição ...
}
*/

/*console.log("TESTE 1");
console.log("TESTE 2");

let i = 0;
while(i < 10) {
    console.log("TESTE WHILE" + i);
    i++
}

console.log("TESTE 3");
console.log("TESTE 4"); */

// Desenha um quadrado de # na tela :
let lado = 7;
let linha = "";
/*for(let i = 0; i < lado; i++) {
    let linha = "";
    for(let j = 0; j < lado; j++) {
        linha += " #";
    }
    console.log(linha);
} */

/*for(let i = 0; i < lado; i++) {
    linha += "# ";
}
for(let i = 0; i < lado; i++) {
    console.log(linha);
} */

// break e continue
/*for(let i = 1; i <= 20; i++) {
    if(!(i % 2 == 0)) {
        continue; // pula o loop
    }
    console.log(i);
} */

// Imprime o primeiro numero multiplo de 8
for(let i = 1; i <= 100; i++) {
    if((i % 8 == 0) && (i != 8)) {
        console.log(i);
        break; //o for, o break vai quebrar o fluxo da repetição.
    }
}



