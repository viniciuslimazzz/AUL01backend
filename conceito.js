// INICIO BACKEND - JAVASCRIPT

// VARIÁVEIS

//ANTIGO!!!!!!!!!!!, pode ser redeclarado e mudar o valor.

var idade = 10
var idade = 20 // não gera erro,mas pode gerar confusão,pois redeclara a variável e muda o valor dela.

//Mais moderno, pode mudar o valor, mas não pode ser redeclarado
let nome = "Júlia"
nome = "Dafny"; //permitido

"let nome"= "José"; //❌erro, pois redeclarou variável.


//const é Fixo, não pode mudar de valor
const pi = 3.14;
// pi = 40; //❌ erro

// FORMAS DE ESCREVER UM CÓDIGO

//CAMEL CASE -----* A mais Famosa
//Primeira Palavra começa com letra com a letra minuscúla, e as demais começam em letra maiúscula, sem espaço sem entre elas. 

//let nomeCompleto; let idadeUsuário; functionCalcularIdade{}{}

//PASCAL CASE -----* A mais usada em classes e cursos.

//Todas as palavras começam com a letra maiuscúla.

// class UsuárioSistema {
  // constructor(nome, idade) {
     this.nome = nome;
     this.idade = idade;
//     }
// };


// let nome_completo; let total_vendas;---------------------

