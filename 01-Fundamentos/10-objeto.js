const product = {};
product.name = "Water Plastic";
product.price = 2.99;

console.log(product);

product["Denconto legal"] = 0.40; // EVITAR UTILIZAR ATRIBUTOS COM ESPAÇO

const tShirt = {
  nome: "Camisa Polo",
  price: 79.90,
  description: {
    tecido: "Algodão 100% Prime",
    size: "GG",
  },
};

console.log(tShirt);
