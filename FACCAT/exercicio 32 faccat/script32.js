/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE*/



let time1 = (prompt("Informe o nome do primeiro time: "))
let time2 = (prompt("Informe o nome do segundo time: "))
let gol1 = Number(prompt("Informe a quantidade de gols realizado pelo primeiro time: "))
let gol2 = Number(prompt("Informe a quantidade de gols realizado pelo segundo  time: "))
if (gol1 > gol2){
    alert("O time vencedor é o time" + time1)
}else
if (gol2 > gol1){ 
    alert("O time vencedor é o time" + time2)
} else{
 (gol1 == gol2)
    alert("O jogo deu empate")}

// estudar if else 

