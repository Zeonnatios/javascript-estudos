const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(typeof peso1, typeof peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.8;
const avaliacao2 = 4;

const media = avaliacao1 * peso1 + avaliacao2 * peso2;

console.log(media.toFixed(2));

console.log(typeof media);

console.log(media.toString(2)); // em binário
