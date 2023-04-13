function calcularArea(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m²`);
  } else {
    return area;
  }
}

console.log(calcularArea(2, 2));
console.log(calcularArea(5, 5));
console.log(calcularArea(2, 3, 4, 11));
