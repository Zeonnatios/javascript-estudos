/* eslint-disable no-param-reassign */
function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const numeroAleatorio = Math.floor(Math.random() * fator) + min;
      resolve(numeroAleatorio);
    }, tempo);
  });
}

function gerarVariorNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ]);
}

console.time("promise");

gerarNumerosEntre(1, 100)
  .then((numero) => numero * 10)
  .then((numeroX10) => `O número gerado é ${numeroX10}`)
  .then(console.log)
  .then(console.timeEnd("promise"));

gerarVariorNumeros().then((numeros) => console.log(numeros));
