/*Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
        maiores.*/



let valor1 = Number(prompt("digite o primeiro valor"))
let valor2 = Number(prompt("Digite o segundo valor: (obs ele não pode ser igual o primeiro)"))
let valor3 = Number (prompt("Digite o terceiro valor: (obs ele não pode ser igual o segundo"))
let soma 

if (valor1 > valor2 && valor1 > valor3 && valor3 < valor2) {
    (soma= valor1 + valor2)
}else{

}if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3){
    (soma= valor2 + valor1)
}else{

}if (valor3 > valor1 && valor3 > valor2 && valor2 > valor1){
(soma= valor3 + valor2)
}else{}

alert("o resultado da soma entre os maiores numeros são de:" + soma)