/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/


var anos = parseInt (prompt("Digite sua idade expressa em anos"))
var meses = parseInt (prompt("Digite a quantidade de meses que passaram após seu ultimo aniversario"))
var dias = parseInt (prompt("Digite a quantidade de dias que passaram apos o seu ultimo mesversario"))
var total_anos = anos * 365
var total_meses = meses * 30
var resultado = total_anos + total_meses + dias
alert("A sua idade em dias é de"+ resultado)