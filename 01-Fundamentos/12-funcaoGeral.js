console.log(typeof Object);

class Produto {}
console.log(typeof Produto);

function imprimirSoma(a, b) {
  return a + b;
}

console.log(imprimirSoma(1, 2));

function soma(a, b = 0) {
  return a + b;
}

console.log(soma(1));

/* parte 2 */

// retorno implicito
const imprimirSomaArrow = (a, b) => a + b;

console.log(imprimirSomaArrow(2, 3));
