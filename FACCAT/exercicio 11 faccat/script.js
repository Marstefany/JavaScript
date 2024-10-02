/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor*/




var salario_fixo = parseFloat(prompt("Digite o seu salario fixo: "))
var quant_carros = parseInt(prompt("Digite a quantidade de carros vendidos: "))
var total_vendas = parseFloat(prompt("Digite o valor total das suas vendas:  "))
var valor_por_vendas = parseFloat(prompt("Digite o valor que voce recebe por cada venda realizada:  "))
var extra = total_vendas * (5/100)
var total = quant_carros * valor_por_vendas
var salario_final = extra + total + salario_fixo 
alert("O salario final do funcionario sera de:"+ salario_final)

 

