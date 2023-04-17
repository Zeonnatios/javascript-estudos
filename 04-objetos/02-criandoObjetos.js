/* eslint-disable no-new-object */
// Notação literal
const first = {};
console.log(first);

// Object em JS
console.log(typeof Object, typeof new Object());

const second = new Object();
console.log(second);

// Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => (preco * (1 - desc)).toFixed(2);
}

const caneca = new Produto("Caneca", "39.99", "0.15");
console.log(caneca.getPrecoComDesconto());

// Function factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const joao = criarFuncionario("joao", 8000, 1);
const maria = criarFuncionario("maria", 8000, 7);

console.log(joao.getSalario());
console.log(maria.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma função que retorna um Objeto a partir de um JSON
const fromJSON = JSON.parse("{\"info\": \"sou um JSON\"}");
console.log(fromJSON);
console.log(JSON.stringify(fromJSON));
