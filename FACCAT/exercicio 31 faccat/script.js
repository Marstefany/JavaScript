/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
        ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
        dos outros 2 lados*/




let ladoa = Number(prompt("Informe o valor do primeiro lado:"));
let ladob = Number(prompt("Informe o valor do segundo lado:"));
let ladoc = Number(prompt("Informe o valor do terceiro lado:"));

if (ladoa < ladob + ladoc && ladob < ladoa + ladoc && ladoc < ladoa + ladob) {
    alert("É um triângulo");
} else {
    alert("Não é um triângulo");
}