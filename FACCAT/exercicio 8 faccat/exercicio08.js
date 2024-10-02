/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

var total_eleitores = parseInt(prompt("Digite o total de eleitores:"))
var votos_brancos = parseInt(prompt("Digite o valor de votos brancos:"))
var votos_nulos = parseInt(prompt("Digite o valor de votos nulos:"))
var votos_validos = parseInt(prompt("Digite o valor de votos validos:"))
var porcentagem__vt_brancos = votos_brancos / total_eleitores * 100
var porcentagem__vt_nulos = votos_nulos / total_eleitores * 100
var porcentagem__vt_validos = votos_validos / total_eleitores * 100
alert ("A porcentagem de votos brancos é de" + porcentagem__vt_brancos + "%")
alert ("A porcentagem de votos nulos é de" + porcentagem__vt_nulos + "%")
alert ("A porcentagem de votos validos é de" + porcentagem__vt_validos + "%")
