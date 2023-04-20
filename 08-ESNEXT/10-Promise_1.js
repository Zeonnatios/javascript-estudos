console.log(typeof Promise);

// algo que vai ser executado no futuro e devolvido no futuro
const promessa = new Promise((resolve) => {
  resolve({ status: true });
});
console.log(typeof promessa);
promessa.then((valor) => console.log(valor));

const promessaArray = new Promise((resolve) => {
  resolve(["Matheus", "Boris"]);
});
promessaArray.then((valor) => console.log(valor));

const getPrimeiroElemento = (array) => array[0];
const converterMinusculo = (letra) => letra.toLowerCase();

// o resultado de um then é passado para o próximo then
promessaArray
  .then(getPrimeiroElemento)
  .then(getPrimeiroElemento)
  .then(converterMinusculo)
  .then(console.log);
