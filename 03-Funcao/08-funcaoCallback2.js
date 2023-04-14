const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9, 2];

console.log("Com callback");

const filterPositiveNotes = (nota) => nota >= 7;
const filterNegativeNotes = (nota) => nota < 7;

const positiveNotes = notas.filter(filterPositiveNotes).sort();
const negativeNotes = notas.filter(filterNegativeNotes).sort();

console.log(negativeNotes.sort());
console.log(positiveNotes.sort());

console.log("\nSem Callback");

const notaMaiorQue7 = notas.filter((nota) => nota >= 7).sort();
const notaMenorQue7 = notas.filter((nota) => nota < 7).sort();

console.log(notaMenorQue7);
console.log(notaMaiorQue7);
