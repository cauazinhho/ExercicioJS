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

function leiaNota() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    console.log(media)

    if (media >= 7) {
        console.log("Você foi APROVADO!!!")
    }
    else if (media < 7 && media >= 5) {
        console.log("Você está de recuperação")
    }
    else {
        console.log("Você foi REPROVADO!!")
    }

}

function dia() {
    let dia = prompt("Digite o dia que você deseja")



    if (dia == "1") {
        console.log("segunda-feira")
    }

    if (dia == "2") {
        console.log("Terça-feira")
    }

    if (dia == "3") {
        console.log("Quarta-feira")
    }

    if (dia == "4") {
        console.log("Quinta-feira")
    }

    if (dia == "5") {
        console.log("Sexta-feira")
    }

    if (dia == "6") {
        console.log("Sabado")
    }

    if (dia == "7") {
        console.log("Domingo")
    }
}

function contadorImpar() {
    for (let contador = 0; contador <= 50; contador++) {


        if (contador % 2 != 0) {
            console.log(contador)
        }

    }

    for (let contador = 0; contador <= 50; contador++) {

        if (contador % 2 !== 0) {
            console.log(contador)
        }

    }
}
function contagemRegressiva() {
    let num = parseInt(prompt("Digite um numero para contagem regressiva: "));

    console.log("Contagem regressiva está começando em: " + numero);

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva finalizada!!");
}



let menu = prompt("Escolhe uma das opções a seguir: \n1 - Calculo de idade \n2 - Exercicio de IMC \n3 - Leia as Notas Escolar \n4 - Qual dos dias da semana você deseja \n5 - Contador de numero ímpares \n6 - Contador de contagem regressiva ")


switch (menu) {

        case "1":
            calculoIdade()
            break;

        case "2":
            IMC()
            break;

        case "3":
            leiaNota()
            break;

        case "4":
            dia()
            break;

        case "5":
            contadorImpar()
            break;

        case "6":
            contagemRegressiva()
            break;

        default:
            break;
    }

    do {
        menu = parseInt(prompt("Digite um número (Digite 0 para sair)"))
    } while (menu !== 0)






