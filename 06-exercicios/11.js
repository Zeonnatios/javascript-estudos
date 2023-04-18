const receberPrimeiroUltimoElemento = (array) => [].concat(array[0], array[array.length - 1]);

const receberPrimeiroUltimoElemento2 = (array) => [array.shift(), array.pop()];

console.log(receberPrimeiroUltimoElemento([7, 14, "Hello World"]));
console.log(receberPrimeiroUltimoElemento2([7, 14, "Hello World"]));
