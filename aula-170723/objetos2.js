class Pessoa {
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gabriel";
pessoa1.idade = 21;
pessoa1.email = "gabriel@example.com"
// pessoa1.cor = "Branco"; // é válido mas não sugerido que faça visto que a classe não possui esta propriedade.
console.log(pessoa1);

const pessoa2 = { // Aqui estou instanciando um objeto sem classe
    nome: "Aline", // sintaxe chave:valor
    idade: 24,
    email: "aline@example.com",
    foto: "https://bancodefotos.com/754356456",
    enabled: true
};

console.log(pessoa2);

//const vetor = ["Gabriel", 21, "gabriel@mail.com"];
//console.log(vetor[0]);
//const objeto = { nome: "Gabriel", idade: 21, email: "gabriel@mail.com"};
//console.log(objeto.nome);

const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "100w",
    placaMae: "Gigabyte"
};

const saldo = 4500;

if(saldo > 4000) {
    pc.placaVideo = "RXT 3080"; // aqui é onde referenciei o objeto pc neste if
}

//console.log(pc.processador);

let n1 = 2;
let n2 = n1; // faz uma copia de n1 e passar para o n2
n1 = 3; // não afeta o n2 pq ali em cima o n2 já havia copiado o valor inicial de n2
console.log(n1); // 3
console.log(n2); // 2

// Forma incorreta de copiar um objeto
//let objeto1 = { nome: "Bruna", curso: "JavaScript"};
//let objeto2 = objeto1;  // não é feio uma copia do objeto, e sim da referencia dele na memoria.
//objeto1.nome = "Bruna Muller";
//console.log(objeto1);
//console.log(objeto2);


// Forma correta de copiar um objeto -> Operador spread "..."
let objeto1 = { nome: "Bruna", curso: "JavaScript"};
let objeto2 = {...objeto1}; // copiar os elementos do objeto1 e "espelhar" no objeto 2.  
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome; // operador delete, remove propriedade (neste ex. foi o nome) do objeto.
console.log(objeto1); 