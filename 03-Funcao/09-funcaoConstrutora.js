function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado, apenas ao escopo dessa função
  let velocidadeAtual = 0;

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const fiatUno = new Carro();
fiatUno.acelerar();
console.log(fiatUno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof fiatUno);
console.log(typeof ferrari);
