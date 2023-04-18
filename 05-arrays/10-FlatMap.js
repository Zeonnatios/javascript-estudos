/* eslint-disable no-extend-native */

const escola = [
  {
    nome: "Turma 1 - manhã",
    alunos: [
      { nome: "Gustavo", nota: 8.1 },
      { nome: "Ana", nota: 9.3 },
    ],
  },
  {
    nome: "Turma 2 - manhã",
    alunos: [
      { nome: "Rebeca", nota: 8.9 },
      { nome: "Roberto", nota: 7.3 },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);
const notas = escola.map(getNotasDaTurma);
console.log(notas);

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
