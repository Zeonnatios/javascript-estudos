const menorNumero1 = (array) => {
  array.sort((a, b) => a - b);
  return array[0];
};

const menorNumero2 = (array) => Math.min(...array);

console.log(menorNumero1([10, 5, 35, 65]));
console.log(menorNumero1([5, -15, 50, 3]));

console.log(menorNumero2([10, 5, 35, 65]));
console.log(menorNumero2([5, -15, 50, 3]));
