const inverter = (objeto) => {
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);
  const objetoInvertido = {};
  for (let index = 0; index < keys.length; index += 1) {
    objetoInvertido[values[index]] = keys[index];
  }
  return objetoInvertido;
};

const objeto = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(inverter(objeto));
