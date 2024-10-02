let numero = Number(prompt("Digite o primeiro numero: "))
let menor = numero
let maior = numero


while (numero >= 0){
    numero = Number(prompt("Informe um numero: "))
    if (numero >= 0 ){
        if (numero > maior){
            maior= numero
        }else if (numero < menor ){
            menor = numero 
        }
    } 
}alert("O maior numero digitado foi: " + maior + " E o menor numero digitado foi: " + menor)