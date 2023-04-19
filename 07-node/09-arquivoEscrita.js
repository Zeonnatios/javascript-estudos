const fs = require("fs");
const path = require("path");

const produto = {
  nome: "Notebook",
  preco: 3891,
};

fs.writeFile(
  path.resolve(`${__dirname}/09-arquivoGerado.json`),
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo foi salvo !");
  },
);
