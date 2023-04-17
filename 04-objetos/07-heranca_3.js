/* eslint-disable no-restricted-syntax, no-prototype-builtins, no-unused-expressions,guard-for-in */

const pai = { nome: "Pedro", corCabelo: "preto" };
console.log(pai);

const primeiraFilha = Object.create(pai);
primeiraFilha.nome = "Ana";
primeiraFilha.corCabelo = "Castanho";
console.log(primeiraFilha);

const segundaFilha = Object.create(pai, {
  nome: { value: "Maria", writable: false, enumerable: true },
});
segundaFilha.nome = "Clara";
segundaFilha.corCabelo = "Loiro";
console.log(segundaFilha);

console.log(Object.keys(primeiraFilha));
console.log(Object.keys(segundaFilha));

for (const key in segundaFilha) {
  segundaFilha.hasOwnProperty(key)
    ? console.log(key) : console.log("Por herança");
}
