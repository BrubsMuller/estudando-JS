//  Estruturas Condicioais
// Condição -> é um cálculo lógico

/*const altura = 1.59;  //não coloco ponto e virgula depois do if pois ainda não é o final da instrução
if(altura >= 1.60)  //  false
    console.log("Entrou no brinquedo!"); // se o if for false a instrução é ignorada
else    
    console.log("Não entrou no briquedo!"); */

/*let nivelIngles = 6; // 1, 2, 3, 4, 5
if(nivelIngles == 1)
    console.log("Nivel Iniciante");
else if(nivelIngles == 2)
    console.log("Nivel Básico");
else if(nivelIngles == 3)   
    console.log("Nivel Intermediário");
else if(nivelIngles == 4)
    console.log("Nivel Avançado");
else if(nivelIngles == 5)
    console.log("Nivel Iniciante");
else
    console.log("Nivel de inglês desconhecido");

//Outro bloco

    let saldo = 250;
    if(saldo > 100)
        console.log("Comprar um livro");

    else if(saldo > 200)
        console.log("Comprar um Tênis");
    
    else if(saldo > 10000)
        console.log("Comprar uma Bolsa");

//outro bloco

let opcao = "Editar";
if(opcao == "Arquivo") // true ou false
    console.log("Novo, Abrir, Cofigurações."); // se for true entra aqui.
else if(opcao == "Editar")
    console.log("Desfazer, Refazer, Copiar.");
else if(opcao == "Ver")
    console.log("Buscar, Aparência, Explorar.");

// Escopo - > Bloco de código {} chaves

let conseguiuFazerCompra;  // flag
let saldo = 300;

if(saldo > 200) {
    console.log("Fez a compra do tenis");
    conseguiuFazerCompra = true;
}
else {
    console.log("Sem grana suficiente");
    conseguiuFazerCompra = false;
}

if(conseguiuFazerCompra)
    console.log("conseguiu fazer a compra!"); 

// outro bloco

let opcao = "Editar";
if(opcao == "Arquivo") {
        console.log("Novo, Abrir, Cofigurações."); 
}
else if(opcao == "Editar") {
        console.log("Desfazer, Refazer, Copiar.");
}
else if(opcao == "Ver") {
        console.log("Buscar, Aparência, Explorar.");
} */

// Aninhamento

/* let num1 = 90, num2 = 120, num3 = 300;
if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3); // um1 > num2 > num3
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
    }    
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log(num2 + " > " + num3 + " > "  + num1);
    }
}
else {
    if(num1 > num2) {
        console.log(num3 + " > " + num1 + " > "  + num2); 
    }
    else {
        console.log(num3 + " > " + num2 + " > "  + num1);
    }
} */

let mes = 9;
if(mes == 1) {
    console.log('Janeiro');
} 
else if(mes == 2) {
    console.log('Fevereiro');
} 
else if(mes == 3) {
    console.log('Março');
} 
else if(mes == 4) {
    console.log('Abril');
} 
else if(mes == 5) {
    console.log('Maio');
} 
else if(mes == 6) {
    console.log('Junho');
} 
else if(mes == 7) {
    console.log('Julho');
} 
else if(mes == 8) {
    console.log('Agosto');
} 
else if(mes == 9) {
    console.log('Setembro');
} 
else if(mes == 10) {
    console.log('Outubro');
} 
else if(mes == 11) {
    console.log('Novembro');
} 
else if(mes == 12) {
    console.log('Dezembro');
} 
else {
    console.log("Este mês não existe.")
}

// válido para quando queremos validar apenas um valor (ex. igualdade)
switch(mes) {
    case 1:
        console.log("Janeiro");
        break; // para o fluxo do switch
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Este mês não existe.");
    } 