/* eslint-disable max-classes-per-file */

// ES8: Object.values e Object.entries
const objeto = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

// Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  idade: 18,
  ola() { return "Hello World"; },
};

console.log(pessoa.nome, pessoa.idade, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au au";
  }
}

console.log(new Cachorro().falar());
