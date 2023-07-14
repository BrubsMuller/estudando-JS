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




