// Você deve desenvolver um semáforo utilizando JavaScript. O semáforo consistirá em três imagens que representam as cores vermelho, amarelo e verde. Além disso, você deve implementar quatro botões que permitirão habilitar as cores individualmente (vermelho, verde e amarelo) ou o modo automático, no qual as cores devem ser alternadas automaticamente em um intervalo fixo de tempo.

const btnVerm = document.querySelector("#vermelho");
const btnAmar = document.querySelector("#amarelo");
const btnVerd = document.querySelector("#verde");
const btnAuto = document.querySelector("#auto");
const semaforo = document.querySelector("#semaforo");

const imagens = [
    "./vermelho.png",
    "./amarelo.png",
    "./verde.png"
];

let sinalInicial = 1; 
let interval;

btnVerd.addEventListener("click", () => {
    clearInterval(interval); // o clearInterval aqui, fez parar o automático da função btn.Auto
    semaforo.src = imagens[2];
});

btnAmar.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[1];
});

btnVerm.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[0];
});

btnAuto.addEventListener("click", () => {
        interval = setInterval(() => {
        semaforo.src = imagens[sinalInicial];
        if(sinalInicial == (imagens.length-1)) {
            sinalInicial = 0;
        }
        else {
            sinalInicial++
        }
    }, 1000);
});


/*function automatico() {
    let sinalInicial = 0;
    let cores = document.querySelector("#auto");
    cores.src = semaforos[sinalInicial];
    if(sinalInicial == (imagens.length-1)) {
        sinalInicial = 0;
    }
    else {
        sinalInicial++
    }
}



/*const imagens = [
    "./vermelho.png",
    "./amarelo.png",
    "./verde.png"
];

let batata = document.querySelector("#auto");
let vermelho = document.querySelector("#vermelho");
let amarelo = document.querySelector("#amarelo");
let verde = document.querySelector("#verde");

function automatico() {
    let sinalInicial = 0;
    let cores = document.querySelector("#auto");
    cores.src = semaforos[sinalInicial];
    if(sinalInicial == (semaforos.length-1)) {
        sinalInicial = 0;
    }
    else {
        sinalInicial++
    }
}*/

