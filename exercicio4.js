// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let notaFinal
let nota1 = parseInt(prompt("Digite a primeira nota"))
let nota2 = parseInt(prompt("Digite a segunda nota"))
let nota3 = parseInt(prompt("Digite a terceira nota"))
let nota4 = parseInt(prompt("Digite a quarta nota"))

notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

if (notaFinal >= 7) {
    console.log("Você foi APROVADO!!!")
} else {
    (notaFinal >= 5 <= 7)
    console.log("Você está de recuperação")
}
if(notaFinal <5){
        console.log("Você foi REPROVADO!!")
    }
