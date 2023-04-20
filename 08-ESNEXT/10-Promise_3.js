/* eslint-disable no-param-reassign */
function gerarNumerosEntre(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const numeroAleatorio = Math.floor(Math.random() * fator) + min;
    resolve(numeroAleatorio);
  });
}

gerarNumerosEntre(1, 100)
  .then((numero) => numero * 10)
  .then((numeroX10) => `O número gerado é ${numeroX10}`)
  .then(console.log);
