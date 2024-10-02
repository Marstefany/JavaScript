/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
        compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
        escreva o custo total da compra*/


let maças = parseInt(prompt("Digite a quantidade de maçãs você vai comprar: "))
let preço
if (maças < 12){
    (preço = maças * 1.30)
}else{
    if (maças > 12)
(preço = maças* 1)
}
alert("Você ira pagar o valor de " + preço + " R$")

