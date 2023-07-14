const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nums);

nums.shift(); // remove um elemento do início do vetor
console.log(nums);

let juncao = nums.join(", "); // fazer a junção dos elementos do vetor
console.log(juncao);


let vetor2 = [5, 6, 7];
let vetor3 = nums.concat(vetor2); //gera um novo vetor concatenado
console.log(vetor3);

//nums.push(100, 101, 110, 1000) // sort com números dependendo não sairá certinho na ordem
const nomes = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"];
console.log(nums.sort()); //ordena o vetor na ordem alfabética

console.log(nums.reverse()); // gera um novo vetor com elementos do vetor em ordem reversa(modifica o vetor)

console.log(nums.includes(7)); // retorna se o vetor inlcui a informação inserida no parêntese (boolean-true or false)

//console.log(nums.fill(0)); // preencher todos os elementos com zero.
//console.log(nums.fill(7, 2, 4)); // preenche com 7 de 2 à 4-1. (modifica o vetor)

console.log(nums.indexOf(7)); // vai me retornar o índice do primeiro elemento do vetor(indice da posição isnerida como parâmetro)

console.log(nums);
console.log(nums.splice(6, 3)); // remove elementos do meio do vetor(priemiro a posição inicial e depois quantoas vezes ele vai remover) MODIFICA O VETOR
console.log(nums);

console.log(nums.slice(2, 4)); //  recortar um vetor (retorna um vetor do índice 2 à 4-1)
console.log(nums); // slice não modifca o vetor.

 for(let num of nums) { //for each -> vai mostrar indice por indice
    console.log(num);
}

// a função abaixo é como se fosse o for de cima(let...of...)
nums.forEach(num => console.log(num)); // representa o valor de cada loop do for

// neste caso o acumulador vai indicar a posição, que inicia com o valor da primeira posição, e o num vai ser o valor do indice. No loop, o indice retorna seu valor para acumulador e ele valerá a posição 1, em diante, até o final do vetor.
console.log(nums.reduce((acumulador, num) => (acumulador + num)));
//reduce - > efetuar a redução dos valores do vetor em um valor acumulativo.
// ele recebe uma call back

// este exemploé para tarbalahar cada índice do vetor
/*for(let num of nums) {
    nums[i] = num * 2;
}*/

// já a função map vai fazer a mesma função de aplicar um trabalho em cada elemento do vetor.
console.log(nums.map(num => (num * 2))); // multiplica todos os valores por 2 e gera um novo vetor.

console.log(nums.find(num => (num > 8)));// retorna o pirmeiro valor que corresponde a condição especificada.

console.log(nums.filter(num => (num %2 == 0))); // retorna um vetor com elementos que corresponde a condição



const names = [
    "João Cardoso ",
    "Bruna Pereira",
    "Neuza Drumont",
    "Cristiano Costa",
    "Gabriel Vilaboas",
    "Gustavo Sousa",
    "Pedro Silva",
    "Camila Cardoso",
    "Ana Quirino",
    "Luiz Rocha",
    "Alonso Lima"
];

console.log(names.find(nome => nome.includes("Rocha"))); //Laura Rocha
// find retorna soemnte 1 valor, o primeiro que ele achar
console.log(names.filter(nome => nome.includes("Cardoso")));
console.log(names.filter(nome => !nome.includes("Cardoso")));

//String como Vetor
let nome = "Prof. Gabriel Braga";
let idade = 21; // esse uso abaixo das crases, chama-se interpolação
let mensagem = `Nome: ${nome}\nIdade: ${idade} `;// com crase eu posso dar Enter, diferente de se usar as pas duplas ou simples.
console.log(mensagem); // no uso da crase devo utilizar ${} para incluir o valor de uma variavel ao invés e ficar concatenando o  +.

console.log(nome[2]); // pode-se utilizar os colchetes após uma variável, para selecionar o caractere na posição indicada daquela string.
// a quebra de linha no JS é /n (br no HTML)

console.log("A pessoa com nome \"Vitor\" está esperando você na recepção!"); // /t é um tab.
