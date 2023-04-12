/**
 * Objeto {} e Array [] são armazenados na memoria e variaveis recebem essa referência por memória
 * Valores primitivos
 */

let valor; // undefined, não inicializada
console.log(valor); // undefined

valor = null;
/**
 * ausência de valor não há valor e não tem nenhum referência nenhum valor na memória
 */

console.log(null); // null

const product = { };

// EVITE ATRIBUIR UNDEFINED
console.log(product.price); // undefined

product.price = 10;
// delete product.price
console.log(product);

product.price = null;
console.log(product);
