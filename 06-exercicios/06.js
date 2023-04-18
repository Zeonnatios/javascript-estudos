const inverso = (valor) => {
  if (typeof valor === "boolean") return !valor;
  if (typeof valor === "number") return -valor;
  return `Booleano ou números esperado, mas o parâmetro é do tipo ${typeof valor}`;
};

// console.log(typeof true === "boolean");
console.log(inverso(true));
console.log(inverso(false));
console.log(inverso(2000));
console.log(inverso(-2000));
console.log(inverso("teste"));
