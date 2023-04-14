function getPreco(imposto = 0, moeda = "R$") {
  return `${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 3941,
  desc: 0.05,
  getPreco,
};

globalThis.preco = 20;
global.desc = 0.1;
console.log(getPreco());
