/* eslint-disable no-restricted-syntax, guard-for-in */

const notas = [5.1, 6.3, 7.5, 8, 9, 10];

for (const index in notas) {
  console.log(`Index: ${index}, nota: ${notas[index]}`);
}

const pessoa = {
  firstName: "Matheus",
  middleName: "Antonio",
  lastName: "Silva",
  peso: "107 Kg",
  altura: "175 cm",
};

console.log("\n");

for (const key in pessoa) {
  if (Object.hasOwnProperty.call(pessoa, key)) {
    console.log(`${key}: ${pessoa[key]}`);
  }
}
