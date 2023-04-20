/* eslint-disable prefer-promise-reject-errors */
function testePromessa(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // con.log("temp");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

testePromessa("Testando...", 0.5)
  .then((valor) => `Valor: ${valor}`)
  .then(
    (v) => console.log(v),
    // (err) => console.log(`Erro especifico: ${err}`),
  )
  .then(() => console.log("Quase fim!"))
  .catch((err) => console.log(`Erro no catch: ${err}`))
  .then(() => console.log("Fim"));
