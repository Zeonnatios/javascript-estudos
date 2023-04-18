const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const notas = alunos.map((aluno) => aluno.nota);
console.log("notas: ", notas);

const resultado = notas.reduce((acumulador, atual) => {
  console.log("Reduce: ", acumulador, atual);
  return acumulador + atual;
}, 0);
console.log("Resultado: ", resultado);
