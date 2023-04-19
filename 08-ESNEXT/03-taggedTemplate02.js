/* eslint-disable no-restricted-globals */

function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((element, index) => {
    const valor = isNaN(element) ? element : `R$ ${element.toFixed(2)}`;
    resultado.push(partes[index], valor);
  });
  console.log(resultado);
  return resultado.join("");
}

const preco = 29.99;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
