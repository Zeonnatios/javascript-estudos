// sem promise...
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

//
// const nomes = [];
// getTurma("A").then((alunosA) => {
//   alunosA.forEach((a) => nomes.push(`A: ${a.nome}`));
//   // console.log(nomes);
//   getTurma("B").then((alunosB) => {
//     alunosB.forEach((b) => nomes.push(`B: ${b.nome}`));
//     // console.log(nomes);
//     getTurma("A").then((alunosC) => {
//       alunosC.forEach((c) => nomes.push(`C: ${c.nome}`));
//       // console.log(nomes);
//     });
//   });
// });
//

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes));

getTurma("D").catch((e) => console.log(e.message));
