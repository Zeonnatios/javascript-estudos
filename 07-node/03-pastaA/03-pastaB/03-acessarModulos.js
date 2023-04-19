const http = require("http");
const moduloA = require("../../01-moduleA");
const moduloC = require("./03-pastaC");

console.log(moduloA);
console.log(moduloC.ola);

http.createServer((req, res) => {
  res.write(`Bom dia! ${moduloC.ola}`);
  res.end();
}).listen(8080);
