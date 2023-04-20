// com promise...
const http = require("http");

// muito específico para esse exemplo
const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
const obterAlunos = async () => {
  const turmaA = await getTurma("A");
  const turmaB = await getTurma("B");
  const turmaC = await getTurma("C");
  const result = [...turmaA, ...turmaB, ...turmaC];
  return result;
}; // retorna um objeto AsyncFunction

obterAlunos()
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes));

const printAlunos = async () => {
  const alunos = await obterAlunos();
  console.log(alunos);
};

printAlunos();
