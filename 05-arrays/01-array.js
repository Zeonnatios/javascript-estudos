console.log(typeof Array, typeof new Array(), typeof []);

const aprovados = ["Boris", "Antonio"];

console.log(aprovados);

console.log(aprovados[2] === undefined);

aprovados.splice(1, 0, "Ana", "Maria");
console.log(aprovados);
