/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/



let pedido = (prompt("Digite qual fruta deseja comprar: (Maça ou Morango)"))
let quantKG = parseFloat(prompt("Digite o valor em KG"))
let maca
let morango
let desconto
let valorfinal

if (pedido === 'Morango') {
    if (quantKG <= 5) {
        morango = 2.50
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG <= 7) {
        morango = 2.20
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG >= 8) {
        morango = 2.20
        desconto = (quantKG * morango) * 0.1
        valorfinal = (quantKG * morango) - desconto
        alert("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    }
}


/*

segunda versão do codigo
function calcularValor(morangoKg, macaKg) {
    let precoMorango, precoMaca;

    // Definir o preço por Kg de morangos e maçãs
    if (morangoKg <= 5) {
        precoMorango = 2.50;
    } else {
        precoMorango = 2.20;
    }

    if (macaKg <= 5) {
        precoMaca = 1.80;
    } else {
        precoMaca = 1.50;
    }

    // Calcular o valor total sem desconto
    let valorMorango = morangoKg * precoMorango;
    let valorMaca = macaKg * precoMaca;
    let valorTotal = valorMorango + valorMaca;

    // Verificar se há desconto
    let pesoTotal = morangoKg + macaKg;
    if (pesoTotal > 8 || valorTotal > 25.00) {
        valorTotal *= 0.90; // Aplicar 10% de desconto
    }

    return valorTotal.toFixed(2); // Retornar o valor com duas casas decimais
}

// Exemplo de uso
let morangoKg = parseFloat(prompt("Digite a quantidade de morangos (kg):"));
let macaKg = parseFloat(prompt("Digite a quantidade de maçãs (kg):"));
let valorAPagar = calcularValor(morangoKg, macaKg);

alert("O valor total a ser pago é: R$ " + valorAPagar);
*/