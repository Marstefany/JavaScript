/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
        ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
        ultrapassar este valor, calcular e escrever o seu salário total.*/





let salario_fixo = Number(prompt("Digite o seu salário fixo: "));
let vendas = Number(prompt("Digite o valor das suas vendas totais: "));
let comissão1 = 3 / 100; // 3%
let comissão2 = 5 / 100; // 5%
let salario_final = salario_fixo; // Inicializa o salário final com o salário fixo

if (vendas <= 1500) {
    salario_final += vendas * comissão1; // Comissão de 3% para vendas até R$ 1500
} else {
    salario_final += (1500 * comissão1); // Comissão sobre os primeiros R$ 1500 (pois ele so começa receber 5% a partir do momento de que ele vende 1 real a mais do que 1500. Por exemplo ele so vai receber 5% de comissao se ele fizer 1501 sendo 3% de comissao para o 1500 e 5% de comissão para o 1 totalizando em 45,05 )
    salario_final += ((vendas - 1500) * comissão2); // Comissão de 5% sobre o que ultrapassa R$ 1500
}

alert("O seu salário final será de: " + salario_final);
