document.body.innerHTML = "<h1>Teste H1</h1>"
document.body.innerHTML += '<p id="texto">Outro Teste H1</p>'

let paragrafo = document.getElementById(texto)

paragrafo.style.color = "blue"

let opcao = prompt("Escolha a cor do paragrafo \n1 - Verde \n2 - Vermelho")

if (opcao == "1") {
    paragrafo.style.color = "darkgreen"

}else if (opcao == "2"){
    paragrafo.style.color = "red"
}else {
    window.alert("Opção Invalida")
}