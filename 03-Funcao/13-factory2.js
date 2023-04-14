// Factory Simples (função que retorna um objeto)

function createProduct(name, price) {
  return {
    name,
    price,
    discount: 0.05,
  };
}

const product = createProduct("Whey Protein", 100);
console.log(product);
console.log(product.price - (product.discount * 100));
