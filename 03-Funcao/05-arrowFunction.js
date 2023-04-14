let dobro = function (value) {
  return value * 2;
};

// eslint-disable-next-line arrow-body-style
dobro = (value) => {
  return value * 2;
};

dobro = (value) => value * 2; // retorno implícito
console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};

ola = () => "Olá";
console.log(ola());
