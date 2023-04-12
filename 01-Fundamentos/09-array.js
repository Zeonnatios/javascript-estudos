const valores = [7.7, 7.8, 7.9, 8];

console.log(valores[0], valores[3]);

console.log(valores[4]);

valores[4] = 8.1;

valores[8] = 10;

console.log(valores);
console.log(valores.length);
console.log(valores.pop());
console.log(valores);
delete valores[2];
console.log(valores);

console.log(typeof valores);
