const array = [-10, -20, 30, 40, 1000, -50, 60, 70, -80, 90, -100];

let maiorValor = array[0];
let menorValor = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index] > maiorValor) { maiorValor = array[index]; }
  if (menorValor > array[index]) { menorValor = array[index]; }
}
console.log(`Maior valor: ${maiorValor}`);
console.log(`Menor valor: ${menorValor}`);
