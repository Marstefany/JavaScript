/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
n1 * 2 + n2 * 3 + n3 * 5
mediafinal = -----------------------------------
10*/


var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))
var nota3 = parseFloat(prompt("Digite a terceira nota: "))
var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10
alert("A sua media é de:" + media)