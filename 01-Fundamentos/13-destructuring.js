const pessoa = {
  nome: "Matheus",
  idade: 23,
  endereco: {
    lagradouro: "Rua Um",
    numero: 1000,
  },
};

const { nome: fullName, idade: age } = pessoa;

console.log(fullName, age);

const { endereco: { lagradouro, numero } } = pessoa;
console.log(lagradouro, numero);

/**
 * Parte 2
 */
const [a] = [10];
console.log(a);

const [n1,,, n2,, n5 = -1] = [10, 7, 8];

console.log(n1, n2, n5);

/**
 * Parte 3
 */

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { min: 10, max: 30 };
console.log(rand(obj));
console.log(rand({ min: 900 }));
console.log(rand({}));

/**
 * Parte 4
 */

function newRand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(newRand([10, 20]));
console.log(newRand([, 20]));
console.log(newRand([100, 20]));
console.log(newRand([]));
