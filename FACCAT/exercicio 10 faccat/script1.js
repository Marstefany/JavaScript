/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor.*/



var custo_fabrica = parseFloat(prompt("Digite o valor do custo de fabrica: "))
var impostos_totais = custo_fabrica * (73/100)
var custo_final = custo_fabrica + impostos_totais
alert ("O custo final do consumidor é de " + custo_final)