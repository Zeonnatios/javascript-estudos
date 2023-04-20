/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */

function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const numeroAleatorio = Math.floor(Math.random() * fator) + min;
    console.log(`Numero aleatório: ${numeroAleatorio}`);
    if (numerosProibidos.includes(numeroAleatorio)) {
      reject("Número repetido");
    } else {
      resolve(numeroAleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (const _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (error) {
    if (tentativas > 10) {
      throw new Error("Excedido limite de tentativas");
    } else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(20)
  .then(console.log)
  .catch((err) => console.log(err.message));
