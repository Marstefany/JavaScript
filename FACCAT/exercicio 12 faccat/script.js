/*Exercícios de Lógica de Programação - Algoritmos
Profa. Flávia Pereira de Carvalho - fpereira@faccat.br - http://fit.faccat.br/~fpereira 5
Exercícios 12 e 13 utilizar Horizontalização (ver capítulo 7)
12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
C F - 32
---------- = -----------
5 9
Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F*/



var fahren= parseFloat(prompt("Digite a temperatura em fahrenheit: "))
var celcius = ((fahren -32) * 5) / 9
alert("A temperatura em celcius é de " + celcius)