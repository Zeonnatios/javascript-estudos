const gato = {
  nome: "Boris",
  idade: 8,
  peso: 3.5,
};

console.log(Object.keys(gato));
console.log(Object.values(gato));
console.log(Object.entries(gato));

Object.entries(gato).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(gato, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "31/01/2015",
});

console.log(gato.dataNascimento);

// Object.assign (ECMAScript 2015)
// *Concatenar objetos (podem sobrescrever atributos de acordo com a fila de objetos)
const dest = { a: 1 };
const first = { b: 2 };
const second = { c: 3, a: 4 };
const myObject = Object.assign(dest, first, second);
myObject.d = 5;
console.log(myObject);

Object.freeze(myObject);
myObject.d = 100;

console.log(myObject);
