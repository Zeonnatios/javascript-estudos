// sem promise...
const http = require("http");

// muito específico para esse exemplo
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";

    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

const nomes = [];
getTurma("A", (alunosA) => {
  alunosA.forEach((a) => nomes.push(`A: ${a.nome}`));
  // console.log(nomes);
  getTurma("B", (alunosB) => {
    alunosB.forEach((b) => nomes.push(`B: ${b.nome}`));
    // console.log(nomes);
    getTurma("A", (alunosC) => {
      alunosC.forEach((c) => nomes.push(`C: ${c.nome}`));
      console.log(nomes);
    });
  });
});
