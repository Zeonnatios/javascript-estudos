/* eslint-disable no-restricted-syntax, guard-for-in, prefer-rest-params */

function calcularSoma() {
  let soma = 0;
  for (const index in arguments) {
    soma += arguments[index];
  }
  return soma;
}

console.log(calcularSoma());
console.log(calcularSoma(1));
console.log(calcularSoma(1.2, 2.2, 3.3));
console.log(calcularSoma(1.1, 2.2, "Teste"));
console.log(calcularSoma("a", "b", 1, "c", 2));
console.log(calcularSoma([1, 2, 3]));
