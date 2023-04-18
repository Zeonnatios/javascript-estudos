const alunos = [{ nome: "Matheus", nota: 9.5 }, { nome: "Maria", nota: 8.5 }];

// Imperativo
let total1 = 0;
for (let index = 0; index < alunos.length; index += 1) {
  total1 += alunos[index].nota;
}
console.log(total1 / alunos.length);

// Declarativo
const notas = alunos.map((aluno) => aluno.nota);
const somaNotas = notas.reduce((total, atual) => total + atual);
const media = somaNotas / notas.length;
console.log(media);
