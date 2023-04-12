let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("OS VERDADEIROS");
console.log(!!1);
console.log(!!"text");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!isAtivo);

console.log("OS FALSOS");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Finalizando");

console.log(!!("" || null || undefined || NaN || []));
