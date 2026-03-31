function calcularDesconto(valorProduto, percentualDesconto) {
const desconto = valorProduto * (percentualDesconto / 100);
const valorFinal = valorProduto - desconto;

console.log("Valor original: R$ " + valorProduto.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor final: R$ " + valorFinal.toFixed(2));
}

calcularDesconto(4676, 17);