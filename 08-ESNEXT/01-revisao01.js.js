/* eslint-disable no-var, vars-on-top, block-scoped-var */

// let e const
{
  var variavelGlobal = 2;
  const variavelDeEscopo = 3;
  console.log(variavelDeEscopo);
}
console.log(variavelGlobal);

// Template String
const produto = "Macbook";
console.log(`O ${produto} é muito caro!`);

// Destructuring
const [first, second, ...rest] = "Cod3r";
console.log(first, second, rest);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: age, nome: firstName } = { nome: "Ana", idade: 9 };
console.log(firstName, age);
