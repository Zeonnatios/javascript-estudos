let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador += 1;
}
console.log(`Final do contador: ${contador}`);

for (let index = 1; index <= 10; index += 1) {
  console.log(`Index:${index}`);
}

const notas = [5.1, 6.3, 7.5, 8, 9, 10];

for (let index = 0; index < notas.length; index += 1) {
  console.log(`Nota: ${notas[index]}`);
}
