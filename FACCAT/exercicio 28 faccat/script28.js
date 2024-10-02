/*Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles*/



let numero1 = Number(prompt("Digite o primeiro número "))
let numero2 = Number(prompt("Digite o segundo número (sem repetir número) "))
let numero3 = Number(prompt("Digite o terceiro número (sem repetir número) "))
let maior

if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1
    alert ("O número maior é " + numero1)
} else
    if (numero2 > numero3 && numero2 > numero1) {
        maior = numero2
        alert ("O número maior é " + numero2)
    } else
        if (numero3 > numero1 && numero3 > numero2) {
            alert("O número maior é " + numero3)
        }
