// Declaração da função - Ensinando ao computador
function bemVindo(nome){
    console.log("Bem vindo " + nome);

}

// Chamada da função - Executa qual é a função
bemVindo("Tadeu")

//Ex. de soma
function somar(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;

}

let resultado = somar(6, 5)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// calculo de media

function mostrarSituaçãoAluno() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: ")) // declaração de variavel
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))

    let somaNotas = nota1 + nota2 + nota3

    let media = somaNotas / 3

    console.log(media);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarSituaçãoAluno(nota1, nota2, nota3) {


    let somaNotas = nota1 + nota2 + nota3

    let media = somaNotas / 3

    console.log(media);
}
