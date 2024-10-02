/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
até 20 litros, desconto de 3% por litro
Álcool acima de 20 litros, desconto de 5% por litro
até 20 litros, desconto de 4% por litro
Gasolina acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2. 90*/



let litros = parseFloat(prompt("Digite o número de litros vendidos:"));
let tipoCombustivel = prompt("Digite o tipo de combustível (A - Álcool, G - Gasolina):").toUpperCase();

let precoLitro;
let desconto;
let valorTotal;

// Verificando o tipo de combustível
if (tipoCombustivel === 'A') {
    precoLitro = 2.90;
    if (litros <= 20) {
        desconto = 0.03;  // 3% de desconto
    } else {
        desconto = 0.05;  // 5% de desconto
    }
} else if (tipoCombustivel === 'G') {
    precoLitro = 3.30;
    if (litros <= 20) {
        desconto = 0.04;  // 4% de desconto
    } else {
        desconto = 0.06;  // 6% de desconto
    }
} else {
    alert("Tipo de combustível inválido!");
}

// Calcula e apresenta o valor total, se as variáveis foram definidas
if (precoLitro !== undefined) {
    valorTotal = litros * precoLitro * (1 - desconto);
    alert("O valor a ser pago é: R$ " + valorTotal.toFixed(2));
}