//window.document -> Objeto que representa o documento HTML
//window.document.getElementById();
//document.getElementByClassName() -> Busca todos os elementos por class
//document.getElementsByTagName() -> Busca todos os elementos pelo nome da tag
// document.querySelector() -> Busca elemento com base no seu seletor CSS

/*const pessoa = {
    nome: "Matheus",
    idade: 21,
    endereco: {
        logradouro: "R. Tal",
        numero: "500",
        cep: "15236478"
    }
}

pessoa.endereco.cep()*/ //Pode-se usar um obejto dentro de um objeto no ex. Pessoa e dentro, endereco.

//abaixo, window e documento são objetos
//window.document.getElementById(); -> Busca pelo id do elemento
//document.getElementByClassName() -> Busca todos os elementos por class
let titulo = document.getElementById("titulo"); // é muito utilizado
let paragrafos = document.getElementsByClassName("paragrafo");
let negritos = document.getElementsByTagName("b");
let campoEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelectorAll("p b");

/*titulo.align = "right";
titulo.title = "Titulo Principal";
titulo.style.color = "cyan";
titulo.style.fontSize = "100px";*/

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Hoje na aula de <b>JavaScript</b> conversamos sobre DOM. Entendi muita coisa. Da pra criar muitas ideias";
console.log(paragrafo.innerHTML); //conteudo textual do elemento com HTML
console.log(paragrafo.innerText); //conteudo textual do elemento


// uso de classe com JavaScript
let caixa = document.querySelector("#informe");
caixa.classList.add("erro"); // adiciona uma nova classe
caixa.classList.remove("mensagem"); // remove uma classe
caixa.classList.toggle("atencao"); //adiciona se não existe
caixa.classList.toggle("atencao"); // remove se existir
console.log(caixa);
