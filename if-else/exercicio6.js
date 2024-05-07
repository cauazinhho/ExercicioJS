// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let idade = parseInt(prompt("Digite seu ano de nascimento: "))

if(2024 - idade >= 18){
    console.log("Voce é maior de idade.")
}else{
    console.log("voce não maior de idade.")
}
