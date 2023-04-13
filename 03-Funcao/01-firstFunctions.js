/**
 * Função em JS é First-Class Object (Citizens)
 * Higher-order function
 */

// criar de forma literal
function firstFunction() { console.log("first function"); }

// armazenar em uma variável
const secondFunction = function () { console.log("second function"); };

// armazenar em um array
const array = [firstFunction, secondFunction];

array[0]();
array[1]();

// armazenar em um atributo de objeto
const dog = {};
dog.latir = function () { return "Au au"; };

console.log(dog.latir());

// passar função como parametro
function run(action) {
  action();
}

run(firstFunction);

// uma função pode retornar/conter uma função
function somaTresValores(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

somaTresValores(1, 2)(3);
const primeiraSoma = somaTresValores(1, 2);
primeiraSoma(3);
