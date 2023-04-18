const somarNumeros = (array) => array.reduce((acumulador, atual) => acumulador + atual);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [951, 85, 6, 161, 846, 15, 485, 61, 5, 2385];

console.log(somarNumeros(array1));
console.log(somarNumeros(array2));
