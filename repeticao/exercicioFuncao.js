//Fazer um menu de exercicios utilizando o exemplo dado em aula
//Criar um menu, onde é possivel executar 6 dos exercicios anteriores.
//Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções
//O usuário poderá escolher qual exercicio ele quer visualizar.

//O usuario devera digitar 0 para sair do menu.

function calculoIdade() {
    let idade = parseInt(prompt("Digite seu ano de nascimento: "))

    if (2024 - idade >= 18) {
        console.log("Voce é maior de idade.")
    } else {
        console.log("voce não maior de idade.")
    }
}

function IMC() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "))

    let altura = parseFloat(prompt("Informe sua altura (em metros): "))

    let IMC = peso / (altura * altura)

    console.log("Seu IMC é:" + IMC.toFixed(2));

    if (IMC < 18.5) {
        console.log("Abaixo do peso")

    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Peso normal")
    }

    else if (IMC >= 25.0 && IMC <= 29.9) {
        console.log("Sobrepeso")
    }

    else if (IMC >= 30.0 && IMC <= 34.9) {
        console.log("Obesidade grau 1")
    }

    else if (IMC >= 35.0 && IMC <= 39.9) {
        console.log("Obesidade grau 2")
    }

    else if (IMC >= 40.0) {
        console.log("Obesidade grau 3")
    }
}

let opcao = prompt("Escolhe uma das opções a seguir: \n1 - Calculo de idade \n2 - Exercicio de IMC ")

switch (opcao) {
    case "1":
        calculoIdade()
        break;

    case "2":
        IMC()
        break;

    default:
        break;
}


