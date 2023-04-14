const soma = function (x, y) {
  return x + y;
};
const subtracao = function (x, y) {
  return x - y;
};

const print = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

print(3, 4);
print(3, 4, subtracao);
// eslint-disable-next-line prefer-arrow-callback
print(3, 4, function multi(x, y) {
  return x * y;
});
print(3, 4, (x, y) => x / y);

const pessoa = {
  falar() {
    console.log("Opa");
  },
};

pessoa.falar();
