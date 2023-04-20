const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "dados.txt");

const lerArquivo = ((filePath) => new Promise((resolve) => {
  const data = fs.readFileSync(filePath, "utf-8");
  resolve(data);
}));

lerArquivo(file)
  .then((conteudo) => conteudo.split("\r\n"))
  .then((linhas) => console.log(linhas));
