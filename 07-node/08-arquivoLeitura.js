/* eslint-disable quotes */
const fs = require("fs");
const path = require('path');

const file = path.resolve(`${__dirname}/08-arquivo.json`);

// sincrono
const data = fs.readFileSync(file, "utf-8");
console.log(data);

// assincrono
fs.readFile(file, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.database.host}:${config.database.port}`);
});

const config = require("./08-arquivo.json");

console.log(config.database);

fs.readdir(__dirname, (err, conteudo) => {
  console.log("Conteudo da pasta");
  console.log(conteudo);
});
