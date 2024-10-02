
/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.*/



var salario_atual = parseFloat(prompt("Digite o seu salario atual: "))
var reajuste = parseFloat(prompt("Digite o valor do reajuste em porcentagem (sem o simbolo da porcentagem): "))
var aumento = salario_atual / 100 * reajuste
salario_atual = salario_atual + aumento
alert("O seu aumento é de" + aumento + "E o seu salario final é de: "+ salario_atual)

