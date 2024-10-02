/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
    crescente.*/


let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));

if (numero1 < numero2 && numero1 < numero3) {
    if (numero2 < numero3) {
        alert("A ordem crescente é: " + numero1 + ", " + numero2 + ", " + numero3);
    } else {
        alert("A ordem crescente é: " + numero1 + ", " + numero3 + ", " + numero2);
    }
} else if (numero2 < numero1 && numero2 < numero3) {
    if (numero1 < numero3) {
        alert("A ordem crescente é: " + numero2 + ", " + numero1 + ", " + numero3);
    } else {
        alert("A ordem crescente é: " + numero2 + ", " + numero3 + ", " + numero1);
    }
} else if (numero3 < numero1 && numero3 < numero2) {
    if (numero1 < numero2) {
        alert("A ordem crescente é: " + numero3 + ", " + numero1 + ", " + numero2);
    } else {
        alert("A ordem crescente é: " + numero3 + ", " + numero2 + ", " + numero1);
    }
}