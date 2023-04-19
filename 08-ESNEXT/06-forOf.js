/* eslint-disable no-restricted-syntax */

for (const letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (const assunto of assuntosEcma) {
  console.log(assunto);
}
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (const assunto of assuntosMap) {
  console.log(assunto);
}

for (const key of assuntosMap.keys()) {
  console.log(key);
}

for (const value of assuntosMap.values()) {
  console.log(value);
}

for (const [key, value] of assuntosMap.entries()) {
  console.log(key, value);
}

const letras = new Set(["a", "b", "c"]);
for (const letra of letras) {
  console.log(letra);
}
