/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
    minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
    de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.*/

let hora_inicio = parseInt(prompt("Informe a hora (inteira) do inicio da partida: "))
let hora_fim = parseInt(prompt("Informe a hora (inteira) do fim da partida: "))
let duração = parseInt
if (hora_fim >= hora_inicio){
    duração = hora_fim - hora_inicio
}else{

}if (hora_fim < hora_inicio){
    duração= (24 - hora_inicio) + hora_fim
}else{}
alert("A duração do jogo foi de: " + duração + " horas")