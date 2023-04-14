const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 5577, 112348,
  21, 348, 53, 84, 53, 84, 23, 4, 5, 311];

let pares = 0;
let impares = 0;

for (let index = 0; index < array.length; index += 1) {
  if (array[index] % 2 === 0) {
    pares += 1;
  } else {
    impares += 1;
  }
}

console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);
