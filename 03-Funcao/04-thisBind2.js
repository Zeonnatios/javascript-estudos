function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade += 1;
    console.log(this.idade);
  }, 1000);
}

const pessoa = new Pessoa();
pessoa;
