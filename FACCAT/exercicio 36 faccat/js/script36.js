/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    novo com a mulher mais velha*/



let mulher1 = parseInt(prompt("Digite a idade da primeira mulher"))
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher"))
let homem1 = parseInt(prompt("Digite a idade do primeiro homem"))
let homem2 = parseInt(prompt("Digite a idade do segundo homem"))
let soma
let soma2

if (mulher1 > mulher2 && homem1 > homem2){
    soma = (mulher2 + homem1)
    soma2 = (mulher1 + homem2)
}else{(mulher2 > mulher1 && homem2 > homem1)
    soma = (mulher1 + homem2)
    soma2 = (mulher2 + homem1)}
alert(" a soma das idades do homem mais velho com a mulher mais nova é " + soma + "e o produto das idades do homem mais novo com a mulher mais velha é " + soma2) 