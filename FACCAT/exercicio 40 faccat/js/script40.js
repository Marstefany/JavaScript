/* Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
- Se quantidade <= 5 o desconto será de 2%
- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
- Se quantidade > 10 o desconto será de 5%*/



let produto = (prompt("Informe o nome do produto"))
let quantidade = Number(prompt("Informe a quantidade adquirida: "))
let preço = Number(prompt("Informe o preço unitario: "))
let total
let desconto

if (quantidade <= 5 ){
    desconto = (quantidade * preço) * 0.02
    total = (quantidade * preço) - desconto
    alert("Você comprou " + quantidade + "de" + produto + "Totalizando o valor de:" + total )
}else if (quantidade <= 10 ){
    desconto = (quantidade * preço) * 0.03
    total = (quantidade * preço) - desconto
    alert("Você comprou " + quantidade + "de" + produto + "Totalizando o valor de:" + total )
} else{
     (quantidade > 10 )
    desconto = (quantidade * preço) * 0.05
    total = (quantidade * preço) - desconto
    alert("Você comprou " + quantidade + "de" + produto + "Totalizando o valor de:" + total ) }