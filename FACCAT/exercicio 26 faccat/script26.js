/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
        quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
        média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
        a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
        compra'.*/


let quant_atual = Number(prompt("Digite a quantidade atual de produtos no estoque:"))
let quant_max = Number(prompt("Digite a quantidade maxima de produtos em estoque:"))
let quant_min = Number(prompt("Digite a quantidade minima de produtos em estoque:"))
let media = ((quant_max + quant_min) / 2)
if (quant_atual >= media){
    alert("Não efetuar compra ")
}else{

}if (quant_atual < media){
    alert("Efetuar compra")
}else{}