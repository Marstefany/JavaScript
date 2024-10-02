
/* A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).*/



let valor_hora_trabalhada = Number(prompt("Digite o valor da sua hora trabalhada: "))
let quant_hora_trab = Number(prompt("Digite a quantidade de horas trabalhadas no mes"))
let hora_extra = Number( (quant_hora_trab - 160)* valor_hora_trabalhada)
let acrescimo = Number(hora_extra/2)
let salariofinal 
if (quant_hora_trab <= 160){
    salariofinal = valor_hora_trabalhada * quant_hora_trab
  
}else{

}if (quant_hora_trab > 160){
    salariofinal = quant_hora_trab * valor_hora_trabalhada + acrescimo
   
}else{}
alert("O seu salario final sera de: " + salariofinal)




