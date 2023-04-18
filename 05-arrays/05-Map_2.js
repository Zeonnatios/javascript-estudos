const carrinho = [
  "{ \"nome\": \"Borracha\", \"preco\": 3.45}",
  "{ \"nome\": \"Caderno\", \"preco\": 13.90}",
  "{ \"nome\": \"Kit de Lapis\", \"preco\": 41.22}",
  "{ \"nome\": \"Caneta\", \"preco\": 7.50}",
];

// Retornar um array apenas com os preços
const result = carrinho.map((element) => JSON.parse(element)).map((element) => element.preco);
console.log(result);

const paraObjeto = (element) => JSON.parse(element);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
