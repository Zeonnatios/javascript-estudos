class Pessoa {
  constructor(name) {
    this.name = name;
  }

  falar() {
    console.log(`Meu nome é ${this.name}`);
  }
}

const criarPessoa = (name) => new Pessoa(name);

const matheus = criarPessoa("matheus");
matheus.falar();
