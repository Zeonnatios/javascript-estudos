// node faz cache dos modulos, mantém essas instância como sendo um singleton (unica instancia)
module.exports = {
  valor: 1,
  inc() {
    this.valor += 1;
  },
};
