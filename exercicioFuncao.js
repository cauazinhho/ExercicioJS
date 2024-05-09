//Fazer um menu de exercicios utilizando o exemplo dado em aula
//Criar um menu, onde é possivel executar 6 dos exercicios anteriores.
//Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções
//O usuário poderá escolher qual exercicio ele quer visualizar.

//O usuario devera digitar 0 para sair do menu.

function exemploRepeticao() {
    let idade = parseInt(prompt("Digite seu ano de nascimento: "))

if(2024 - idade >= 18){
    console.log("Voce é maior de idade.")
}else{
    console.log("voce não maior de idade.")
}
}

let opcao = prompt("Escolhe uma das opções á seguir: \n1 - Exemplo Calculo de idade \n2 ")

switch (opcao) {
    case "1":
        exemploRepeticao()
        break;

    default:
        break;
}