const primeiroArray = [1, 2, 3, 4, 5, 6];
const segundoArray = [10, 20, 30, 40, 50, 60];

const receberSomenteParesPorIndicesPares = (array) => {
  const result = array.filter((valor, index) => index % 2 === 0 && valor % 2 === 0);
  return result;
};

console.log(receberSomenteParesPorIndicesPares(primeiroArray));
console.log(receberSomenteParesPorIndicesPares(segundoArray));
