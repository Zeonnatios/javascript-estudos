class Pessoa {
  constructor(name) {
    this.name = name;
  }

  falar() {
    console.log(`Meu nome é ${this.name}`);
  }
}

const matheus = new Pessoa("Matheus");
matheus.falar();

const boris = matheus;
boris.name = "Boris";

boris.falar();
matheus.falar();
