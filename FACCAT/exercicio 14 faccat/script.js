/*Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
        contrário escrever NÃO É MAIOR QUE 10!*/




let numero = parseFloat(prompt("Digite um número:"))
if (numero < 10 ) {
    alert("o número é menor que dez")
}else
if (numero > 10){
    alert("O número é maior que 10")
}else
if (numero == 10){
    alert("O número é igual a dez")
}