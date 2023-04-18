const despesasTotais = (compras) => {
  const despesas = compras.map((despesa) => despesa.preco);
  return despesas.reduce((total, item) => total + item);
};

const compras = [
  { nome: "Cinema", categoria: "Entretenimento", preco: 88 },
  { nome: "Notebook", categoria: "Eletrônicos", preco: 3941 },
  { nome: "Cadeira", categoria: "Móvel", preco: 1000 },
];

console.log(despesasTotais(compras));
