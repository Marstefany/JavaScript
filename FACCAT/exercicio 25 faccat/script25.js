/*Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
        escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
        ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.*/



let numero_conta = Number(prompt("Informe o numero da sua conta :"))
let saldo = Number(prompt("Informe o valor do saldo da sua conta :"))
let debito = Number(prompt("Informe o valor do seu debito :"))
let credito = Number(prompt("Informe o valor do seu credito :"))
let saldo_atual = (saldo - debito + credito)
if (saldo_atual < 0 ){
    alert("O seu saldo é negativo")
}else
    if (saldo_atual >= 0){
        alert("O seu saldo é positivo")
    }else{}
