const multiplicar = (vetor, numero) => {
  const array = [];
  for (let index = 0; index < vetor.length; index += 1) {
    array.push(vetor[index] * numero);
  }
  return array;
};

const multiplicarSeMaiorQue5 = (vetor, numero) => {
  const array = [];
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] > 5) array.push(vetor[index] * numero);
  }
  return array;
};

console.log(multiplicar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(multiplicarSeMaiorQue5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
