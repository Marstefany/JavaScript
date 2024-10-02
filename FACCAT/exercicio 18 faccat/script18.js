/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
        poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)*/

        
let anoatual = parseInt(prompt("Digite o ano atual: "))
let anonasc = parseInt(prompt("Digite o ano de seu nascimento: "))
let idade = ( anoatual- anonasc)
if (idade >= 18){
    alert("Você deve votar")
}else
if (idade >= 16){
    alert("Seu voto é opcional")
}else
if (idade < 16){
    alert("Você não pode votar")
}else{}
    

//   OUTRA MANEIRA
//   let idade = parseInt(prompt("Digite a sua idade : "))
//   if (idade < 16) {
//   alert("Não pode votar")
//   } else
//   if (idade < 18) {
//   alert("Voto opcional")
//   } else {
//       alert("Voto Obrigatório")
//   }
