function calcularHipotenusa(cateto1, cateto2) {
  const somaQuadrados = cateto1 * cateto1 + cateto2 * cateto2;

  return Math.sqrt(somaQuadrados);
}

const hipotenusa = calcularHipotenusa(3, 4);
console.log("Resposta: " + hipotenusa);
