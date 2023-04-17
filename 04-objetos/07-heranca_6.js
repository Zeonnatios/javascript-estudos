/* eslint-disable no-proto */
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até mais", 456);

// simulando o new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem Vindo", 123);
console.log(aula1);
console.log(aula2);
console.log(aula3);
