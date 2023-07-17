// Objeto -> Estrutura que representa um obejto do mundo real (Ex. pessoas/produto/profissão, etc)
// Objeto pode ser modelado -> Classe (Nomde deve começar com letra maiúscula)

class Livro {
    titulo;
    paginas;
    autor ;
    isbn;
    categoria;

    alugar = function() {
        console.log("Alugado!")
    };

    static isLivro(livro) { //isLivro -> é uma função estática, ou seja, não será necessário instanciar o objeto para acessa-la
        let flag = livro.titulo == undefined;
        return !flag;
    }

    constructor(titulo, paginas, autor, isbn) { // o construtor vai substituir o objeto.atributo = "alguma coisa"
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
        // this -> Referencia a classe do obejto que está sendo construido
    }
}

// Para criar a estrutura "fisica" do objeto pela classe, é necessário fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro("", "", "", ""); // instancia do objeto Livro
//console.log(typeof arquiteturaLimpa);

//essas declarações abaixo, podem ser substituidas pelo construtor.
arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.autor = "Robert C. Martin";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-0460-6";
//console.log(arquiteturaLimpa);
//arquiteturaLimpa.alugar(); 

/*console.log("OI");
console.error("OI");
console.warn("OI");
console.info("OI");*/

let javaIniciantes = new Livro("Java para iniciantes", 500, "Herbert", "98432842");
javaIniciantes.titulo = "Java para avançados"
console.log(javaIniciantes);

//aplicando o uso do "static"
//let livroTeste = new Livro();
// livroTeste.titulo = "Titulo Teste";
//console.log(Livro.isLivro(livroTeste));

//Objeto é uam estrutura que representa o objeto do mundo real no nosso código.
// Classe é a Planta ou o Modelo do objeto.
// Instnacia é o processo de construir objetos "new Livro()"
// Constructor é a função que gera o objeto físico.
// Características são Atributos/Propriedades, Métodos/Funções.

// JavaScript -> Front end
// Java -> Back end

const objeto = {}; // cria um objeto sem classe
// console.log(typeof objeto);
console.log(objeto);

